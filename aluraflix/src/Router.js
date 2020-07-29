import React from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'

export default ()=>{
    return(
        <HashRouter>
            <Switch>
                <Route exact path="/" to="home.jsx"/>
            </Switch>
        </HashRouter>
    )
}