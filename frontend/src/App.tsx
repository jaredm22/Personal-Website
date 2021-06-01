import React from 'react';
import Messenger from './pages/iMessage/Messenger';
import Spotify from './pages/spotify/Spotify';
import Dock from './pages/components/Dock/Dock';
import Safari from './pages/safari/Safari';
import { Rnd } from 'react-rnd';
import './App.scss';
import Lightsaber from './pages/components/Lightsaber';
import * as dotenv from 'dotenv';

dotenv.config();

function App() {
  const [state, setState] = React.useState({
    topApp: "iMessage",
    iMessageMinimized: false, 
    spotifyMinimized: false,
    safariMinimized: false,
  });

  function handleSpotifyMinimize() {
    setState( {...state, spotifyMinimized: true } );
  }

  function handleiMessageMinimize() {
    setState( {...state, iMessageMinimized: true } );
  }

  function handleSafariMinimize() {
    setState( {...state, safariMinimized: true } );
  }


  function handleAppClick(app: string) {
    if (app === "spotify") {
      setState({ 
          ...state, 
          topApp: app,
          spotifyMinimized: false,
      });
    } else if (app === "iMessage") {
      setState({ 
          ...state,
          topApp: app,
          iMessageMinimized: false,
      });
    } else if (app === "safari") {
      setState({ 
          ...state,
          topApp: app,
          safariMinimized: false,
      });
    }
  }

  return (
    <div className="container">
      <Dock onChildClick={handleAppClick}/>    
      <Messenger topApp={state.topApp === "iMessage"} onChildClick={handleAppClick} minimized={state.iMessageMinimized} minimizeHandler={handleiMessageMinimize}/>
      <Spotify topApp={state.topApp === "spotify"} onChildClick={handleAppClick} minimized={state.spotifyMinimized} minimizeHandler={handleSpotifyMinimize} />
      <Safari topApp={state.topApp === "safari"} onChildClick={handleAppClick} minimized={state.safariMinimized} minimizeHandler={handleSafariMinimize}/>

      <Rnd className="lightsaber-draggable">
        <Lightsaber color="mint"/>  
      </Rnd>
    </div>
    
  );
}

export default App;
