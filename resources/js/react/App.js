import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

import Header from './components/Header';
import Home from './components/Home';
import SingleFilm from './components/SingleMovie';
import Actors from './components/Actors';
import Directors from './components/Directors';
import NoMatch from './components/NoMatch';

const App = () => {
    return(
        <div>
            <Router>
            <Header />
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/movie/:id" component={SingleFilm} />
                    <Route path="/actors" component={Actors} />
                    <Route path="/directors" component={Directors} />
                    <Route component={NoMatch} />
                </Switch>
            </Router>
        </div>
    )
}

export default App;