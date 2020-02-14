import React from 'react';
import {Link} from 'react-router-dom';

const NoMatch = () => {
    return(
        <div className="main container nomatch">
            <h1>Ops...</h1>
            <h2>It seems like the page you were looking for doesn't exist</h2>
            <Link className="backhome" to="/">Back to Homepage</Link>
        </div>
    )
}

export default NoMatch;