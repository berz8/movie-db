import React, {useState, useEffect} from 'react';
import FilmSingleList from './FilmSingleList';


const Home = () => {

    const [movieList, setMovieList] = useState([]);

    const list = movieList.map( (numero) => <FilmSingleList id={numero.id} cover_url={numero.poster} title={numero.title} key={numero.id}></FilmSingleList>);

    const getAllMovies = async function () {
            try {const response = await fetch('api/movie/all', {
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    }
                });
                //console.log(response);
                const json = await response.json();
                //console.log(json);
                setMovieList(json['data']);
            }
            catch (error){
                    console.log('Errore ' + error);
                }
    }

    useEffect( () => {
        getAllMovies();
    }, []);


    return(
        <div className="home container main">
            <h1>Movies</h1>
            <div className="filmList">
                {list}
            </div>
        </div>
    )
}

export default Home;