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

import "./css/Main.css";

const items = [
    {
        label: "Home",
        component: Home,
        link: "/#" // technically the home link is broken since it deletes the current contents and doesnt ever display the home page data but like whatever
    },
    {
        label: "Destinations", 
        component: Destinations, 
        link: "/destinations"
    },
    {
        label: "Media",
        component: Media,
        link: "/media"
    },
    {
        label: "Camera",
        component: Camera,
        link: "/camera"
    },
    {
        label: "Data", 
        component: Data, 
        link: "/data"
    },
    {
        label: "Settings",
        component: Settings,
        link: "/settings"
    }
];

function MainMenu (props) {
    const menu = props.items.map((item) =>
        <NavLink  className = "btn btn-primary btn-lg nav-link" 
                       role = "button"
                        key = {item.label} 
                         to = {item.link}>
            {item.label}
        </NavLink>
    );

    return (
        <nav className = "nav btn-group">{menu}</nav>
    );
}

function Content (props) {
    const content = props.items.map((item) =>
        <Route key = {item.label} 
        exact path = {item.link} 
         component = {item.component}/>
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
                </div>
            </HashRouter>
        );
    }
}

export default Main;