import React from 'react'
import { useSelector } from 'react-redux'
import './Body.css'
import Header from './Header'
import {AiFillPlayCircle} from 'react-icons/ai';
import {FaHeart} from 'react-icons/fa'
import {BsThreeDots} from 'react-icons/bs'
import SongRow from './SongRow';

function Body({spotify}) {
  const weekly = useSelector(state => state.weekly);
  return (
    <div className='body'>
      <Header spotify = {spotify}/>
      <div className="body_info">
        <img src={weekly?.images[0]?.url} alt="" />
        <div className="body_infoText">
          <strong>PLAYLISTS</strong>
          <h1>Discover Weekly</h1>
          <p>Whether you're feeling happy, sad, or somewhere in between, this playlist has got you covered. With a mix of slow ballads and energetic anthems, it's designed to fit any moods</p>
        </div>
      </div>
      <div className="body_songs">
        <div className="body_icons">
          <AiFillPlayCircle className='icons shuffle'/>
          <FaHeart className='icons st'/>
          <BsThreeDots className='icons st'/>
        </div>
        {weekly?.tracks.items.map(item => <SongRow track={item.track} />)}
      </div>
    </div>
  )
}

export default Body
