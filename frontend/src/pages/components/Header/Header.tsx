import React, {useState, useEffect} from "react";
import WindowButtons from "../WindowButtons.tsx/WindowButtons";
import './header.scss';


export default function Header() {

    return(
        <div className="sidebar-header">
            <div className="sidebar-header-top">
                <WindowButtons/>
            </div>

            <div className="sidebar-header-bottom">
                <input className="search-bar" placeholder="  Search"></input>
            </div>
        </div>
    )
}