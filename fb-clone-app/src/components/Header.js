import React from 'react';
import "./Header.css"
import Leftheader from './Leftheader';
import Rightheader from "./Rightheader";
import Centerheader from "./Centerheader";
import {useStateValue} from "../StateProvider"

function Header() {

    const [{user}, dispatch] = useStateValue();
    
    return (
        <div className="header">
            <Leftheader />

            <Centerheader />

            <Rightheader profileImg={user.photoURL} name={user.displayName} />
        </div>
    )
}

export default Header
