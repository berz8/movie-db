import React from 'react';
import { Link } from 'react-router-dom';

const ActorSingleList = props => {
    return(
        <Link to={'/'+ props.type + '/' + props.id} className="singleActorList">
            <img src={props.propic} alt={props.name} />
            <p>{props.name}</p>
        </Link>
    )
}

export default ActorSingleList