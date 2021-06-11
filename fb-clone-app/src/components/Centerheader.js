import React from 'react';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import OndemandVideoRoundedIcon from '@material-ui/icons/OndemandVideoRounded';
import StorefrontRoundedIcon from '@material-ui/icons/StorefrontRounded';
import PeopleRoundedIcon from '@material-ui/icons/PeopleRounded';
import "./Centerheader.css"

function Centerheader() {
    return (
        <div className="centerheader">
            <HomeRoundedIcon className="centerheader__icon active" />
            <OndemandVideoRoundedIcon className="centerheader__icon border" />
            <StorefrontRoundedIcon className="centerheader__icon border" />
            <PeopleRoundedIcon className="centerheader__icon border" />
        </div>
    )
}

export default Centerheader
