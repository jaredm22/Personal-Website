import React from 'react';
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

    const examples = [];
    for (var i = 0; i < 60; i++) {
        examples.push(i);
    }
    console.log(props);

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
                <h4>Friend Activity</h4>
            </div>

            <div className="friends-list">
                {examples.map((i) => 
                    <FriendCard key={`friends-${i}`}/>
                )}
            </div>
        </div>
    )
}

