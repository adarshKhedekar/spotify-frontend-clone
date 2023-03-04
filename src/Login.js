import React from 'react'
import logo from './logo.png';
import { loginUrl} from './spotify';
import './Login.css'

function Login() {
  return (
    <div className='login'>
      <img src={logo} alt="spotify-logo" />
      <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
    </div>
  )
}

export default Login
