import React from 'react';
import "./Header.css"
import Leftheader from './Leftheader';
import Rightheader from "./Rightheader";
import Centerheader from "./Centerheader";

function Header() {
    return (
        <div className="header">
            <Leftheader />

            <Centerheader />

            <Rightheader />
        </div>
    )
}

export default Header
