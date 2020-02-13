import React, { useEffect, useState } from 'react';

const SingleFilm = (props) => {

    const [movie, setMovie] = useState([{
        'title' : '',
        'poster' : ''
    }]);

    const url = '/api/movie/single/' + props.match.params.id;
    console.log(movie);
    
    useEffect(() => {
        getMovie();
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

        const movieDetail = 
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
                        </div>
                    </div> ;

    return(
        <div className="container main movie">
            {movieDetail}
        </div>
    )
}

export default SingleFilm;