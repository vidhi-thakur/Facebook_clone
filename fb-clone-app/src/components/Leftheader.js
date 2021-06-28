import React from 'react'
import "./Leftheader.css"
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';

function Leftheader() {
    return (
        <div className="leftheader">
            <img src="https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png" alt="" />
            <div className="leftheader__search">
                <SearchRoundedIcon />
                <input placeholder="Search Facebook" />
            </div>
            <MenuRoundedIcon className="leftheader__menu" />
        </div>
    )
}

export default Leftheader
