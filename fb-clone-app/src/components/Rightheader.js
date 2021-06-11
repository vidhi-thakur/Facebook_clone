import React from 'react'
import "./Rightheader.css"
import { Avatar } from '@material-ui/core';
import AddRoundedIcon from '@material-ui/icons/AddRounded';
import ForumRoundedIcon from '@material-ui/icons/ForumRounded';
import NotificationsRoundedIcon from '@material-ui/icons/NotificationsRounded';
import ExpandMoreRoundedIcon from '@material-ui/icons/ExpandMoreRounded';

function Rightheader() {
    return (
        <div className="rightheader">
            <div className="rightheader__userInfo borderRound">
                <Avatar />
                <h4>Name</h4>
            </div>
            <AddRoundedIcon className="rightheader__icon borderRound" />
            <ForumRoundedIcon className="rightheader__icon borderRound" />
            <NotificationsRoundedIcon className="rightheader__+icon borderRound" />
            <ExpandMoreRoundedIcon className="rightheader__icon borderRound" />
        </div>
    )
}

export default Rightheader
