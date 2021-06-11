import React from 'react'
import "./Story.css"
import { Avatar } from "@material-ui/core"

function Story({profileImage, backgroundImg, title}) {
    return (
        <div style={{backgroundImage: `url(${backgroundImg})`}} className="story">
            <Avatar className="story__profilePic" src={profileImage} />
            <h4>{title}</h4>
        </div>
    )
}

export default Story
