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
        $movie->title = 'The Hateful Height';
        $movie->year = '2015';
        $movie->rated = 'R';
        $movie->released = '30 Dec 2015';
        $movie->runtime = '168 min';
        $movie->writer = 'Quentin Tarantino';
        $movie->plot = "In the dead of a Wyoming winter, a bounty hunter and his prisoner find shelter in a cabin currently inhabited by a collection of nefarious characters.";
        $movie->language = 'English, Spanish, French';
        $movie->country = 'USA';
        $movie->awards = 'Won 1 Oscar. Another 40 wins & 115 nominations.';
        $movie->poster = 'https://m.media-amazon.com/images/M/MV5BMjA1MTc1NTg5NV5BMl5BanBnXkFtZTgwOTM2MDEzNzE@._V1_SX300.jpg';
        $movie->boxoffice = '$54,116,191';
        $movie->production = 'The Weinstein Company';

        

        $movie->save();

        $director = \App\Director::find(1);
        $movie->directors()->attach($director);

        return 'Success';
    }

    public function all(Request $request){
        
        $movie = new Movie;

        $movies = $movie->all();
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
