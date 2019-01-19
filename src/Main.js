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

const menuItems = [
    {label: "Home", link: "/"},
    {label: "Destinations", link: "/destinations"},
    {label: "Media", link: "/media"},
    {label: "Camera", link: "/camera"},
    {label: "Data", link: "/data"},
    {label: "Settings", link: "/settings"}
];


function MainMenu (props) {
    const menu = (
        <ul>
            {props.menuItems.map((menuItem) =>
                <li><NavLink to = {menuItem.link}>{menuItem.label}</NavLink></li>
            )}
        </ul>
    )
}

class Main extends Component {
    render () {
        return (
            <HashRouter>
                <div>
                    <span><h1>PiMera</h1></span>
                    <MainMenu menuItems = {menuItems} />
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