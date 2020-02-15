import React, { useState, useEffect} from 'react';
import FilmSingleList from './FilmSingleList';


const Search = (props) => {

    const [query, setQuery] = useState((props.location.search.substr(3)));
    const [movieList, setMovieList] = useState([{
        'name' : ''
    }])

    const list = movieList.map( (numero) => <FilmSingleList id={numero.id} cover_url={numero.poster} title={numero.title} key={numero.id} />);

    useEffect(() => {
        setQuery((props.location.search.substr(3)));
        const url = '/api/search/movies/' + (props.location.search.substr(3));
        search(url);
    },[props.location.search])

    const search = async function (_url) {
            try {const response = await fetch(_url , {
                    headers: {
                        'Accept': 'application/json',
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

    return(
        <div className="container main search home">
            <p className="small">Search</p>
            <p className="big">{query}</p>
            <div className="filmList">
                {list}
            </div>
        </div>
    )
}

export default Search;
