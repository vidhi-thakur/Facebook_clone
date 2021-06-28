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

    const countLikes = () => {
        if(!flag) {
            dispatch({
                type: actionTypes.SET_LIKES,
                item: {
                    id: user.uid
                }
            })
        } else {
            dispatch({
                type: actionTypes.REMOVE_LIKES,
                item: {
                    id: user.uid
                }
            })
        }

        setFlag(!flag)
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
                <p className="post--Count">{`${likes.length}`} Likes</p>
                <p className="post--Count">2 Comments</p>
            </div>
            <div className="post__icons">
                <div className="icons--lc">
                    <ThumbUpAltRoundedIcon onClick={countLikes} className={flag?"icon--bottom active--icon": "icon--bottom"} />
                    <p className={flag?"mar icon--bottom active--icon": "mar icon--bottom"}>Like</p>
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