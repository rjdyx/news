<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateLabNewsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        /**
         * 存放子栏目下的消息
         */
        Schema::create('lab_news', function (Blueprint $table) {
            $table->increments('id');
            $table->string('title', 255)->comment('题目');
            $table->longText('content')->comment('内容');
            $table->integer('priority')->default(1)->comment('0-普通消息，1-公告');
            $table->integer('pid')->default(0);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('lab_news');
    }
}
