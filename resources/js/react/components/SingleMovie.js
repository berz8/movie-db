import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';

const SingleFilm = (props) => {

    const [movie, setMovie] = useState([{
        'title' : '',
        'poster' : ''
    }]);

    const [actor, setActor] = useState([{
        'name' : ''
    }])


    const url = '/api/movie/single/' + props.match.params.id;
    const url2 = '/api/movie/singleactors/' + props.match.params.id;
    
    useEffect(() => {
        getMovie();
        getActor();
    },[]);


    const getMovie = async function () {
        try {const response = await fetch(url, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                }
            });
            const json = await response.json();
            console.log(json);
            setMovie(json['data']);
        }
        catch (error){
                console.log(error);
            }
}
    const getActor = async function () {
        try {const response = await fetch(url2, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                }
            });
            const json = await response.json();
            setActor(json['data']);
        }
        catch (error){
                console.log(error);
            }
}

        const movieDetail = actor.map( n => {
            return(
                <Link to={"/actors/" + n.id} key={n.id}>
                    <img src={n.propic} alt="actor" />
                    <p className="big plot">{n.name}</p>
                </Link>
            )
        })

    return(
        <div className="container main movie">
            <div className="movie-detail">
                        <div className="poster">
                            <img src={movie[0].poster} alt="poster" />
                        </div>
                        <div>
                            <p className="small">Title</p>
                            <h1>{movie[0].title}</h1>
                            <div className="detail-row">
                                <div>
                                    <p className="small">Year</p>
                                    <p className="big">{movie[0].year}</p>
                                </div>
                                <div>
                                    <p className="small">Rated</p>
                                    <p className="big">{movie[0].rated}</p>
                                </div>
                                <div>
                                    <p className="small">Released</p>
                                    <p className="big">{movie[0].released}</p>
                                </div>
                                <div>
                                    <p className="small">Production</p>
                                    <p className="big">{movie[0].production}</p>
                                </div>
                                <div>
                                    <p className="small">Writer</p>
                                    <p className="big">{movie[0].writer}</p>
                                </div>
                            </div>
                            <div className="detail-row">
                                <div>
                                    <p className="small">Plot</p>
                                    <p className="big plot">{movie[0].plot}</p>
                                </div>
                            </div>
                            <div className="detail-row">
                                <div>
                                    <p className="small">Language</p>
                                    <p className="big plot">{movie[0].language}</p>
                                </div>
                                <div>
                                    <p className="small">Country</p>
                                    <p className="big plot">{movie[0].country}</p>
                                </div>
                                <div>
                                    <p className="small">Awards</p>
                                    <p className="big plot">{movie[0].awards}</p>
                                </div>
                            </div>
                            <div className="detail-row director">
                                    <div>
                                        <Link to={"/directors/" + movie[0].director_id}>
                                            <p className="small">Director</p>
                                            <img src={movie[0].propic} alt="Director" />
                                            <p className="big plot">{movie[0].name}</p>
                                        </Link>
                                    </div>
                                    <div>
                                        <p className="small">Actors</p>
                                        <div className="actors">
                                            {movieDetail}
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div> ;
        </div>
    )
}

export default SingleFilm;