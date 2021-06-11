import React from 'react'
import VideocamRoundedIcon from '@material-ui/icons/VideocamRounded';
import PhotoLibraryRoundedIcon from '@material-ui/icons/PhotoLibraryRounded';
import InsertEmoticonRoundedIcon from '@material-ui/icons/InsertEmoticonRounded';
import { Avatar } from "@material-ui/core"
import "./Messagebox.css"

function Messagebox() {
    return (
        <div className="messageBox flexBox">
            <div className="messageBox__top flexBox">
                <Avatar />
                <form className="flexBox messageBox--inputSection">
                    <input className="messageBox--input ip1" placeholder="What's on your mind, Vidhi?" />
                    <input className="messageBox--input" placeholder="Enter image URL (optional)" />
                    <button>Hidden button</button>
                </form>
            </div>

            <div className="messageBox__bottom flexBox">
                <div className="icon3 flexBox">
                    <VideocamRoundedIcon className="m msgBox--videoIcon" />
                    <h4>Live video</h4>
                </div>
                <div className="icon3 flexBox">
                    <PhotoLibraryRoundedIcon className="m msgBox--photoIcon" />
                    <h4>Photo/video</h4>
                </div>
                <div className="icon3 flexBox">
                    <InsertEmoticonRoundedIcon className="m msgBox--smileIcon" />
                    <h4>Feeling/Activity</h4>
                </div>
            </div>
            
        </div>
    )
}

export default Messagebox
