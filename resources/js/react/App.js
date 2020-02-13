import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

import Header from './components/Header';

const App = () => {
    return(
        <div>
            <Router>
            <Header />
                <Switch>
                <Route exact path="/">
                    <h1>Home</h1>
                </Route>
                <Route path="/about">
                </Route>
                <Route path="/dashboard">
                </Route>
                </Switch>
            </Router>
        </div>
    )
}

export default App;