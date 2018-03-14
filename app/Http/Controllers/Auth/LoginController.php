<?php

namespace App\Http\Controllers\Auth;

use Entrust;
use App\Http\Controllers\Controller;
use App\CusAuthenticatesUsers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */

    use CusAuthenticatesUsers;

    /**
     * Where to redirect users after login.
     *
     * @var string
     */
    protected $redirectTo = '/';

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest')->except('logout');
    }

    public function login(Request $request)
    {
        $name = $request->input('name');
        $password = $request->input('password');
        if (Auth::attempt(['name' => $name, 'password' => $password])) {
            if (Auth::user()->active == 1) {
                return response()->json([
                    'user' => [
                        'id' => Auth::user()->id,
                        'name' => Auth::user()->name,
                        'email' => Auth::user()->email
                    ],
                    'role' => [
                        'classification' => Entrust::hasRole('classification_manage'),
                        'area' => Entrust::hasRole('area_manage'),
                        'expert' => Entrust::hasRole('expert_namege'),
                        'spot-check-application-form' => Entrust::hasRole('application_manage'),
                        'spot-check-result' => Entrust::hasRole('result')
                    ]
                ]);
            } else {
                Auth::logout();
                return response()->json('用户冻结，无法登陆', 500);
            }
        } else {
            Auth::logout();
            return response()->json('用户名或密码错误', 500);
        }
    }
}
