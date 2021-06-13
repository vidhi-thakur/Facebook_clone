import React from 'react'
import { Avatar } from "@material-ui/core"
import "./Post.css"
import ThumbUpAltRoundedIcon from '@material-ui/icons/ThumbUpAltRounded';
import ChatBubbleOutlineRoundedIcon from '@material-ui/icons/ChatBubbleOutlineRounded';


function Post({porfileImg, img, title, input, timestamp}) {
    return (
        <div className="post">
            <div className="post__head">
                <Avatar className="head--profilePic" src={porfileImg} />
                <div className="post_info">
                    <h4 className="mar">{title}</h4>
                    <p className="mar">{new Date(timestamp?.toDate()).toUTCString()}</p>
                </div>
            </div>
            <div post__input>
                <p className="mar ip">{input}</p>
                <img className="ip_img" src={img} alt="" />
            </div>
            <div className="post__icons">
                <div className="icons--lc">
                    <ThumbUpAltRoundedIcon className="icon--bottom" />
                    <p className="mar icon--bottom">Like</p>
                </div>
                <div className="icons--lc">
                    <ChatBubbleOutlineRoundedIcon className="icon--bottom" />
                    <p className="mar icon--bottom">Comments</p>
                </div>
            </div>
            
        </div>
    )
}

export default Post
