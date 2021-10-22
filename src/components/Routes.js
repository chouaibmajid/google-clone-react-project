import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
    Link
  } from "react-router-dom";
import Result from './Result';
function Routes() {
    return (
        <div className="p-4">
            <Switch>
                <Route exact path="/">
                    <Redirect to="/search" />
                </Route>
                <Route exact path={['/search','/images' , '/news' , "/videos"]}>
                    <Result />
                </Route>
            </Switch>
        </div>
    )
}

export default Routes
