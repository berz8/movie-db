<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Actor;

class ActorController extends Controller
{
    //
    public function create(Request $request)
    {
        $movie = new Movie;
        $movie->title = 'Once Upon a Time in Hollywood';
        $movie->year = '2019';
        $movie->rated = 'R';
        $movie->released = '26 Jul 2019';
        $movie->runtime = '161 min';
        $movie->writer = 'Quentin Tarantino';
        $movie->plot = "A faded television actor and his stunt double strive to achieve fame and success in the film industry during the final years of Hollywood's Golden Age in 1969 Los Angeles.";
        $movie->language = 'English, German, Italian, Spanish';
        $movie->country = 'USA, UK, China';
        $movie->awards = 'Nominated for 10 Oscars. Another 108 wins & 298 nominations.';
        $movie->poster = 'https://m.media-amazon.com/images/M/MV5BOTg4ZTNkZmUtMzNlZi00YmFjLTk1MmUtNWQwNTM0YjcyNTNkXkEyXkFqcGdeQXVyNjg2NjQwMDQ@._V1_SX300.jpg';
        $movie->boxoffice = 'N/A';
        $movie->production = 'Columbia Pictures';

        

        $movie->save();

        $director = \App\Director::find(1);
        $movie->directors()->attach($director);

        return 'Success';
    }

    public function all(Request $request){
        
        $actor = new Actor;

        $actors = $actor->all();
        return response()->json(['data' => $actors], 201);


    }

    public function single($id){

        $actors = new Actor;
        $actor = $actors->where('id', $id)->get();


        return response()->json(['data' => $actor], 201); 
    }


    public function actorsOfMovies($id) {

        $actor = new Actor;

        $actors = $actor
        ->leftJoin('actors_directors', 'actors.id', '=', 'actors_directors.actor_id')
        ->where('actors_directors.movie_id', $id)->get();

        return response()->json(['data' => $actors], 201); 

    }

}