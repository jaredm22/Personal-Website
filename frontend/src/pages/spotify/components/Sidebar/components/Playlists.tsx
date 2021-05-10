export default function Playlists(props: any) {
  
    const examples = [];
    for (var i = 0; i < 60; i++) {
        examples.push(i);
    }

    function handlePlaylistClick(e: any, playlistId: any) {
        e.preventDefault();
        props.onChildClick(playlistId); // pass any argument to the callback
    }

    return(
        <div className="playlists"> 
            {examples.map((i) => {
                return(
                    <div 
                        className="playlist" 
                        onClick={(e) => handlePlaylistClick(e,i)} 
                        style={props.selectedPlaylist===i ? {color: "white"} : {}}
                    >
                        <div className="playlist">
                            <p>playlist {i}</p>
                        </div>
                    </div>
                )
            })}
        </div>
)
}