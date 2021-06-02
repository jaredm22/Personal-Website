import { useState, useEffect } from "react";
import headshot from '../../../images/Headshot.jpg';
// import MediaCard from "../MediaCard";
import axios from 'axios';

function parseTime(time: number) {
    var minutes = Math.floor((time/1000)/60);
    var seconds = Math.round((((time/1000)/60) - minutes) * 60);

    return(`${minutes}:${seconds < 10 ? "0" + seconds : seconds}`);
}

export default function ContentView(props: any) {

    const [ state, setState ] = useState({
        selectedSong: "",
        playlistTracks: [],
        dataLoaded: false,
    });

    useEffect(() => {
        if (!state.dataLoaded) {
            console.log("data");
            axios({
                method: "post",
                url: "https://personal-website-backend-jmin.herokuapp.com/playlist",
                data: { id: props.selectedPlaylist },
            })
            .then((res) => {
                setState({
                    ...state,
                    playlistTracks: res.data,
                    dataLoaded: true,
                })
            })
            .catch((err) => console.log("An error occured", err));
        }
    }, [state, props.selectedPlaylist]);

    let playlistInfo = props.playlistInfo;
    return(
        <div className={`content-view${props.type === "album" ? "-album" : "-playlist"}`}>
            <div className="content-header">
                <img className="content-header-art" src={playlistInfo.images[0].url} alt=""/>
                <div className="content-header-info">
                    <h6>PLAYLIST</h6>
                    <h1 style={{marginTop: "10px", fontSize: "40px"}}>{playlistInfo.name}</h1>
                    {/* {playlistInfo.description !== ""? <h6>{playlistInfo.description}</h6> : false} */}
                    <div style={{display: "flex", flexDirection: "row", alignItems: "center",marginTop: "1rem"}}>
                        <img height="30px" src={headshot} style={{borderRadius: "25px"}} alt=""/>
                        <h5>Jared • {playlistInfo.tracks.total} Songs, 2 hr 18 min</h5>
                    </div>
                </div>
            </div>

            <div className="content-body">
                {/* <div className="body-control-header">
                    <div className="play-button"></div>
                </div> */}

                <div className="content-body-list">
                    <div className="list-header">
                        <h6 className="item-number">#</h6>
                        <div className="title">TITLE</div>
                        <h6 className="album-name">ALBUM</h6>
                        <h6 className="time">Time</h6>
                    </div>
                    <div key={props.selectedPlaylist} className="track-list">
                        {state.playlistTracks !== [] ?
                            state.playlistTracks.map((track: any, i: number) => (
                                <div 
                                    key={`list-item-${track.track.id}`} 
                                    className={`list-item ${state.selectedSong === track.track.id ? "selected" : "" }`} 
                                    onClick={() =>
                                        setState({
                                            ...state,
                                            selectedSong: track.track.id,
                                        })
                                    }
                                >
                                    <p className="item-number">{i+1}</p>
                                    <div className="title">
                                        <img height="50px" src={track.track.album.images[0].url} alt=""/>
                                        <div className="title-info">
                                            <h5>{track.track.name}</h5>
                                            <h6>{track.track.artists[0].name}</h6>
                                        </div>
                                    </div>
                                    <h6 className="album-name">{track.track.album.name}</h6>
                                    {/* <h6 className="added-date">{format(parseISO(track.added_at), "MMM d, yyyy")}</h6> */}
                                    <h6 className="time">{`${parseTime(track.track.duration_ms)}`}</h6>
                                </div>
                            ))
                        : <div></div>}
                    </div>
                </div>
            </div>
        </div>
    )
}