<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

//User Api
Route::post('user/register','Api\UserController@register');
Route::post('user/login','Api\UserController@login');
Route::get('users','Api\UserController@getAllUser');
Route::post('user/delete/{id}','Api\UserController@deleteUser');
Route::put('user/edit/{id}','Api\UserController@editUser');

Route::get('user','Api\UserController@getUser')->middleware('auth:api');
Route::post('user/logout','Api\UserController@logout')->middleware('auth:api');

Route::get('user/email/verify/{id}','Api\UserController@verifyEmail')->name('verification.verify');

//Menu Api
Route::get('menu','Api\MenuController@getAll');
Route::post('menu/insert','Api\MenuController@insert');
Route::put('menu/update/{id}','Api\MenuController@update');
Route::post('menu/delete/{id}','Api\MenuController@delete');

//Cart Api
Route::post('cart/insert','Api\CartController@insert');
Route::get('carts/{id}','Api\CartController@getCartsByUsername');
Route::post('carts/{id}/incrementCount','Api\CartController@incrementItemCount');
Route::post('carts/{id}/decrementCount','Api\CartController@decrementItemCount');
Route::post('carts/{id}/delete','Api\CartController@deleteItem');

//Transaction Api
Route::get('transaction/','Api\TransactionController@getAllTransaction');
Route::post('transaction/{username}','Api\TransactionController@payTransaction');

//Reservation Api
Route::post('reservation/insert','Api\ReservationController@insert');
Route::get('reservations','Api\ReservationController@getAll');
Route::post('reservation/confirmed/{id}','Api\ReservationController@acceptReservation');
Route::post('reservation/declined/{id}','Api\ReservationController@declineReservation');



