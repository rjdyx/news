<?php

namespace App\Http\Controllers;

use DB;
use App\LabNav;
use App\LabNews;
use App\LabLink;
use App\LabEnclosure;
use App\LabCarouselPic;
use App\LabBottomMessage;
use Illuminate\Http\Request;

class IndexController extends Controller
{

    /**
     * 公共信息
     * @param  string $value [description]
     * @return [type]        [description]
     */
    public function publicMessage()
    {
        // 导航栏
        $navs = LabNav::where('pid', 0)
                    ->where('name', '<>', '主页')
                    ->where('name', '<>', '下载中心')
                    ->orderBy('sequence')
                    ->get();
        $navsList = array();
        foreach ($navs as $nav) {
            $item = array();
            array_push($item, $nav);
            $subNavs = LabNav::where('pid', $nav->id)
                            ->orderBy('created_at')
                            ->get();
            array_push($item, $subNavs);
            array_push($navsList, $item);
        }

        // 版权信息
        $bottomMessage = LabBottomMessage::all()[0];

        return [
            'navs' => $navsList,
            'bottomMessage' => $bottomMessage
        ];
    }

    /**
     * 获取首页信息
     * @return [type] [description]
     */
    public function index()
    {
        // 滚动大图
        $carouselPicList = LabCarouselPic::orderBy('created_at', 'desc')
                                ->take(6)
                                ->get();

        // 新闻
        $first = LabNews::where('pid', -2)
                    ->orderBy('created_at', 'desc')
                    ->take(6);
        $second = LabNews::where('pid', -3)
                    ->orderBy('created_at', 'desc')
                    ->take(6);
        $newsList = LabNews::where('pid', -5)
                    ->orderBy('created_at', 'desc')
                    ->take(6)
                    ->union($first)
                    ->union($second)
                    ->get();

        // 友情链接
        $links = LabLink::where('pid', 0)
                    ->where('link', '分类')
                    ->orderBy('priority')
                    ->get();
        $linkList = array();
        foreach ($links as $link) {
            $item = array();
            array_push($item, $link);
            $sublinks = Lablink::where('pid', $link->id)
                            ->orderBy('priority')
                            ->get();
            array_push($item, $sublinks);
            array_push($linkList, $item);
        }

        $result = array_merge([
            'carouselPicList' => $carouselPicList,
            'newsList' => $newsList,
            'linkList' => $linkList
        ], $this->publicMessage());

        return view('index', $result);
    }

    /**
     * 获取新闻详情
     * @param  [type] $id [description]
     * @return [type]     [description]
     */
    public function news($id)
    {
        $news = LabNews::find($id);
        $result = array_merge(['news' => $news], $this->publicMessage());
        return view('home.news', $result);
    }

    /**
     * 获取导航栏页数据
     * @param  [type] $id    [description]
     * @param  [type] $model [description]
     * @return [type]        [description]
     */
    public function newsPage($id, $model)
    {
        $news = null;
        $newsList = null;
        $navList = array();

        $message = $this->publicMessage();
        $nav = LabNav::find($id);
        // 导航栏不存在
        if (!$nav) {
            return view('404');
        }

        if ($nav->pid == 0) { // 主导航栏
            $subNavs = LabNav::where('pid', $id)->get();
            if (sizeof($subNavs) > 0) {// 包含子导航栏的主导航栏禁止进入
                return view('404');
            }
            array_push($navList, $nav);
            array_push($navList, $subNavs);
        } else { // 子导航栏
            $mianNav = LabNav::find($nav->pid);
            $subNavs = LabNav::where('pid', $nav->pid)->orderBy('created_at')->get();
            array_push($navList, $mianNav);
            array_push($navList, $subNavs);
        }

        $newsTotal = LabNews::where('pid', $id)->count();
        if ($nav->model == 1 && $newsTotal == 1) { // 显示内容并且只有一篇
            $news = LabNews::where('pid', $id)->first();
        } else { // 其余情况只能显示列表
            $newsList = DB::table('lab_news')
                ->select(
                    'lab_news.id',
                    'lab_news.title',
                    'lab_news.created_at'
                )
                ->where('pid', $id)
                ->orderBy('created_at', 'desc')
                ->paginate(config('app.page_size'));
        }

        $result = array_merge([
            'navList' => $navList,
            'subNav' => $nav,
            'news' => $news,
            'newsList' => $newsList,
        ], $message);
        return view('home.news-page', $result);
    }

    /**
     * 获取下载数据
     * @return [type] [description]
     */
    public function download()
    {
        $enclosure = LabEnclosure::paginate(config('app.page_size'));
        $result = array_merge(['enclosure' => $enclosure], $this->publicMessage());
        return view('home.download', $result);
    }

    public function moreNews($id)
    {
        $newsList = LabNews::where('pid', $id)->paginate(config('app.page_size'));
        if ($id == -5) {
            foreach ($newsList as $news) {
                $content = substr($news->content, stripos($news->content, 'http'));
                $news->content = substr($content, 0, stripos($content, '>') - 1);
            }
        }
        $result = array_merge(['newsList' => $newsList, 'pid' => $id], $this->publicMessage());
        return view('home.more-news', $result);
    }
}
