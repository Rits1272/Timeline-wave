import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Login from "./screens/Login";
import Register from './screens/Register';
import "./main.css";
import {Switch, BrowserRouter as Router, Route} from 'react-router-dom';


ReactDOM.render( <Router>
    <Route path="/login" component={Login} />
    <Route path="/register" component={Register} />
    <Route path="/" component={App} />
</Router>,document.getElementById("root"));

