import React from 'react';
import { Home } from './pages/home';
import {Route, BrowserRouter as Router} from "react-router-dom";


function App() {
    return (
        <Router>
            <Route exact path="/:room" render={(props) => <Home room={props.match.params.room} message={"JOIN GAME"} title={"Join Game"}/>}/>
            <Route exact path="/" render={() => <Home room={null} message={"CREATE PRIVATE GAME"} title={"Home"}/>}/>
        </Router>
    )
}

export default App;
