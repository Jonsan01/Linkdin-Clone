import { Avatar } from '@mui/material'
import React from 'react'
import '../Css/HeaderOption.css'
import { blue } from '@mui/material/colors';

const HeaderOption = ({ Avtar, Icon, title, isLogoutBtn }) => {
  return (
    <div className='headerOption'>
      {Icon && <Icon className="headerOption__Icon" />}
      {Avtar && (
        <Avatar className='headerOption__Avtar' sx={{ bgcolor: blue[800] }}>{Avtar}</Avatar>
      )}
      <h3 className='headerOption__Title'>{title}</h3>
    </div>
  )
}

export default HeaderOption