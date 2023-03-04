import React from 'react'
import './Header.css'
import {AiOutlineSearch} from 'react-icons/ai';
import { useSelector } from 'react-redux';

function Header({spotify}) {
    const user = useSelector(state => state.user);
    const img = "https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small/user-profile-icon-free-vector.jpg"
  return (
    <div className='header'>
        <div className="header-left">
            <AiOutlineSearch/>
            <input type="text" placeholder='Search for Artist, Album, Song' />
        </div>
        <div className="header-right">
            <img src={img} alt="user icon" className='user'/>
            <h4>{user?.display_name}</h4>
        </div>
    </div>
  )
}

export default Header
