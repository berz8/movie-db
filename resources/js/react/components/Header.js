import React from 'react';
import {Link} from "react-router-dom";

const Header = props => {


    return(
        <header className="header">
            <div className="logo">
                <h1>Movie DB</h1>
            </div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/">Attori</Link>
                    </li>
                    <li>
                        <Link to="/">Registi</Link>
                    </li>
                    <li>
                        <form>
                            <input type="text" />
                            <button type="submit">Cerca</button>
                        </form>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;