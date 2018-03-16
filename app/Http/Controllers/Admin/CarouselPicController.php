<?php

namespace App\Http\Controllers\Admin;

use DB;
use App\LabCarouselPic;
use Illuminate\Http\Request;
use Facades\App\Facades\IUtils;
use App\Http\Controllers\Controller;

class CarouselPicController extends Controller
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

    public function getCarouselPicByNewsId($id)
    {
        $pics = LabCarouselPic::where('news_id', $id)->get();
        return response()->json($pics);
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
        return response()->json(LabCarouselPic::destroy($id));
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
            'pic' => 'required|string|max:255',
            'title' => 'required|string|max:255',
            'news_id' => 'required|numeric'
        ]);

        $attributes = ['pic', 'title', 'news_id'];
        $carouselPic = $id? LabCarouselPic::find($id): new LabCarouselPic();
        IUtils::valueFn($request, $carouselPic, $attributes);
        $carouselPic->save();

        return response()->json($carouselPic->id);
    }
}
