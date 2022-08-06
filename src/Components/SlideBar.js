import React from 'react'
import '../Css/Slidebar.css'
import Avatar from '@mui/material/Avatar/Avatar'

const SlideBar = () => {
    
    var user = JSON.parse(localStorage.getItem('UserData'))

    const recentItoms = (topic) => {
        return (
            <div className='Slidebar__RecentIton'>
                <span className='Slidebar__hash'>#</span>
                <p>{topic}</p>
            </div>
        )
    }
    return (
        <div className='Slidebar'>
            <div className='Slidebar__top'>
                <img src='https://images.unsplash.com/photo-1659350411244-5ec625d2fc94?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80' alt='Background Image' />
                <Avatar className='Slidebar__Avtar' >{user.UserInfo.ProfileUrl}</Avatar>
                <h2>{user.UserInfo.FullName}</h2>
                <h4>{user.UserInfo.Email}</h4>
                <div className='Slidebar__starts'>
                    <div className='Slidebar__stat'>
                        <p>Who viewed you</p>
                        <p className='Slidebar__statNumber'>2,490</p>
                    </div>
                    <div className='Slidebar__stat'>
                        <p>Total post viewed</p>
                        <p className='Slidebar__statNumber'>2,578</p>
                    </div>
                </div>
            </div>
            <div className='Slidebar__button'>
                <p>Recent</p>
                {recentItoms("ReactJs")}
                {recentItoms("Coding")}
                {recentItoms("Programing")}
                {recentItoms("Cyber Security")}
                {recentItoms("Design")}
            </div>
        </div>
    )
}

export default SlideBar