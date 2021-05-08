import React from 'react';
import './spotify.scss';
import Sidebar from './components/Sidebar/SpotifySidebar';
import Main from './components/SpotifyMain';
import MediaController from './components/MediaController';

export default function Spotify(props: any) {
    const [ selected, setSelected ] = React.useState(null);

    function handleChildClick(childData: any) {
        setSelected(childData);
    }

    console.log(selected);

    return(
        <div className="spotify-container">
            <Sidebar side="left" onChildClick={handleChildClick}/>
            <Main/>
            <Sidebar side="right"/>
            <MediaController/>
        </div>
    )
}