import React, { useEffect, useState } from 'react';
import './spotify.scss';
import Sidebar from './components/Sidebar/SpotifySidebar';
import Main from './components/SpotifyMain';
import MediaController from './components/MediaController';
import { Rnd } from 'react-rnd';
import axios from 'axios';

var SpotifyWebApi = require('spotify-web-api-node');
var spotifyApi = new SpotifyWebApi();

export default function Spotify(props: any) {

    const [ state, setState ] = useState({
        dataLoaded: false,
        selectedNavItem: "Home",
        selectedPlaylistId: "",
        playlistInfo: [],
        playlistTracks: [],
        data: {},
        minimized: false,
        x: 0, 
        y: 0, 
        width: "100%",
        height: "100%",
    });

    function handleMinimize() {
        setState(prevState => {
            return { ...prevState, minimized: true };
        });
    }

    function handleNavClick(navItem: string) {
        setState(prevState => {
            return { ...prevState, selectedNavItem: navItem };
        });
    }

    function handlePlaylistClick(playlistId: string) {
        setState(prevState => {
            return { ...prevState, selectedPlaylistId: playlistId};
        });
    }

    useEffect(() => {

        axios.get("http://localhost:8000/getAccessToken").then((res) => console.log(res));
        axios.get("http://localhost:8000/getPlaylists").then((res) => {
            setState( prevState => {
                return {
                    ...prevState,
                    playlistInfo: res.data.playlistInfo,
                    playlistTracks: res.data.playlistTracks,
                }
            })
        });
    }, []);
    
    // // TO-DO : Make a fake login page to intially render while data is grabbed

    // console.log(state.data);
    // console.log(state.playlistInfo);
    // console.log(state.playlistTracks);
    return(
        <Rnd
            className="spotify-container"
            size={{ width: state.width,  height: state.height }}
            position={{ x: state.x, y: state.y }}
            onDragStop={(e, d) => {
                console.log(d);
                setState( prevState => {
                    return {
                        ...prevState,
                        x: d.x,
                        y: d.y,
                    }
                })
            }}
            onResizeStop={(e, direction, ref, delta, position) => {
                setState( prevState => {
                    return {
                        ...prevState,
                        width: ref.style.width,
                        height: ref.style.height,
                        ...position,
                    }
                })
            }}
            style={{display: (state.minimized ? "none" : "grid")}}
        >
                <Sidebar
                    key={`sidebar-left`}
                    selectedNavItem={state.selectedNavItem}
                    selectedPlaylist={state.selectedPlaylistId}
                    onNavClick={handleNavClick} 
                    onPlaylistClick={handlePlaylistClick}
                    playlists={state.playlistInfo}
                    side="left" 
                    dataLoaded={state.dataLoaded}
                    minimizeHandler={handleMinimize}
                />
                {state.selectedPlaylistId !== "" && state.playlistInfo !== null ?
                    <Main 
                        key={`main${"-" + state.selectedPlaylistId}`} 
                        data={state.data} 
                        selectedPlaylist={state.selectedPlaylistId} 
                        playlistInfo={state.playlistInfo.find((p: any) => p.id === state.selectedPlaylistId)} 
                        playlistTracks={state.playlistTracks.find((p: any) => p.id === state.selectedPlaylistId)}
                    />
                    :
                    <div className="spotify-main">

                    </div>
                }
                <Sidebar key={"sidebar-right"} side="right"/>
                <MediaController/>
            </Rnd>
    );
}