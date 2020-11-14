import React from 'react';
import { Home } from './pages/home';
import { JoinGame } from './pages/joinGame';
import {Route, BrowserRouter as Router} from "react-router-dom";


function App() {
    return (
        <Router>
            <Route exact path="/:room" render={(props) => <JoinGame room={props.match.params.room}/>}/>
            <Route exact path="/" component={Home}/>
        </Router>
    )
}

export default App;
