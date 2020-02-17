import React, { useState, useEffect } from 'react';
import {Link, NavLink} from "react-router-dom";
import history from './history';

const Header = props => {

    const [searchQuery, setSearchQuery] = useState([]);

    const handleSearch = (event) => {
        setSearchQuery(event.target.value)
        let q = '?q=' + event.target.value;
        if(event.target.value != ''){
            history.push({ 
                pathname: '/search',
                search: q,
            });
        } else {
            history.push('/');
        }
    }


    return(
        <header className="header">
            <div className="logo">
                <h1>Movie DB</h1>
            </div>
            <nav>
                <ul>
                    <li>
                        <NavLink exact to="/" activeClassName="active">Movies</NavLink>
                        {/* <Link to="/">Movies</Link> */}
                    </li>
                    <li>
                        <NavLink to="/actors" activeClassName="active">Actors</NavLink>
                        {/* <Link to="/actors">Actors</Link> */}
                    </li>
                    <li>
                        <NavLink to="/directors" activeClassName="active">Directors</NavLink>
                        {/* <Link to="/directors">Directors</Link> */}
                    </li>
                    <li>
                        <form>
                            <input value={searchQuery} onChange={handleSearch} type="text" />
                        </form>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;