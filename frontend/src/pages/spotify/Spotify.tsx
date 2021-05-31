import { useState } from 'react';
import './spotify.scss';
import Sidebar from './components/Sidebar/SpotifySidebar';
import Main from './components/SpotifyMain';
import MediaController from './components/MediaController';
import { Rnd } from 'react-rnd';
// import axios from 'axios';

// var SpotifyWebApi = require('spotify-web-api-node');
// var spotifyApi = new SpotifyWebApi();

export default function Spotify(props: any) {

    const [ state, setState ] = useState({
        dataLoaded: false,
        selectedNavItem: "Home",
        selectedPlaylistId: "",
        playlistInfo: [],
        playlistTracks: [],
        data: {},
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
    // useEffect(() => {

    //     axios.get("http://localhost:8000/getAccessToken").then((res) => console.log(res));
    //     axios.get("http://localhost:8000/getPlaylists").then((res) => {
    //         setState( prevState => {
    //             return {
    //                 ...prevState,
    //                 playlistInfo: res.data.playlistInfo,
    //                 playlistTracks: res.data.playlistTracks,
    //             }
    //         })
    //     });
    // }, []);
    
    // // TO-DO : Make a fake login page to intially render while data is grabbed

    console.log(state);
    // console.log(state.playlistInfo);
    // console.log(state.playlistTracks);
    return(
        <div onClick={handleClick}>
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
        </div>
    );
}