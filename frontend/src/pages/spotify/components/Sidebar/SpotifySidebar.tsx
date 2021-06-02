import WindowButtons from '../../../components/WindowButtons';
import FriendCard from './components/FriendCard';
import Playlists from './components/Playlists';

function NavCard(props: any) {

    function handleClick(e: any) {
        e.preventDefault();
        props.onChildClick(props.navItem); // pass any argument to the callback
    }

    return(
        <div className={`nav-card${props.clicked ? "-clicked": ""}`} onClick={handleClick}>
            <div className="nav-icon">
                
            </div>
            <h5>{props.navItem}</h5>
        </div>
    )
}


function NavBar(props: any) {


    const navbarItems = [
        "Home", 
        "Search", 
        "Your Library",
        "Create Playlist",
        "Liked Songs"
    ];

    return(
        <div className="navbar">
            {navbarItems.map((x) => 
                <NavCard 
                    key={`nav-${x}`}
                    navItem={x} 
                    clicked={props.selectedNavItem === x} 
                    onChildClick={props.onChildClick}
                />
            )}
        </div>
    )
}


export default function Sidebar(props: any) {

    const artists = [
        {
            name: "J-Cole",
            song: "Sacrifices - ROTD3 ",
            album: "2014 Forest Hills Drive",
            imageUrl: "https://i.scdn.co/image/ab6761610000e5ebadd503b411a712e277895c8a"
        },
        {
            name: "Mac Miller",
            song: "Weekend - GO:OD AM",
            album: "Swimming",
            imageUrl: "https://static.onecms.io/wp-content/uploads/sites/6/2018/11/gettyimages-608990834-2000.jpg"
        },
        {
            name: "Daniel Caesar",
            song: "Superposition - CASE STUDY 01",
            album: "Freudian",
            imageUrl: "https://i.scdn.co/image/f9dbecfbec79585821a0058c96fde9a57b9c106c"
        },
        {
            name: "Frank Ocean",
            song: "Thinkin Bout You - Blond",
            album: "Blond",
            imageUrl: "https://i.scdn.co/image/7db34c8aace6feb91f38601bb75e6b3301b4657a"
        },
        {
            name: "Brockhampton",
            song: "Sugar - Ginger",
            album: "Ginger",
            imageUrl: "https://pbs.twimg.com/media/Ex8MCPSVoAEqtqa.jpg"
        },
        {
            name: "Cautious Clay",
            song: "Stolen Moments - Blood Type",
            album: "Blood Type",
            imageUrl: "https://www.montereyherald.com/wp-content/uploads/2019/01/Cautious-Clay-Press-Photo-.jpg"
        },
        {
            name: "John Mayer",
            song: "New Light - New Light",
            album: "Continuum",
            imageUrl: "http://www.yardbarker.com/media/3/6/36e658a501eaa6e99ab24eb187093adc2f32b403/xl/john-mayer-reportedly-talks-host-late-night-talk.jpg?v=1"
        },
        {
            name: "Billie Eilish",
            song: "when the party's over - WHEN WE FALL ASLEEP, WHERE DO WE GO?",
            album: "WHEN WE FALL ASLEEP, WHERE DO WE GO?",
            imageUrl: "https://parade.com/wp-content/uploads/2021/03/billie-eilish-net-worth-1024x640.jpg"
        },
    ]

    return(
        props.side === "left" ?
            <div className="left-sidebar">
                <div className="header draggable">
                    <WindowButtons app={"spotify"} minimizeHandler={props.minimizeHandler} expandHandler={props.expandHandler}/>
                </div>

                <NavBar onChildClick={props.onNavClick} selectedNavItem={props.selectedNavItem}/>
                <Playlists key="playlists" onChildClick={props.onPlaylistClick} selectedPlaylist={props.selectedPlaylist} playlists={props.playlists}/>
            </div>

        : 

        <div className="right-sidebar">
            <div className="header draggable">
                <h4>My Favorite Artists</h4>
                <p>Some of my favorite artists, and my favorite song and album of theirs.</p>
            </div>

            <div className="friends-list">
                {artists.map((artist, i) => 
                    <FriendCard 
                        key={`friends-${i}`} 
                        name={artist.name} 
                        song={artist.song} 
                        album={artist.album}
                        imageUrl={artist.imageUrl}
                    />
                )}
            </div>
        </div>
    )
}

