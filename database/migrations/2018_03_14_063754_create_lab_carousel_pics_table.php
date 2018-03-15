<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateLabCarouselPicsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        /**
         * 存放滚动的图片，图片需要与新闻关联，并且图片应该是新闻里面有的图片
         */
        Schema::create('lab_carousel_pics', function (Blueprint $table) {
            $table->increments('id');
            $table->string('pic', 255)->comment('图片路径');
            $table->string('title', 255)->comment('新闻标题');
            $table->integer('news_id')->unsigned();
            $table->timestamps();
            
            $table->foreign('news_id')->references('id')->on('lab_news')
                ->onUpdate('cascade')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('lab_carousel_pics');
    }
}
