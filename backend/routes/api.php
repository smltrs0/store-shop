<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\ProductController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

//Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//    return $request->user();
//});

Route::post('register', [UserController::class, 'register']);
Route::post('login', [UserController::class, 'authenticate']);

Route::group(['middleware' => ['jwt.verify']], function() {

    Route::post('user', [UserController::class, 'getAuthenticatedUser']);
    Route::post('/items', [ProductController::class, 'index']);

    Route::post('orders', [OrderController::class, 'index']);
    Route::post('order', [OrderController::class, 'store']);
    Route::get('order/{id}', [OrderController::class, 'show']);
    Route::post('orderdelete', [OrderController::class, 'destroy']);
});


