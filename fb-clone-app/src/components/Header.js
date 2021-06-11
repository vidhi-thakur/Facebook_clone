import React from 'react';
import "./Header.css"
import Leftheader from './Leftheader';
import Rightheader from "./Rightheader";
import Centerheader from "./Centerheader";

function Header() {
    return (
        <div>
            {/* container-left */}
            <Leftheader />

            {/* container-center */}
            <Centerheader />

            {/* container-right */}
            <Rightheader />
        </div>
    )
}

export default Header
