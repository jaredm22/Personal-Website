import { useState, useEffect } from 'react';
import './spotify.scss';
import Sidebar from './components/Sidebar/SpotifySidebar';
import Main from './components/SpotifyMain';
import MediaController from './components/MediaController';
import { Rnd } from 'react-rnd';
import axios from 'axios';

export default function Spotify(props: any) {

    const [ state, setState ] = useState({
        dataLoaded: false,
        selectedNavItem: "Home",
        selectedPlaylistId: "",
        playlistInfo: [],
        playlistTracks: [],
        expanded: true,
        x: 110, 
        y: 5, 
        width: "85%",
        height: "90%",
    });

    function handleExpand() {
        setState({
            ...state, 
            expanded: true, 
            width: "100%",
            height: "100%",
            x: 0,
            y: 0,
        });
    }

    function handleNavClick(navItem: string) {
        setState({...state, selectedNavItem: navItem });
    }

    function handlePlaylistClick(playlistId: string) {
        setState({...state, selectedPlaylistId: playlistId});
    }

    function handleClick() {
        props.onChildClick("spotify");
    }

    useEffect(() => {
        if (!state.dataLoaded) {
            axios.get("https://personal-website-backend-jmin.herokuapp.com/spotify")
            .then((res) => {
                setState({
                    ...state,
                    dataLoaded: true,
                    playlistInfo: res.data,
                    selectedPlaylistId: res.data[0].id,
                })
            })
            .catch((err) => console.log("An error occured", err));
        }
    }, [state]);
    
    return(
            <Rnd
                key={`spotify${state.dataLoaded ? "-data-loaded" : ""}`}
                className="spotify-container"
                size={{ width: state.width,  height: state.height }}
                position={{ x: state.x, y: state.y }}
                onDragStop={(e, d) => {
                    setState({
                        ...state,
                        x: d.x,
                        y: d.y,
                    })
                    e.preventDefault()
                }}
                onResizeStop={(e, direction, ref, delta, position) => {
                    setState({
                        ...state,
                        width: ref.style.width,
                        height: ref.style.height,
                        expanded: false, 
                        ...position,
                    })
                }}
                onClick={handleClick}
                minHeight="500px"
                minWidth="1100px"
                dragHandleClassName="draggable"
                style={{display: (props.minimized ? "none" : "grid"), zIndex: (props.topApp ? 2 : 1)}}
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
                    minimizeHandler={props.minimizeHandler}
                    expandHandler={handleExpand}
                />
                {state.selectedPlaylistId !== "" && state.playlistInfo !== null ?
                    <Main 
                        key={`main-${state.selectedPlaylistId}`} 
                        selectedPlaylist={state.selectedPlaylistId} 
                        playlistInfo={state.playlistInfo.find((p: any) => p.id === state.selectedPlaylistId)} 
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