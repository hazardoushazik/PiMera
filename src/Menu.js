import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";


const Menu = ({ to, label }) => (
    <li><NavLink to = {to}>{label}</NavLink></li>
);

export default Menu;