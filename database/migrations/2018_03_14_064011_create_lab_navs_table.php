<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateLabNavsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('lab_navs', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name', 20)->comment('导航栏项目的名字');
            $table->integer('pid')->default(0)->comment('父栏目，0表示这个栏目是主栏目');
            $table->integer('model')->default(0)->comment('0--用列表显示，1--直接显示文章内容');
            $table->integer('sequence')->default(0)->comment('栏目的顺序');
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
        Schema::dropIfExists('lab_navs');
    }
}
