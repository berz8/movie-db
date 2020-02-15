import React from 'react';
import {
    Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

import history from './components/history';

import Header from './components/Header';
import Home from './components/Home';
import SingleFilm from './components/SingleMovie';
import Actors from './components/Actors';
import Directors from './components/Directors';
import NoMatch from './components/NoMatch';
import Search from './components/Search';

const App = () => {
    return(
        <div>
            <Router history={history}>
            <Header />
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/movie/:id" component={SingleFilm} />
                    <Route path="/actors/:id" component={Actors} />
                    <Route path="/directors/:id" component={Directors} />
                    <Route path="/search" component={Search} />
                    <Route component={NoMatch} />
                </Switch>
            </Router>
        </div>
    )
}

export default App;