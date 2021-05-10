export default function Playlists(props: any) {
  
    const examples = [];
    for (var i = 0; i < 60; i++) {
        examples.push(i);
    }

    function handlePlaylistClick(e: any, playlistId: any) {
        e.preventDefault();
        props.onChildClick(playlistId); // pass any argument to the callback
    }
    console.log(props);

    return(
        <div className="playlists"> 
            
            {props.playlists !== null ?
            
            props.playlists.map((p: any) => {
                return(
                    <div 
                        className="playlist" 
                        onClick={(e) => handlePlaylistClick(e, p.id)} 
                        style={props.selectedPlaylist===p.id ? {color: "white"} : {}}
                    >
                        <div className="playlist">
                            <p>{p.name}</p>
                        </div>
                    </div>
                )
            })
        : false}
        </div>
)
}