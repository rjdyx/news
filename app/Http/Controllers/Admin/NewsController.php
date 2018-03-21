<?php

namespace App\Http\Controllers\Admin;

use DB;
use App\LabNews;
use Illuminate\Http\Request;
use Facades\App\Facades\IUtils;
use App\Http\Controllers\Controller;
use App\Http\Controllers\Admin\CarouselPicController;

class NewsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * 根据pid和priority获取文章列表
     * @param  Request $request [description]
     * @return [type]           [description]
     */
    public function getNewsList(Request $request)
    {
        $pid = $request->input('parent');
        $priority = $request->input('priority');

        $results = DB::table('lab_news')
            ->select(
                'lab_news.id',
                'lab_news.title',
                'lab_news.created_at'
            )
            ->where('pid', $pid)
            ->where('priority', $priority)
            ->orderBy('created_at', 'desc')
            ->paginate(config('app.page_size'));

        return response()->json($results);
    }

    /**
     * 根据id获取文章详细信息
     * @param  [type] $id [description]
     * @return [type]     [description]
     */
    public function getNewsById($id)
    {
        return response()->json(LabNews::find($id));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        return $this->storeOrUpdate($request);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        return $this->storeOrUpdate($request, $id);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        return response()->json(LabNews::destroy($id));
    }

    /**
     * store or update
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    private function storeOrUpdate(Request $request, $id=0) 
    {
        $this->validate($request, [
            'title' => 'required|string|max:255',
            'content' => 'required|string',
            'priority' => 'required|numeric',
            'pid' => 'required|numeric',
            'time' => 'required|date',
            'pic' => 'string'
        ]);

        $attributes = ['title', 'content', 'priority', 'pid'];
        $news = $id? LabNews::find($id): new LabNews();
        IUtils::valueFn($request, $news, $attributes);
        $news->created_at = $request->input('time');
        $news->save();

        $request->offsetSet('news_id', $news->id);
        $id = (new CarouselPicController())->store($request);

        return response()->json(true);
    }
}
