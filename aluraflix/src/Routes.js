import Switch, { HashRouter, Route } from 'react-router-dom'

export default ()=>{
    return(
        <HashRouter>
            <Switch>
                <Route exact path="/" to="home.jsx"/>
            </Switch>
        </HashRouter>
    )
}