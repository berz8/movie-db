import React from 'react';
import {Link} from "react-router-dom";

function FilmSingleList(props) {
  return (
    <Link to={'/movie/' + props.id} className="FilmSingleList">
        <img src={props.cover_url} />
        <div>
            <h2>{props.title}</h2>
        </div>
    </Link>
  );
}

export default FilmSingleList;