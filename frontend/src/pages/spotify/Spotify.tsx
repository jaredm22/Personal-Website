import React, { useEffect, useState } from 'react';
import './spotify.scss';
import Sidebar from './components/Sidebar/SpotifySidebar';
import Main from './components/SpotifyMain';
import MediaController from './components/MediaController';


const axios = require('axios');
const SPOTIFY_API_TOKEN = "";

var SpotifyWebApi = require('spotify-web-api-node');
var spotifyApi = new SpotifyWebApi();
spotifyApi.setAccessToken(SPOTIFY_API_TOKEN);

export default function Spotify(props: any) {

    const [dataLoaded, setDataLoaded] = useState(false);
    const [selectedNavItem, setNavItem] = useState("Home");
    const [selectedPlaylistId, setSelectedPlaylist] = useState("");
    const [playlistInfo, setPlaylistInfo] = useState([]);
    const [playlistTracks, setPlaylistTracks] = useState([]);
    const [data, setData] = useState({});


    function handleNavClick(navItem: string) {
        setNavItem(navItem);
    }

    function handlePlaylistClick(playlistId: string) {
        setSelectedPlaylist(playlistId);
    }

    useEffect(() => {
        spotifyApi.getUserPlaylists('1236247390', {limit: 50})
            .then(function(data: any) {
                setPlaylistInfo(data.body.items);
                return data.body.items;
            })
            .then(function(playlists: any) {
                console.log(playlists);
                var trackData: any = []

                playlists.forEach((p:any) => {
                    spotifyApi.getPlaylistTracks(p.id)
                        .then((res: any) => {
                            trackData.push(
                                {
                                    id: p.id,
                                    tracks: res.body.items,
                                }
                            )
                        })
                        .catch((e: any) =>  console.log(e)) ;
                });
                setPlaylistTracks(trackData);
            },function(err: any) {
                console.log('Something went wrong!', err);
            });
    }, []);
    
    // TO-DO : Make a fake login page to intially render while data is grabbed

    console.log(data);
    console.log(playlistInfo);
    console.log(playlistTracks);
    return(
            <div className="spotify-container">
                <Sidebar
                    key={`sidebar-left`}
                    selectedNavItem={selectedNavItem}
                    selectedPlaylist={selectedPlaylistId}
                    onNavClick={handleNavClick} 
                    onPlaylistClick={handlePlaylistClick}
                    playlists={playlistInfo}
                    side="left" 
                    dataLoaded={dataLoaded}
                />
                {selectedPlaylistId !== "" && playlistInfo !== null ?
                    <Main 
                        key={`main${"-" + selectedPlaylistId}`} 
                        data={data} 
                        selectedPlaylist={selectedPlaylistId} 
                        playlistInfo={playlistInfo.find((p: any) => p.id === selectedPlaylistId)} 
                        playlistTracks={playlistTracks.find((p: any) => p.id === selectedPlaylistId)}
                    />
                    :
                    false
                }
                <Sidebar key={"sidebar-right"} side="right"/>
                <MediaController/>
            </div>
    );
}