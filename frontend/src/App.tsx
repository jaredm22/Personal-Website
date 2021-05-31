import React from 'react';
import Messenger from './pages/iMessage/Messenger';
import Spotify from './pages/spotify/Spotify';
import Dock from './pages/components/Dock/Dock';
import BigSur from './images/bigsur.jpeg';
import './App.scss';
import * as dotenv from 'dotenv';

dotenv.config();

function App() {
  const [topApp, setTopApp] = React.useState("messenger");
  
  function handleAppClick(app: string) {
    setTopApp(app)
  }

  return (
    <div className="container">
      <Dock/>
      <Messenger topApp={topApp === "messenger"} onChildClick={handleAppClick}/>
      <Spotify topApp={topApp === "spotify"} onChildClick={handleAppClick}/>
    </div>
    
  );
}

export default App;
