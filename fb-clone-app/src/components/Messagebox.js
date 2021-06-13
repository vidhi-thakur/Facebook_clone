import React, {useState} from 'react'
import VideocamRoundedIcon from '@material-ui/icons/VideocamRounded';
import PhotoLibraryRoundedIcon from '@material-ui/icons/PhotoLibraryRounded';
import InsertEmoticonRoundedIcon from '@material-ui/icons/InsertEmoticonRounded';
import { Avatar } from "@material-ui/core"
import "./Messagebox.css"

function Messagebox({profileImg, name}) {

    const [imput, setInput] = useState("");
    const [image, setImage] = useState("");

    const onClickHandler = (e) => {
        e.preventDefault();

        setInput("")
        setImage("")
    }
    return (
        <div className="messageBox flexBox">
            <div className="messageBox__top flexBox">
                <Avatar src={profileImg} />
                <form className="flexBox messageBox--inputSection">
                    <input className="messageBox--input ip1" placeholder={`What's on your mind, ${name}?`} />
                    <input className="messageBox--input" placeholder="Enter image URL (optional)" />
                    <button type="submit" onClick={e=>onClickHandler}>Hidden button</button>
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
