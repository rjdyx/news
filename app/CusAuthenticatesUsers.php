<?php
/**
 * Created by PhpStorm.
 * User: 苏锐佳
 * Date: 2017/3/16
 * Time: 12:15
 */

namespace App;

use Auth;
use Illuminate\Http\Request;
use Illuminate\Foundation\Auth\AuthenticatesUsers;

trait CusAuthenticatesUsers
{
    use AuthenticatesUsers;

    /**
     * The user has been authenticated.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  mixed  $user
     * @return mixed
     */
    protected function authenticated(Request $request, $user)
    {
        return response()->json($user);
    }

    /**
     * Log the user out of the application.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function logout(Request $request)
    {
        Auth::logout();

        return response()->json(true);
    }
}