<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateLabLinksTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('lab_links', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name', 255)->comment('链接名称');
            $table->string('link', 255)->comment('链接');
            $table->integer('priority')->default(1)->comment('优先级，默认1');
            $table->integer('pid')->default(0)->comment('父id，0表示顶层id');
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
        Schema::dropIfExists('lab_links');
    }
}
