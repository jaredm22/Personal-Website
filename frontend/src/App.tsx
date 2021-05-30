import React from 'react';
import Messenger from './pages/iMessage/Messenger';
import Spotify from './pages/spotify/Spotify';
import Dock from './pages/components/Dock/Dock';
import BigSur from './images/bigsur.jpeg';
import './App.scss';
import * as dotenv from 'dotenv';

dotenv.config();

function App() {

  return (
    <div className="container">
      <div className="app-container">
        <Messenger/>
        {/* <Spotify/> */}
      </div>
      <Dock/>
    </div>
    
  );
}

export default App;
