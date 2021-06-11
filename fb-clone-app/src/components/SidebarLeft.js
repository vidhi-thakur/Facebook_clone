import React from 'react'
import "./SidebarLeft.css"
import OndemandVideoRoundedIcon from '@material-ui/icons/OndemandVideoRounded';
import StorefrontRoundedIcon from '@material-ui/icons/StorefrontRounded';
import PeopleRoundedIcon from '@material-ui/icons/PeopleRounded';
import SidebarRow from "./SidebarRow.js"
import EventRoundedIcon from '@material-ui/icons/EventRounded';
import HistoryRoundedIcon from '@material-ui/icons/HistoryRounded';
import BookmarkRoundedIcon from '@material-ui/icons/BookmarkRounded';
import FlagRoundedIcon from '@material-ui/icons/FlagRounded';

function SidebarLeft() {
    return (
        <div className="sidebarLeft">
            <SidebarRow src="https://www.nature.com/immersive/d41586-021-00095-y/assets/3TP4N718ac/2021-01-xx_jan-iom_tree-of-life_sh-1080x1440.jpeg" title="Vidhi" /> 
            <SidebarRow Icon={StorefrontRoundedIcon} title="Market Place" />
            <SidebarRow Icon={PeopleRoundedIcon} title="Groups" />
            <SidebarRow Icon={OndemandVideoRoundedIcon} title="Watch" />
            <SidebarRow Icon={PeopleRoundedIcon} title="Groups" />
            <SidebarRow Icon={EventRoundedIcon} title="Events" /> 
            <SidebarRow Icon={HistoryRoundedIcon} title="Memories" /> 
            <SidebarRow Icon={BookmarkRoundedIcon} title="Saved" /> 
            <SidebarRow Icon={FlagRoundedIcon} title="Pages" /> 
        </div>
    )
}

export default SidebarLeft
