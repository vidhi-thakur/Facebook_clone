import React, {useState, useEffect} from 'react'
import "./Feed.css"
import Story from './Story'
import Messagebox from "./Messagebox"
import Post from "./Post"
import {useStateValue} from "../StateProvider"
import db from "../firebase"

function Feed() {

    const [{user}, dispatch] = useStateValue();
    const [post, setPost] = useState([])

    useEffect(() => {
        db.collection('posts').orderBy("timestamp", "desc").onSnapshot((snapshot) => setPost(snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data()
        }))))
    }, []);

    return (
        <div className="feed">
            <div className="feed__story">
                <Story title="Vishal Saini" profileImage="https://scontent-del1-1.xx.fbcdn.net/v/t1.6435-9/46778406_1568267003319614_8909902577445896192_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=174925&_nc_ohc=ZEsEGGF9SKQAX8Y4fnj&_nc_ht=scontent-del1-1.xx&oh=183d33dee4530451325b86bcb1e9b2b7&oe=60DC71D7" backgroundImg="https://scontent-del1-1.xx.fbcdn.net/v/t1.18169-0/s600x600/16298585_1060739357405717_4934758392655747026_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=174925&_nc_ohc=US3pks2LjPgAX99MScC&tn=MvU51iVHHCyCFKu-&_nc_ht=scontent-del1-1.xx&tp=7&oh=edb6c9c88b82728443cb858c6378733b&oe=60DC0BAA" />
                <Story title="Suraj Singh Mehta" profileImage="https://scontent-del1-1.xx.fbcdn.net/v/t31.18172-1/p320x320/26170782_1210772129054756_7449440609752178435_o.jpg?_nc_cat=106&ccb=1-3&_nc_sid=7206a8&_nc_ohc=CO95puI29tkAX8TfQfz&tn=MvU51iVHHCyCFKu-&_nc_ht=scontent-del1-1.xx&tp=6&oh=8cee21cd58bca1485c633e6cfb9a9720&oe=60E9BF91" backgroundImg="https://www.memesmonkey.com/images/memesmonkey/a8/a80d70da2efb5b1c997d22fd6b41cede.jpeg" />
                <Story title="Chetanya Thakur" profileImage="https://scontent-del1-1.xx.fbcdn.net/v/t1.6435-1/s320x320/31124700_920589701444411_3626258110831656960_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=7206a8&_nc_ohc=ccrZ0qx6d-4AX9dQO6e&_nc_ht=scontent-del1-1.xx&tp=7&oh=6e2f0b06664236f286624546f22e18bf&oe=60DD0BD3" backgroundImg="https://scontent-del1-1.xx.fbcdn.net/v/t1.6435-9/121649429_1283721175296723_2753730069260019946_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=e3f864&_nc_ohc=om9t8NmXH4EAX9BLoSV&_nc_ht=scontent-del1-1.xx&oh=124b7c396fea91685ccaf365133f4377&oe=60DC0C3B" />
                <Story title="Manoj Mehta" profileImage="https://scontent-del1-1.xx.fbcdn.net/v/t1.6435-9/130749425_1687480088100298_5885009532016266535_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=lGYSQISBB-8AX8Wn3z8&_nc_ht=scontent-del1-1.xx&oh=93d454dc1c9f82b31632391d5350bb4c&oe=60DC172F" backgroundImg="https://scontent-del1-1.xx.fbcdn.net/v/t1.6435-9/135172764_1704872483027725_6164510350351264799_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=e3f864&_nc_ohc=TFzLAAYeZ_UAX-pIneD&_nc_ht=scontent-del1-1.xx&oh=ccd8ddeca3c911e6ce37f31350f6510e&oe=60DCC317" />
                <Story title="Priyanka Chopra" profileImage="https://c.ndtvimg.com/2021-06/mvr89k7o_priyanka-chopra_625x300_18_June_21.jpg?im=FaceCrop,algorithm=dnn,width=345,height=250?downsize=145:145" backgroundImg="https://www.usmagazine.com/wp-content/uploads/2021/02/Priyanka-Chopra-Gets-Real-About-Depression-Bullying-Nick-Jonas-Her-Memoir-Unfinished-Landing.jpg?w=900&quality=86&strip=all" />
            </div>
            

            {/* create-message box */}
            <Messagebox profileImg={user.photoURL} name={user.displayName} />

            {/* post */}
            <div className="feed__post">
                {
                    post.map((post) => (
                        <Post porfileImg={post.data.profilePicture} img={post.data.inputImage} title={post.data.userName} input={post.data.userInput} timestamp={post.data.timestamp} />
                    ))
                }

                <Post  title={user.displayName} porfileImg={user.photoURL} timestamp="timestamp..." img="https://about.fb.com/wp-content/uploads/2018/11/fb-hero-image-001.jpeg?fit=1920%2C1080" input="Welcome to the facebook clone!" />
                

            </div>
        </div>
    )
}

export default Feed
