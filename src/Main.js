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

const menu_items = ({ LABELS, LINKS }) => (
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

class Main extends Component {
    render () {
        return (
            <HashRouter>
                <div>
                    <span><h1>PiMera</h1></span>
                    <ul>
                        {menu_items.LABELS.map(menu_items => (
                            <Menu to = {menu_items.LINKS}
                               label = {menu_items.LABELS} 
                                 key = {menu_items.LABELS} />
                        ))}
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