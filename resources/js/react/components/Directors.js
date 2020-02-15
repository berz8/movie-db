import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';

const Directors = (props) => {

    const [actor, setActor] = useState([{
        'name' : ''
    }])

    const [movie, setMovie] = useState([{
        'name' : ''
    }])

    const url = '/api/director/' + props.match.params.id;
    const url2 = '/api/movie/director/' + props.match.params.id;

    useEffect(() => {
        getActor();
        getMovie();
    },[])

    const getActor = async function () {
        try {const response = await fetch(url, {
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

    const getMovie = async function () {
        try {const response = await fetch(url2, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                }
            });
            const json = await response.json();
            setMovie(json['data']);
        }
        catch (error){
                console.log(error);
            }
    }

        const movieDetail = movie.map( n => {
            return(
                <Link to={"/movie/" + n.movie_id} key={n.movie_id}>
                    <img src={n.poster} alt="actor" />
                    <p className="big">{n.title}</p>
                </Link>
            )
        })

    return(
        <div className="main container actor">
            <div className="actor-detail">
                <div className="propic">
                    <img src={actor[0].propic} alt="Attore" />
                </div>
                <div>
                    <h1>{actor[0].name}</h1>
                    <div className="detail-row">
                        <div>
                            <p className="small">Birth Date</p>
                            <p className="big">{actor[0].birthdate}</p>
                        </div>
                        <div>
                            <p className="small">Birth Place</p>
                            <p className="big">{actor[0].birthplace}</p>
                        </div>
                    </div>
                    <div className="detail-row">
                        <div>
                            <p className="small">Biography</p>
                            <p className="big plot">{actor[0].bio}</p>
                        </div>
                    </div>
                    <div className="detail-row">
                        <div>
                            <p className="small">Movies</p>
                            <div className="movies">
                                {movieDetail}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Directors;