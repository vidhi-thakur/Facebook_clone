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
                <Story title="Vishal" profileImage="https://i2.cinestaan.com/image-bank/1500-1500/96001-97000/96887.jpg" backgroundImg="https://1847884116.rsc.cdn77.org/tamil/gallery/actor/vishal/vishal271018_47.jpg" />
                <Story title="Suraj Singh" profileImage="https://englishtribuneimages.blob.core.windows.net/gallary-content/2020/10/Desk/2020_10$largeimg_2097107296.jpeg" backgroundImg="https://www.memesmonkey.com/images/memesmonkey/a8/a80d70da2efb5b1c997d22fd6b41cede.jpeg" />
                <Story title="Diljit Dosanjh" profileImage="https://yt3.ggpht.com/ytc/AKedOLR8S4bXdceoN7qOvAatPXJrj2weWjT1dKEKV20mDQ=s900-c-k-c0x00ffffff-no-rj" backgroundImg="https://im.rediff.com/movies/2019/mar/28diljit-dosanjh5.jpg?w=670&h=900" />
                <Story title="Jubin Nautiyal" profileImage="https://1.bp.blogspot.com/-bpeRmP1gLE0/YJ1inbhHmhI/AAAAAAAAA4Q/POwM6Rl4GAw2ri-qkgSd0zYJCl06xDyrgCNcBGAsYHQ/s564/jubin%2B1.jpg" backgroundImg="https://hindi.cdn.zeenews.com/hindi/sites/default/files/styles/zm_700x400/public/2021/06/13/846279-jubin-nautiyal-birthday.jpg?itok=hSUoEd8e" />
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
