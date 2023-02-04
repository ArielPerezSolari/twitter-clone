import React from 'react'
import './Sidebar.css'
import SidebarOption from './SidebarOption';
import TwitterIcon from '@mui/icons-material/Twitter';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import TagIcon from '@mui/icons-material/Tag';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import { Button } from '@mui/material';


function Sidebar() {
  return (
    <div className='sidebar'>
      {/* Twitter icon */}
        <TwitterIcon className='sidebar__twitterIcon' />
        
        <SidebarOption active Icon={HomeOutlinedIcon} text="Home"  />
        <SidebarOption Icon={TagIcon} text="Explore" />
        <SidebarOption Icon={NotificationsNoneIcon} text="Notifications"  />
        <SidebarOption Icon={MailOutlineIcon} text="Messages"/>
        <SidebarOption Icon={BookmarkBorderOutlinedIcon} text="Bookmarks"/>
        <SidebarOption Icon={ListAltIcon} text="Lists"/>
        <SidebarOption Icon={PersonOutlineOutlinedIcon} text="Profile"/>
        <SidebarOption Icon={MoreHorizOutlinedIcon} text="More"/> 

      {/* Button -> Tweet */}
      <Button variant='outlined' className='sidebar__tweet' fullWidth >Tweet</Button>
    </div>
  )
}


export default Sidebar;