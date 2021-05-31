import React from 'react';
import Messenger from './pages/iMessage/Messenger';
import Spotify from './pages/spotify/Spotify';
import Dock from './pages/components/Dock/Dock';
import Safari from './pages/safari/Safari';
import './App.scss';
import * as dotenv from 'dotenv';

dotenv.config();

function App() {
  const [state, setState] = React.useState({
    topApp: "iMessage",
    iMessageMinimized: false, 
    spotifyMinimized: false,
  })


  function handleAppClick(app: string) {
    if (app === "spotify") {
      setState(prevState => {
        return { 
          ...prevState, 
          topApp: app,
          spotifyMinimized: false,
        };
      });
    } else  {
      setState(prevState => {
        return { 
          ...prevState, 
          topApp: app,
          iMessageMinimized: false,
        };
      });
    }
  }

  console.log(state);
  return (
    <div className="container">
      <Dock onChildClick={handleAppClick}/>    
      <Messenger key={`messenger${state.iMessageMinimized ? "minimized" : ""}`} topApp={state.topApp === "iMessage"} onChildClick={handleAppClick} minimized={state.iMessageMinimized}/>
      <Spotify topApp={state.topApp === "spotify"} onChildClick={handleAppClick} minimized={state.spotifyMinimized}/>
      <Safari onChildClick={handleAppClick}/>
    </div>
    
  );
}

export default App;
