<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateLabFloatPicsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('lab_float_pics', function (Blueprint $table) {
            $table->increments('id');
            $table->string('pic', 255)->comment('图片路径');
            $table->integer('flag')->default(0)->comment('0--不显示，1--显示');
            $table->integer('news_id')->unsigned();
            $table->string('title', 255)->comment('新闻标题');

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
        Schema::dropIfExists('lab_float_pics');
    }
}
