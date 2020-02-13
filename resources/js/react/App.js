import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

import Header from './components/Header';
import Home from './components/Home';
import SingleMovie from './components/SingleMovie';
import SingleFilm from './components/SingleMovie';

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
                    <Route path="/dashboard" />
                </Switch>
            </Router>
        </div>
    )
}

export default App;