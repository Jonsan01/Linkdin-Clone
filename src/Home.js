import React from 'react'
import Feed from './Components/Feed';
import Header from './Components/Header';
import SlideBar from './Components/SlideBar';

function Home() {

    var user = JSON.parse(localStorage.getItem('UserData'))
    if (user === null || user === undefined || user === "") {
        window.location.href = "/"
    }

    return (
        <div className="app">
            <Header />
            <div className='app__body'>
                <SlideBar />
                <Feed />
            </div>
        </div>
    )
}


export default Home;