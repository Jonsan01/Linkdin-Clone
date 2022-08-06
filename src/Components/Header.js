import React, { useEffect, useState } from 'react'

// Css
import '../Css/Header.css'

// Functions
import HeaderOption from './HeaderOption';

// Icons
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import WorkIcon from '@mui/icons-material/Work';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsIcon from '@mui/icons-material/Notifications';
import LogoutIcon from '@mui/icons-material/Logout'


const Header = () => {

  const logout = () => {
    if(window.confirm('Confirm Logout ?')){
      window.localStorage.clear();
      window.location.href = "/"
    }
  }

  return (
    <div className='header'>
      <div className='header__left'>
        <img src="https://www.vectorlogo.zone/logos/linkedin/linkedin-icon.svg" alt="Logo" />
        <div className='header__search'>
          <SearchIcon />
          <input type="text" placeholder='Search' />
        </div>
      </div>
      <div className='header__right'>
        <HeaderOption Icon={HomeIcon} title="Home" />
        <HeaderOption Icon={SupervisorAccountIcon} title="Networks" />
        <HeaderOption Icon={WorkIcon} title="Jobs" />
        <HeaderOption Icon={MessageIcon} title="Messaging" />
        <HeaderOption Icon={NotificationsIcon} title="Notifications" />
        <div onClick={logout} className='headerOption'>
          {<LogoutIcon className="headerOption__Icon" />}
          <h3 className='headerOption__Title'>Logout</h3>
        </div>
      </div>
    </div>
  )
}

export default Header