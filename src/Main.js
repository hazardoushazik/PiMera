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

const items = [
    {label: "Home",         link: "/"},
    {label: "Destinations", link: "/destinations"},
    {label: "Media",        link: "/media"},
    {label: "Camera",       link: "/camera"},
    {label: "Data",         link: "/data"},
    {label: "Settings",     link: "/settings"}
];


function MainMenu (props) {
    const menu = props.items.map((item) =>
        <li><NavLink to = {item.link}>{item.label}</NavLink></li>
    );

    return (
        <ul>{menu}</ul>
    );
}

function Content (props) {
    const content = props.items.map((item) =>
        <Route exact path = {item.link} component = { '${item.label}' }/>
    );

    return (
        <div className = "content">{content}</div>
    );
}

class Main extends Component {
    render () {
        return (
            <HashRouter>
                <div>
                    <span><h1>PiMera</h1></span>
                    <MainMenu items = {items} />
                    <Content  items = {items} />
                    <div className = "content">
                        <Route exact path = "/"       component = { Home }/>
                        <Route path = "/destinations" component = { Destinations }/>
                        <Route path = "/media"        component = { Media }/>
                        <Route path = "/camera"       component = { Camera }/>
                        <Route path = "/data"         component = { Data }/>
                        <Route path = "/settings"     component = { Settings }/>
                    </div>
                </div>
            </HashRouter>
        );
    }
}

export default Main;