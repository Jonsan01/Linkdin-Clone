import React, { forwardRef } from 'react'
import "../Css/Post.css"
import Avatar from '@mui/material/Avatar/Avatar'
import FeedInputOption from './FeedInputOption';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { db } from './FireBase_Auth';

const Post = forwardRef(({ Name, Discription, Message, PhotoUrl, Avtar, PostTime }, ref) => {

  var user = JSON.parse(localStorage.getItem('UserData'))

  const delPost = async (TimeStamp) => {
    const batch = db.batch();
    const collection = db.collection('posts')
    const SnapShot = await collection.where('timeStamp', '==', TimeStamp).get();
    batch.delete(SnapShot.docs[0].ref)
    await batch.commit();
  }

  return (
    <div ref={ref} className='post'>
      <div className='post__header'>
        <Avatar>{Avtar && Avtar}</Avatar>
        <div className='post__info'>
          <div>
            <h3>{Name}</h3>
            <p className='post__email'>{Discription}</p>
          </div>
          <div>
            {Name == user.UserInfo.FullName && <DeleteOutlineIcon onClick={() => delPost(PostTime)} className='post__3dot' />}
          </div>
        </div>
      </div>
      <div className='post__body'>
        <p>{Message}</p>
      </div>
      <div className='post__btns'>
        <FeedInputOption Icon={ThumbUpOffAltIcon} title="Like" Color="gray" />
        <FeedInputOption Icon={ChatBubbleOutlineIcon} title="Comment" Color="gray" />
        <FeedInputOption Icon={ShareOutlinedIcon} title="Share" Color="gray" />
        <FeedInputOption Icon={SendOutlinedIcon} title="Send" Color="gray" />
      </div>
    </div>
  )
})

export default Post