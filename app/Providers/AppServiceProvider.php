<?php

namespace App\Providers;

use Validator;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        // 手机或固定电话
        Validator::extend('phones', function($attribute, $value, $parameters) {
            $length = strlen($value);
            return ($length == 11 && preg_match("/^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/", $value)) || ($length == 12 && preg_match("/^(([0\+]\d{2,3}-)?(0\d{2,3})-)?(\d{7,8})(-(\d{3,}))?$/", $value));
        });

        // 固定电话
        Validator::extend('phone', function($attribute, $value, $parameters) {
            $length = strlen($value);
            return ($length == 12 && preg_match("/^(([0\+]\d{2,3}-)?(0\d{2,3})-)?(\d{7,8})(-(\d{3,}))?$/", $value));
        });

        // 手机
        Validator::extend('cellphone', function($attribute, $value, $parameters) {
            $length = strlen($value);
            return ($length == 11 && preg_match("/^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/", $value));
        });
    }

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }
}
