import React, {useState} from 'react'
import { Avatar } from "@material-ui/core"
import "./Post.css"
import {useStateValue} from "../StateProvider"
import ThumbUpAltRoundedIcon from '@material-ui/icons/ThumbUpAltRounded';
import ChatBubbleOutlineRoundedIcon from '@material-ui/icons/ChatBubbleOutlineRounded';
import { actionTypes } from '../reducer'


function Post({porfileImg, img, title, input, timestamp}) {

    const [{user, likes}, dispatch] = useStateValue();

    const [flag, setFlag] = useState(false)
    const [comment, setComment] = useState(false)
    const [count, setCount] = useState(0)

    const countLikes = () => {
        setFlag(!flag)

        if(!flag) {
            setCount(count+1)
        } else {
            setCount(count-1)
        }
    }

    const showComments = () => {
        setFlag(!comment)

        if(!comment) {
            dispatch({
                type: actionTypes.SET_LIKES,
                item: {
                    timestamp: timestamp,
                    id: user.uid
                }
            })
        } else {
            dispatch({
                type: actionTypes.REMOVE_LIKES,
                id: user.uid,
            })
        }
    }

    return (
        <div className="post">
            <div className="post__head">
                <Avatar className="head--profilePic" src={porfileImg} />
                <div className="post_info">
                    <h4 className="mar">{title}</h4>
                    <p className="mar">{Date(timestamp).toString()}</p>
                </div>
            </div>
            <div post__input>
                <p className="mar ip">{input}</p>
                {img && <img className="ip_img" src={img} alt="Img missing" />}
            </div>
            <div className="post__likeCommentCount">
                <p className="post--Count">{`${count}`} Likes</p>
                <p className="post--Count">2 Comments</p>
            </div>
            <div className="post__icons">
                <div onClick={countLikes} className="icons--lc">
                    <ThumbUpAltRoundedIcon className={flag?"icon--bottom active--icon": "icon--bottom"} />
                    <p className={flag?"mar icon--bottom active--icon": "mar icon--bottom"}>Like</p>
                </div>
                <div onClick={showComments} className="icons--lc">
                    <ChatBubbleOutlineRoundedIcon className="icon--bottom" />
                    <p className="mar icon--bottom">Comments</p>
                </div>
            </div>
            
        </div>
    )
}

export default Post