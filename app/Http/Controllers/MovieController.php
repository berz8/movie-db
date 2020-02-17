<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Movie;

class MovieController extends Controller
{
    //
    public function create(Request $request)
    {
        $movie = new Movie;
        $movie->title = '1917';
        $movie->year = '2019';
        $movie->rated = 'R';
        $movie->released = '10 Jan 2020';
        $movie->runtime = '119 min';
        $movie->writer = 'Sam Mendes, Krysty Wilson-Cairns';
        $movie->plot = "April 6th, 1917. As a regiment assembles to wage war deep in enemy territory, two soldiers are assigned to race against time and deliver a message that will stop 1,600 men from walking straight into a deadly trap.";
        $movie->language = 'English, French, German';
        $movie->country = 'USA';
        $movie->awards = 'Won 3 Oscars. Another 103 wins & 152 nominations.';
        $movie->poster = 'https://m.media-amazon.com/images/M/MV5BOTdmNTFjNDEtNzg0My00ZjkxLTg1ZDAtZTdkMDc2ZmFiNWQ1XkEyXkFqcGdeQXVyNTAzNzgwNTg@._V1_SX300.jpg';
        $movie->boxoffice = 'N/A';
        $movie->production = 'Universal Pictures';

        

        $movie->save();

        // $director = \App\Director::find(1);
        // $movie->actors()->attach($director);

        return 'Success';
    }

    public function all(Request $request){
        
        $movies = Movie::all();
        return response()->json(['data' => $movies], 201);


    }

    public function single($id){

        $movies = new Movie;
        $movie = $movies
        ->leftJoin('movies_directors', 'movies.id', '=', 'movies_directors.movie_id')
        ->leftJoin('directors', 'movies_directors.director_id', '=', 'directors.id')
        ->where('movies.id', $id)->get();


        return response()->json(['data' => $movie], 201); 
    }

    public function actorsAllMovies($id){

        $actor = new Movie;

        $actors = $actor
        ->leftJoin('actors_directors', 'movies.id', '=', 'actors_directors.movie_id')
        ->where('actors_directors.actor_id', $id)->get();

        return response()->json(['data' => $actors], 201); 

    }

    public function directorsAllMovies($id){

        $director = new Movie;

        $directors = $director
        ->leftJoin('movies_directors', 'movies.id', '=', 'movies_directors.movie_id')
        ->where('movies_directors.director_id', $id)->get();

        return response()->json(['data' => $directors], 201); 

    }

    public function search($query){

        $movie = new Movie;
        $q = str_replace('%20', ' ', $query);
        $movies = $movie->where('title', 'like', '%' . $q . '%')->get();

        return response()->json(['data' => $movies], 201); 
        
    }
}
