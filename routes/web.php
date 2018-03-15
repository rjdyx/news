<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('index');
});
Route::get('/test', function () {
    return view('test');
});

Route::get('/axios', function () {
    return view('axios');
});


Route::get('/app', function () {
    return view('app');
});

Route::get('/index', 'HomeController@indexMsg');

Route::get('system/query', 'Admin\SystemController@query');

Route::get('ws/checkConnect', 'Admin\SocketController@checkConnect');

Route::group(['prefix' => 'admin', 'namespace' => 'Admin'/*, 'middleware' => ['auth', 'active']*/], function () {
    
    // 导航栏管理
    Route::post('nav/triggle/{id}', 'NavController@triggle');
    Route::post('nav/changeSequence', 'NavController@changeSequence');
    Route::put('nav/storeSubNav/{id}', 'NavController@storeSubNav');
    Route::resource('nav', 'NavController');

    // 链接管理
    Route::get('link/indexMain', 'LinkController@indexMain');
    Route::resource('link', 'LinkController');

    // 底部版权信息
    Route::resource('bottom-message', 'BottomMessageController');

    // 区域
    Route::group(['middleware' => ['role:area_manage|admin']], function() {
        Route::get('area/query', 'AreaController@query');
        Route::get('area/queryWithPid', 'AreaController@queryWithPid');
        Route::get('area/queryAllWithPid', 'AreaController@queryAllWithPid');
        Route::get('area/queryAllParent', 'AreaController@queryAllParent');
        Route::get('area/queryAllParentWithChildren', 'AreaController@queryAllParentWithChildren');
        Route::get('area/showSubArea/{id}', 'AreaController@showSubArea');
        Route::post('area/checkArea', 'AreaController@checkArea');
        Route::delete('area/batchDestroy', 'AreaController@batchDestroy');
        Route::resource('area', 'AreaController');
    });

    // 专家
    Route::group(['middleware' => ['role:expert_namege|admin']], function() {
        Route::get('expert/getTotal', 'ExpertController@getTotal');
        Route::get('expert/query', 'ExpertController@query');
        Route::get('expert/getAllFiles/{id}', 'ExpertController@getAllFiles');
        Route::get('expert/getAllForms/{id}', 'ExpertController@getAllForms');
        Route::post('expert/upload/{id}', 'ExpertController@upload');
        Route::get('expert/download', 'ExpertController@download');
        Route::post('expert/triggleActive/{id}', 'ExpertController@triggleActive');
        Route::delete('expert/deleteFile', 'ExpertController@deleteFile');
        Route::delete('expert/batchDestroy', 'ExpertController@batchDestroy');
        Route::resource('expert', 'ExpertController');
        // 文件导出
        Route::get('word/exportExpertWord', 'WordController@exportExpertWord');
    });

    // 抽查申请
    Route::group(['middleware' => ['role:application_manage|result|admin']], function() {
        Route::get('spotcheck/query', 'SpotCheckController@query');
        Route::get('spotcheck/getAllMsg/{id}', 'SpotCheckController@getAllMsg');
        Route::get('spotcheck/getConfirmExperts/{id}', 'SpotCheckController@getConfirmExperts');
        Route::post('spotcheck/spotcheck', 'SpotCheckController@spotcheck');
        Route::post('spotcheck/confirmExpert', 'SpotCheckController@confirmExpert');
        Route::post('spotcheck/quit', 'SpotCheckController@quit');
        Route::post('spotcheck/temporarilySave', 'SpotCheckController@temporarilySave');
        Route::post('spotcheck/submit', 'SpotCheckController@submit');
        Route::post('spotcheck/checkSpotForm', 'SpotCheckController@checkSpotForm');
        Route::post('spotcheck/closeMeeting', 'SpotCheckController@closeMeeting');
        Route::delete('spotcheck/batchDestroy', 'SpotCheckController@batchDestroy');
        Route::post('spotcheck/changeExamineStatus', 'SpotCheckController@changeExamineStatus');
        Route::resource('spotcheck', 'SpotCheckController');
        // 文件导出
        Route::get('word/exportFormWord', 'WordController@exportFormWord');
    });

    // 验证旧密码是否正确
    Route::post('user/validateOldPass', 'UserController@validateOldPass');
    // 重置密码
    Route::post('user/resetPassword', 'UserController@resetPassword');

    Route::group(['middleware' => 'admin'], function () {
        // 获取所有用户，包括按搜索条件获取，按状态获取
        Route::get('user/query', 'UserController@query');
        // 冻结或解冻用户
        Route::post('user/triggleUser/{id}', 'UserController@triggleUser');
        // 批量冻结
        Route::get('user/batchLock', 'UserController@batchLock');
        // 批量解冻
        Route::get('user/batchUnlock', 'UserController@batchUnlock');
        // 改变用户角色
        Route::post('user/changeRole', 'UserController@changeRole');
        // 将密码重置为初始值123456
        Route::post('user/reset', 'UserController@reset');
        // 名字查重
        Route::post('user/checkName', 'UserController@checkName');
        Route::delete('user/batchDestroy', 'UserController@batchDestroy');
        Route::resource('user', 'UserController');

        Route::post('system/upload', 'SystemController@upload');
        Route::post('system/s ave', 'SystemController@save');
    });
});

Auth::routes();
