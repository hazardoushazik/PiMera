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


class Main extends Component {
    render () {
        return (
            <HashRouter>
                <div>
                    <span><h1>PiMera</h1></span>
                    <ul className = "menu">
                        {menu_items.map(menu_items => {
                            const links = menu_items.LINKS;
                            const labels = menu_items.LABELS;
                            return <Menu to = {links} label = {lables} key = {labels} />
                        })}
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