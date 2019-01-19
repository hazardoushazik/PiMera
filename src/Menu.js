import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";

const Menu = ({ to }) => (
    <li><NavLink to = {to}>{key}</NavLink></li>
);

export default Menu;