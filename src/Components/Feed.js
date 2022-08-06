import React, { useEffect, useState } from 'react'
import CreateIcon from '@mui/icons-material/Create';
import '../Css/Feed.css'
import FeedInputOption from './FeedInputOption';
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import Post from './Post';
import { db } from './FireBase_Auth';
import FlipMove from 'react-flip-move';
import firebase from 'firebase/compat/app';

const Feed = () => {

    const [Input, setInput] = useState('');
    const [Posts, setPosts] = useState([]);

    var user = JSON.parse(localStorage.getItem('UserData'))

    const DataToArray = (docs) => {
        var arr = [];

        for (let i = 0; i < docs.length; i++) {
            const element = docs[i];
            arr.push({
                id: element.id,
                data: element.data()
            })
        }

        return arr
    }

    useEffect(() => {
        db.collection('posts').orderBy('timeStamp', 'desc').onSnapshot((snapshot) => {
            setPosts(DataToArray(snapshot.docs))
        }, (error) => {
            console.log(error)
        });
    }, [])

    async function addPostInDb() {
        if (Input != "") {
            console.log(Input)
            await db.collection('posts').add({
                name: user.UserInfo.FullName,
                discription: user.UserInfo.Email,
                message: Input,
                photoUrl: "",
                Avtar: user.UserInfo.ProfileUrl,
                timeStamp: firebase.firestore.FieldValue.serverTimestamp()
            });
        }
        setInput('')
    }

    const addPost = (e) => {
        e.preventDefault();
        addPostInDb()
    }

    return (
        <div className='feed'>
            <div className='feed__inputContainer'>
                <div className='feed__input'>
                    <CreateIcon />
                    <form>
                        <input value={Input} onChange={(e) => setInput(e.target.value)} placeholder="Create Post" type="text" />
                        <button onClick={addPost}>Submit</button>
                    </form>
                </div>
                <div className='feed__inputOption'>
                    <FeedInputOption Icon={ImageIcon} title="Photo" color="#70B5f9" />
                    <FeedInputOption Icon={SubscriptionsIcon} title="Video" color="#E7A33E" />
                    <FeedInputOption Icon={EventNoteIcon} title="Photo" color="#C0CBCD" />
                    <FeedInputOption Icon={CalendarViewDayIcon} title="Write Article" color="#7FC15E" />
                </div>
            </div>
            <FlipMove>
                {Posts.map(({ id, data }) => {
                    return (
                        <Post key={id} Name={data.name} Discription={data.discription} Message={data.message} Avtar={data.Avtar} PostTime={data.timeStamp} Photo={data.photoUrl} />
                    )
                })}
            </FlipMove>
        </div>
    )
}

export default Feed