import React from 'react';
import Messenger from './pages/iMessage/Messenger';
import Spotify from './pages/spotify/Spotify';
import Dock from './pages/components/Dock/Dock';
import './App.scss';

function App() {

  return (
    <div className="container">
      <Spotify/>
      <Messenger/>
      <Dock/>
    </div>
  );
}

export default App;
