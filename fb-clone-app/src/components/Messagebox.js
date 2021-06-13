import React, {useState} from 'react'
import VideocamRoundedIcon from '@material-ui/icons/VideocamRounded';
import PhotoLibraryRoundedIcon from '@material-ui/icons/PhotoLibraryRounded';
import InsertEmoticonRoundedIcon from '@material-ui/icons/InsertEmoticonRounded';
import { Avatar } from "@material-ui/core"
import "./Messagebox.css"
import db from '../firebase';
import firebase from 'firebase';

function Messagebox({profileImg, name}) {

    const [input, setInput] = useState("");
    const [image, setImage] = useState("");

    const onClickHandler = (e) => {
        e.preventDefault();

        db.collection("posts").add({
            userName: name,
            profilePicture: profileImg,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            userInput: input,
            inputImage: image,
        })

        setInput("")
        setImage("")
    }
    return (
        <div className="messageBox flexBox">
            <div className="messageBox__top flexBox">
                <Avatar src={profileImg} />
                <form className="flexBox messageBox--inputSection">
                    <input value={input} onChange={(e)=>setInput(e.target.value)} className="messageBox--input ip1" placeholder={`What's on your mind, ${name}?`} />
                    <input value={image} onChange={(e)=>setImage(e.target.value)} className="messageBox--input" placeholder="Enter image URL (optional)" />
                    <button type="submit" onClick={onClickHandler}>Hidden button</button>
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
