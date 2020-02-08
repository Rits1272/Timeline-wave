import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Login from "./screens/Login";
import Register from './screens/Register';
import "./main.css";
import Timeline from './screens/Timeline';
import Friend from './screens/Friend';
import {Switch, BrowserRouter as Router, Route} from 'react-router-dom';
import FriendTimeline from './screens/FriendTimeline';


ReactDOM.render( <Router>
    <Switch>
    <Route path="/login" component={Login} />
    <Route path="/register" component={Register} />
    <Route path='/search_people' component={Friend}/>
    <Route path='/friend' component={FriendTimeline}/>
    <Route path="/" component={Timeline} />
    </Switch>
</Router>,document.getElementById("root"));

