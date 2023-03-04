import React from 'react'
import './Footer.css'
import {AiOutlinePlayCircle} from 'react-icons/ai';
import {CiShuffle} from 'react-icons/ci';
import {CiRepeat} from 'react-icons/ci';
import {RxTrackPrevious} from 'react-icons/rx';
import {RxTrackNext} from 'react-icons/rx';
import {RiPlayListAddFill} from 'react-icons/ri'
import {BsFillVolumeUpFill} from 'react-icons/bs'

function Footer() {
  return (
    <div className='footer'>

      <div className="footer-left">
        <img className="footer__albumLogo" src="https://yt3.googleusercontent.com/ltfXLoa1p54xN8jz7rhplHFRyjJ_ASS2U2dZ_ipkk1p7nDdGwegN3eywcgDKLnJ2m9As9YbV=s900-c-k-c0x00ffffff-no-rj" alt="" />
        <div className="footer__songInfo">
          <h4>Yeah</h4>
          <p>User</p>
        </div>
      </div>

      <div className="footer-center">
        <CiShuffle className='green' />
        <RxTrackPrevious className='icon' />
        <AiOutlinePlayCircle className='play' />
        <RxTrackNext className='icon' />
        <CiRepeat className='green' />
      </div>

      <div className="footer-right">
        <RiPlayListAddFill className='playlist' />
        <BsFillVolumeUpFill className='vol' />
        <hr />
      </div>
    </div>
  )
}

export default Footer
