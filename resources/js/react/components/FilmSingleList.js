import React from 'react';
import {Link} from "react-router-dom";

function FilmSingleList(props) {
  return (
    <Link to={'/movie/' + props.id} key={props.id} className="FilmSingleList">
        <img src={props.cover_url} />
    </Link>
  );
}

export default FilmSingleList;