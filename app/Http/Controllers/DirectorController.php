<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Director;

class DirectorController extends Controller
{
    //

    public function all(Request $request){

        $directors = Director::all();
        return response()->json(['data' => $directors], 201);


    }

    public function single($id){

        $directors = new Director;
        $director = $directors->where('id', $id)->get();


        return response()->json(['data' => $director], 201); 
    }

}