import React from 'react';
import './spotify.scss';
import Sidebar from './components/SpotifySidebar';
import Main from './components/SpotifyMain';

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
        </div>
    )
}