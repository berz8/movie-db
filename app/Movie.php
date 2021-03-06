<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Movie extends Model
{
    //
    public function actors()
    {
        return $this->belongsToMany('App\Actor', 'actors_directors');
    }

    public function directors()
    {
        return $this->belongsToMany('App\Director', 'movies_directors');
    }
}
