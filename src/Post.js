import React from 'react'
import {Avatar} from '@mui/material'
import VerifiedIcon from '@mui/icons-material/Verified';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import RepeatOutlinedIcon from '@mui/icons-material/RepeatOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import PublishOutlinedIcon from '@mui/icons-material/PublishOutlined';
import './Post.css'
import { forwardRef } from 'react'

const Post = forwardRef (({
    displayName,
    username,
    verified,
    timestamp,
    text,
    image,
    avatar
}, ref) => {
  return (
    <div className='post' ref={ref}>
      <div className='post__avatar'>
      <Avatar src={avatar} />
      </div>
      <div className='post__body'>
        <div className='post__header'>
        <div className='post__headerText'>
          <h3>{displayName}
            <span className='post__headerSpecial'>
              {verified && <VerifiedIcon className='post__badge' fontSize='small'/>} @{username}
            </span>
          </h3>
        </div>
        <div className='post_headerDescription'>
          <p>{text}</p>
        </div>
        <img src={image} alt=""/>
        <div className='post__footer'>
          <ChatOutlinedIcon fontSize='small'/>
          <RepeatOutlinedIcon fontSize='small' />
          <FavoriteBorderOutlinedIcon fontSize='small' />
          <PublishOutlinedIcon fontSize='small' />
        </div>
        </div>
      </div>
    </div>
  )
});

export default Post
