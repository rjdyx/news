<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateLabBottomMessagesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        /**
         * 记录底部信息
         */
        Schema::create('lab_bottom_messages', function (Blueprint $table) {
            $table->increments('id');
            $table->string('address', 255)->comment('地址');
            $table->string('postcode', 15)->comment('邮编');
            $table->string('phone', 20)->comment('电话');
            $table->string('fax', 20)->comment('传真');
            $table->string('email', 45)->comment('邮箱');
            $table->string('copyright', 255)->comment('地址');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('lab_bottom_messages');
    }
}
