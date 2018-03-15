<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        /**
         * 账户表
         */
        Schema::create('users', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name', 20)->unique()->comment('账户名，admin为超级管理员');
            $table->string('email', 50)->unique()->comment('邮箱');
            $table->string('password')->comment('密码');
            $table->integer('role')->default(2)->comment('账户角色，默认为2，1表示超级管理员，2表示普通管理员');
            $table->integer('active')->default(1)->comment('是否冻结，1否，2是，默认1');
            $table->rememberToken();
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
        Schema::dropIfExists('users');
    }
}
