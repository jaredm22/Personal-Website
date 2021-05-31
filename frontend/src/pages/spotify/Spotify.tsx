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
        minimized: props.minimized,
        expanded: true,
        x: 0, 
        y: 0, 
        width: "94.5%",
        height: "100%",
    });

    function handleMinimize() {
        setState(prevState => {
            return { ...prevState, minimized: true };
        });
    }

    function handleExpand() {
        setState(prevState => {
            return { 
                ...prevState, 
                expanded: true, 
                width: "100%",
                height: "100%",
                x: 0,
                y: 0,
            };
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

    function handleClick() {
        props.onChildClick("spotify");
    }

    useEffect(() => {
        axios.get("http://personal-website-backend-jmin.herokuapp.com/spotify")
            .then((res) => {
                setState(prevState => {
                    return {
                        ...prevState,
                        dataLoaded: true,
                        playlistInfo: res.data,
                        selectedPlaylistId: res.data[0].id,
                    }
                })
            })
            .catch((err) => console.log("An error occured", err));
      }, [state.dataLoaded]);
    
    console.log(state);
    return(
        <div onClick={handleClick}>
            <Rnd
                key={`spotify${state.dataLoaded ? "-data-loaded" : ""}`}
                className="spotify-container"
                size={{ width: state.width,  height: state.height }}
                position={{ x: state.x, y: state.y }}
                onDragStop={(e, d) => {
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
                            expanded: false, 
                            ...position,
                        }
                    })
                }}
                
                minHeight="500px"
                minWidth="500px"
                dragHandleClassName="draggable"
                style={{display: (state.minimized ? "none" : "grid"), zIndex: (props.topApp ? 2 : 1)}}
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
                    expandHandler={handleExpand}
                />
                {state.selectedPlaylistId !== "" && state.playlistInfo !== null ?
                    <Main 
                        key={`main${"-" + state.selectedPlaylistId}`} 
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
        </div>
    );
}