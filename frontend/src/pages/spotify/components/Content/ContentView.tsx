import React, { useState } from "react";
import headshot from '../../../../images/Headshot.jpg';
import MediaCard from "../MediaCard";

function parseTime(time: number) {
    var minutes = Math.floor((time/1000)/60);
    var seconds = Math.round((((time/1000)/60) - minutes) * 60);

    return(`${minutes}:${seconds < 10 ? "0" + seconds : seconds}`);
}

export default function ContentView(props: any) {
    var tracks = [];
    console.log(props);

    const [selectedSong, setSelectedSong] = useState(null);
    console.log(selectedSong);


    if (props.selectedPlaylist !== "") {
        // let playlistInfo = props.playlistInfo;

        let index = 1;
        
        tracks = props.playlistTracks.tracks.map((track: any) => {

            return(
                <div key={`list-item-${track.track.id}`} className="list-item" onClick={() => setSelectedSong(track.track.id)} style={selectedSong === track.track.id ? {background: "rgb(40, 40, 40)"} : {}}>
                    <p className="item-number">{index++}</p>
                    <div className="title">
                        <img className="album-art" src={track.track.album.images[0].url}/>
                        <div className="title-info">
                            <h5>{track.track.name}</h5>
                            <h6>{track.track.artists[0].name}</h6>
                        </div>
                    </div>
                    <h6 className="album-name">{track.track.album.name}</h6>
                    <h6 className="added-date">Oct 27, 2020</h6>
                    <h6 className="time">{`${parseTime(track.track.duration_ms)}`}</h6>
                </div>
            )
        });
    }
    
    let playlistInfo = props.playlistInfo;
    return(
        <div className={`content-view${props.type === "album" ? "-album" : "-playlist"}`}>
            <div className="content-header">
                <img className="content-header-art" src={playlistInfo.images[0].url}/>
                {/* <MediaCard mediaName={playlistInfo.name} artistName={"Jared"}/> */}
                <div className="content-header-info">
                    <h6>PLAYLIST</h6>
                    <h1 style={{marginTop: "10px"}}>{playlistInfo.name}</h1>
                    <div style={{display: "flex", flexDirection: "row", marginTop: "1rem"}}>
                        <img height="30px" src={headshot} style={{borderRadius: "25px"}}/>
                        <h6>Jared • {playlistInfo.tracks.total} Songs, 2 hr 18 min</h6>
                    </div>
                </div>
            </div>

            <div className="content-body">
                <div className="body-control-header">

                </div>

                <div className="content-body-list">
                    <div className="list-header">
                        <h6 className="item-number">#</h6>
                        <div className="title">TITLE</div>
                        <h6 className="album-name">ALBUM</h6>
                        <h6 className="added-date">DATE ADDED</h6>
                        <h6 className="time">Time</h6>
                    </div>
                        {tracks}
                </div>
            </div>
        </div>
    )
}