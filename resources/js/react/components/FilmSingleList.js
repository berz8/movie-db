import React from 'react';
import {Link} from "react-router-dom";
import Image from "react-graceful-image";

function FilmSingleList(props) {
  return (
    <Link to={'/movie/' + props.id} key={props.id} className="FilmSingleList">
        <Image src={props.cover_url} />
    </Link>
  );
}

export default FilmSingleList;