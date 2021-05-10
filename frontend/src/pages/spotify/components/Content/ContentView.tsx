import albumArt from '../../../../images/blond.jpeg';
import swimming from '../../../../images/2009.jpg';

export default function ContentView(props: any) {
    // const tracks = [];
    // console.log(props);

    // if (props.playlistInfo !== null) {
    //     let playlistInfo = props.playlistInfo.playlistInfo;
    //     let playlistTracks = props.playlistInfo.playlistTracks;


    //     for (var i=1; i < playlistTracks.length; i++) {
    //         tracks.push(
    //             <div key={`list-item-${playlistInfo.id}`} className="list-item">
    //                 <p className="item-number">{i}</p>
    //                 <div className="title">
    //                     <img className="album-art" src={playlistTracks[i].track.album.images[0].url}/>
    //                     <div className="title-info">
    //                         <h5>{playlistTracks[i].track.name}</h5>
    //                         <h6>{playlistTracks[i].track.artists[0].name}</h6>
    //                     </div>
    //                 </div>
    //                 <h6 className="album-name">{playlistTracks[i].track.album.name}</h6>
    //                 <h6 className="added-by">Jared Min</h6>
    //                 <h6 className="added-date">Oct 27, 2020</h6>
    //                 <h6 className="time">3:00</h6>
    //             </div>
    //         );
    //     }
    // }
    

    console.log(props);
    return(
        <div className={`content-view${props.type === "album" ? "-album" : "-playlist"}`}>
            <div className="content-header">
                <img className="content-header-art" src={albumArt}/>
                <div className="content-header-info">
                    
                </div>
            </div>

            <div className="content-body">
                <div className="body-control-header">

                </div>

                <div className="content-body-list">
                    <div className="list-header">
                        <h6 className="item-number">#</h6>
                        <div className="title">Title</div>
                        <h6 className="album-name">Album</h6>
                        <h6 className="added-by">Added by</h6>
                        <h6 className="added-date">Date-added</h6>
                        <h6 className="time">Time</h6>
                    </div>

                   

                    {/* {tracks} */}
                </div>
            </div>
        </div>
    )
}