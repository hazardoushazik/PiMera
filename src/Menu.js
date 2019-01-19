import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";

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

const Menu = ({ to, label }) => (
    <li><NavLink to = {to}>{label}</NavLink></li>
);

export default Menu;