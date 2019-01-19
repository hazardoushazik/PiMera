import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";

import Home from "./Home";
import Destinations from "./Destinations";
import Media from "./Media";
import Camera from "./Camera";
import Data from "./Data";
import Settings from "./Settings";

class Main extends Component {
    render () {
        return (
            <HashRouter>
                <div>
                    <span><h1>PiMera</h1></span>
                    <ul className = "home">
                        <li><NavLink to = "/">Home</NavLink></li>
                        <li><NavLink to = "/destinations">Destinations</NavLink></li>
                        <li><NavLink to = "/media">Media</NavLink></li>
                        <li><NavLink to = "/camera">Camera</NavLink></li>
                        <li><NavLink to = "/data">Vehicle Data</NavLink></li>
                        <li><NavLink to = "/settings">Settings</NavLink></li>
                    </ul>
                    <div className = "content">
                        <Route exact path = "/" component = { Home }/>
                        <Route path = "/destinations" component = { Destinations }/>
                        <Route path = "/media" component = { Media }/>
                        <Route path = "/camera" component = { Camera }/>
                        <Route path = "/data" component = { Data }/>
                        <Route path = "/settings" component = { Settings }/>
                    </div>
                </div>
            </HashRouter>
        );
    }
}

export default Main;