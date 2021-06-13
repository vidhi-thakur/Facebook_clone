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
import { useStateValue } from '../StateProvider';

function SidebarLeft() {
    const [{user}, dispatch] = useStateValue();
    return (
        <div className="sidebarLeft">
            <SidebarRow src={user.photoURL} title={user.displayName} /> 
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
