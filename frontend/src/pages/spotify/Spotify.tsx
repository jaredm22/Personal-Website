import React, { useEffect, useState } from 'react';
import './spotify.scss';
import Sidebar from './components/Sidebar/SpotifySidebar';
import Main from './components/SpotifyMain';
import MediaController from './components/MediaController';


const axios = require('axios');
const SPOTIFY_API_TOKEN = "BQAFimQvzcn18w4Nwp_VUOrhhrTYxi83-Kz4UiEM-S_dskeAKdyLCfkUCvg2QGHeZ-VoosuUdyzG5rE1cPUzh_8Aly9ATQHZlkjVYpBCN9Y8rUECAZC3pin9YP0prv4SgfxNUBKbEDNFwE3HsgiRY3qCZArq";

var SpotifyWebApi = require('spotify-web-api-node');
var spotifyApi = new SpotifyWebApi();

export default function Spotify(props: any) {

    const [dataLoaded, setDataLoaded] = useState(false);
    const [selectedNavItem, setNavItem] = useState("Home");
    const [selectedPlaylist, setPlaylist] = useState("");
    const [data, setData] = useState({});

    function handleNavClick(navItem: string) {
        setNavItem(navItem);
    }

    function handlePlaylistClick(playlistId: string) {
        setPlaylist(playlistId);
    }

    

    // useEffect(async () => {
    //     const playlistData = await axios({
    //             url: `https://api.spotify.com/v1/me/playlists`,
    //             method: 'get',
    //             headers: {
    //                 'Authorization':`Bearer ${SPOTIFY_API_TOKEN}`,
    //                 'Content-Type': 'application/json',
    //             }
    //         })
    //         .then((res: any) => { res.data.items })
    //         .catch(function (error:Error) { console.log(error) });
            
    //     const trackUrls = await axios({
    //             url: `https://api.spotify.com/v1/me/playlists`,
    //             method: 'get',
    //             headers: {
    //                 'Authorization':`Bearer ${SPOTIFY_API_TOKEN}`,
    //                 'Content-Type': 'application/json',
    //             }
    //         })
    //         .then((res: any) => { res.data.items })
    //         .catch(function (error:Error) { console.log(error) });
    // });

    
    // TO-DO : Make a fake login page to intially render while data is grabbed

    return(
            <div className="spotify-container">
                <Sidebar
                    key={`sidebar-left`}
                    selectedNavItem={selectedNavItem}
                    selectedPlaylist={selectedPlaylist}
                    onNavClick={handleNavClick} 
                    onPlaylistClick={handlePlaylistClick}
                    side="left" 
                    dataLoaded={dataLoaded}
                />
                <Main/>
                <Sidebar key={"sidebar-right"} side="right"/>
                <MediaController/>
            </div>
    );
}