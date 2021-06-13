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
                <Story title="Vishal Saini" profileImage="https://scontent-del1-1.xx.fbcdn.net/v/t1.6435-9/46778406_1568267003319614_8909902577445896192_n.jpg?_nc_cat=101&ccb=1-3&_nc_sid=174925&_nc_ohc=hH_2WkmJ7CkAX_Vttxw&_nc_ht=scontent-del1-1.xx&oh=649d810ed5a4338120caac3def0d93a5&oe=60C8AB57" backgroundImg="https://scontent-del1-1.xx.fbcdn.net/v/t1.6435-9/p843x403/51577565_2364993850391219_1616942392512872448_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=730e14&_nc_ohc=_DUfWx_uifoAX8J91YS&_nc_ht=scontent-del1-1.xx&tp=6&oh=465f3d93e3f6598acde3e142771d99db&oe=60C82E5E" />
                <Story title="Suraj Singh Mehta" profileImage="https://scontent-del1-1.xx.fbcdn.net/v/t31.18172-1/p320x320/26170782_1210772129054756_7449440609752178435_o.jpg?_nc_cat=106&ccb=1-3&_nc_sid=7206a8&_nc_ohc=CO95puI29tkAX8TfQfz&tn=MvU51iVHHCyCFKu-&_nc_ht=scontent-del1-1.xx&tp=6&oh=8cee21cd58bca1485c633e6cfb9a9720&oe=60E9BF91" backgroundImg="https://www.memesmonkey.com/images/memesmonkey/a8/a80d70da2efb5b1c997d22fd6b41cede.jpeg" />
                <Story title="Chetanya Thakur" profileImage="https://scontent-del1-1.xx.fbcdn.net/v/t1.6435-9/31124700_920589701444411_3626258110831656960_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=EiOoI3923xgAX9SoP6Y&_nc_ht=scontent-del1-1.xx&oh=451066cd32849a1a431f23f30a9ae671&oe=60C7E6C0" backgroundImg="https://scontent-del1-1.xx.fbcdn.net/v/t1.6435-9/51773381_2284405958292477_7311710002102665216_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=kEl60mfHaN0AX88NBYt&tn=MvU51iVHHCyCFKu-&_nc_ht=scontent-del1-1.xx&oh=b44767fcb70cffa588c6ac47a28f6dab&oe=60C8DE32" />
                <Story title="Manoj Mehta" profileImage="https://scontent-del1-1.xx.fbcdn.net/v/t1.6435-1/p320x320/130749425_1687480088100298_5885009532016266535_n.jpg?_nc_cat=111&ccb=1-3&_nc_sid=7206a8&_nc_ohc=Dsi7u1HA4D4AX8I03xf&_nc_ht=scontent-del1-1.xx&tp=6&oh=78085b38884ac66de7860d2d19466a4c&oe=60C7C3B6" backgroundImg="https://scontent-del1-1.xx.fbcdn.net/v/t1.18169-9/16939635_687145794800404_4432919779026867290_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=a9b1d2&_nc_ohc=Q8BL2_sMSG8AX-0L5JC&_nc_ht=scontent-del1-1.xx&oh=ee2d3c4745496c22547212968a4e0a5f&oe=60C8EF94" />
                <Story title="Priyanka Chopra" profileImage="https://scontent-del1-1.xx.fbcdn.net/v/t1.6435-9/196345308_10165586654485691_1353606330463659381_n.jpg?_nc_cat=1&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=ubDOm0WSW0cAX8QmH3Z&_nc_ht=scontent-del1-1.xx&oh=407be88997b8328e06e4465629f77028&oe=60C8C112" backgroundImg="https://scontent-del1-1.xx.fbcdn.net/v/t1.6435-9/196789716_10165586657105691_366478865592243375_n.jpg?_nc_cat=1&ccb=1-3&_nc_sid=e3f864&_nc_ohc=hRyTcerdzlEAX_Rjlbd&_nc_ht=scontent-del1-1.xx&oh=fa2f5fa2d30480ef6ee96dab19b13b35&oe=60C8B53F" />
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

                <Post  title={user.displayName} porfileImg={user.photoURL} timestamp="timestamp..." img="https://scontent-del1-1.xx.fbcdn.net/v/t1.6435-9/196017504_5589838887753228_3500765452708367770_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=0IVDP6xLiAEAX8ctR9-&_nc_ht=scontent-del1-1.xx&oh=b9847d889bf053d7d40b80583f32ed7b&oe=60C9D4DA" input="Test post" />
                

            </div>
        </div>
    )
}

export default Feed
