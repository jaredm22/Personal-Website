import React, { useState } from "react";
import headshot from '../../../../images/Headshot.jpg';

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
        let playlistTracks = props.playlistTracks.find((p: any) => p.id === props.selectedPlaylist);

        let index = 1;
        
        tracks = playlistTracks.tracks.map((track: any) => {

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
                    {/* <h6 className="added-by">Jared Min</h6> */}
                    <h6 className="added-date">Oct 27, 2020</h6>
                    <h6 className="time">{`${parseTime(track.track.duration_ms)}`}</h6>
                </div>
            )
        });
    }
    
    let playlistInfo = props.playlistInfo.find((p: any) => p.id === props.selectedPlaylist);

    return(
        <div className={`content-view${props.type === "album" ? "-album" : "-playlist"}`}>
            <div className="content-header">
                <img className="content-header-art" src={playlistInfo.images[0]}/>
                <div className="content-header-info">
                    <h6>PLAYLIST</h6>
                    <h1>{playlistInfo.name}</h1>
                    <div style={{display: "flex", flexDirection: "row"}}>
                        <img height="40px" src={headshot}/>
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
                        {/* <h6 className="added-by">ADDED-BY</h6> */}
                        <h6 className="added-date">Date-added</h6>
                        <h6 className="time">Time</h6>
                    </div>
                        {tracks}
                </div>
            </div>
        </div>
    )
}