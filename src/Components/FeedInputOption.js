import React from 'react'
import "../Css/FeedInputOption.css"

const FeedInputOption = ({Icon, title, color}) => {
  return (
    <div className='inputOption'>
        <Icon style={{color:color}}/>
        <h4>{title}</h4>
    </div>
  )
}

export default FeedInputOption