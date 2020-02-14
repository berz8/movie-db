<?php

use Illuminate\Http\Request;

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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/movie/create', 'MovieController@create')->name('movie.create');
Route::get('/movie/all', 'MovieController@all')->name('movie.all');
Route::get('/movie/single/{id}', 'MovieController@single')->name('movie.single');
Route::get('/movie/singleactors/{id}', 'ActorController@actorsOfMovies')->name('actor.actorsOfMovies');
