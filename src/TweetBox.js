import { Avatar, Button } from '@mui/material'
import React, { useState } from 'react'
import './TweetBox.css'
import db from './firebase';

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = e => {
    e.preventDefault();

    db.collection('posts').add({
      displayName: 'XXXXX',
      username: 'XXXXX',
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar: "https://png.pngtree.com/png-clipart/20220322/ourlarge/pngtree-d-render-male-avatar-with-blue-sweater-good-for-profile-picture-png-image_4506784.png"

    })
    setTweetImage("")
    setTweetMessage("")
  }

  return (
    <div className='tweetBox'>
      <form>
        <div className='tweetBox__input'>
        <Avatar src='https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80' />
        <input 
          onChange={e => setTweetMessage(e.target.value)} 
          value={tweetMessage} 
          placeholder="What's happening?" 
          type="text"/>
        </div>
        <input
          onChange={e => setTweetImage(e.target.value)}
          value={tweetImage}
          className='tweetBox__imageInput'
          placeholder='Optional: Enter image URL' 
          type='text'/>

        <Button
          onClick={sendTweet} 
          className='tweetBox__tweetButton'>
          Tweet </Button>


      </form>
    </div>
  )
}

export default TweetBox
