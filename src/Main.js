import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";

import Home from "./Home";
import Stuff from "./Stuff";
import Contact from "./Contact";

class Main extends Component {
    render () {
        return (
            <div>
                <span><h1>Simple SPA</h1></span>
                <ul className = "home">
                    <li><a href = "/">Home</a></li>
                    <li><a href = "/destinations">Destinations</a></li>
                    <li><a href = "/media">Media</a></li>
                    <li><a href = "/camera">Camera</a></li>
                    <li><a href = "/data">OBD II Data</a></li>
                    <li><a href = "/settings">Settings</a></li>
                </ul>
                <div className = "content"></div>
            </div>
        );
    }
}

export default Main;