import { useEffect} from 'react';
import './App.css';
import Login from './Login';
import {getTokenFromUrl} from './spotify'
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './Player';
import { useDispatch, useSelector } from 'react-redux';
import { userActions } from './store/user-slice';

const spotify = new SpotifyWebApi();

function App() {
  const token = useSelector(state => state.token);
  const dispatch = useDispatch();
  

  useEffect(()=>{
    let _token = getTokenFromUrl(); 
    // console.log('I have token:', _token);
    window.location.hash = "";
    if(_token){
      dispatch(userActions.setToken(_token));
      spotify.setAccessToken(_token);
      
      spotify.getMe().then(user => {
        // console.log('dispatching actions')
        console.log(user)
        dispatch(userActions.setUser(user))
      })

      spotify.getUserPlaylists().then(playlist => {
        console.log(playlist)
        dispatch(userActions.setPlaylist(playlist));
      })

      spotify.getPlaylist('7FPO3NnZlAsHdvFLRkLGxP').then(response => {
        dispatch(userActions.setWeekly(response))
      })
    } 
  },[])
  
  return (
    <div className="app">
      {token ? <Player spotify = {spotify}/> : <Login/>}
    </div>
  );
}

export default App;
