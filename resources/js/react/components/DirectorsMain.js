import React, { useState, useEffect } from 'react';
import ActorSingleList from './ActorSingleList';

const DirectorsMain = () => {

    const [actorList, setActorList] = useState([]);

    const list = actorList.map( (numero) => <ActorSingleList type="directors" id={numero.id} propic={numero.propic} name={numero.name} key={numero.id}></ActorSingleList>);

    const getAllActors = async function () {
            try {const response = await fetch('api/directors/all', {
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    }
                });
                //console.log(response);
                const json = await response.json();
                //console.log(json);
                setActorList(json['data']);
            }
            catch (error){
                    console.log('Errore ' + error);
                }
    }

    useEffect( () => {
        getAllActors();
    }, []);


    return(
        <div className="container main actorsMain">
            <h1>Directors</h1>
            <div className="actorList">
                {list}
            </div>
        </div>
    )
}

export default DirectorsMain;