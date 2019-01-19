import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";

import Menu from "./Menu";
import Home from "./Home";
import Destinations from "./Destinations";
import Media from "./Media";
import Camera from "./Camera";
import Data from "./Data";
import Settings from "./Settings";

const menu_data = ({ LABELS, LINKS }) => (
    LABELS = [
        "Home",
        "Destinations",
        "Media",
        "Camera",
        "Data",
        "Settings"
    ],

    LINKS = [
        "/",
        "/destinations",
        "/media",
        "/camera",
        "/data",
        "/settings"
    ]
);

const menu_items = menu_data.map((menu_data) => (
    <li><NavLink to = {menu_data.LINKS}>{menu_data.LABELS}</NavLink></li>
));

class Main extends Component {
    render () {
        return (
            <HashRouter>
                <div>
                    <span><h1>PiMera</h1></span>
                    <ul>
                        {menu_items}
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