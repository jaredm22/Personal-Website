import React from 'react';
import headshot from '../../../images/Headshot.jpg';

function NavCard(props: any) {

    function handleClick(event: any) {
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
    const [clickedItem, setClickedItem] = React.useState("Home"); 

    function handleChildClick(navItem: string) {
        setClickedItem(navItem);
    }

    const navbarItems = [
        "Home", 
        "Search", 
        "Your Library",
        "Create Playlist",
        "Liked Songs"
    ];

    console.log(clickedItem);

    return(
        <div className="navbar">
            {navbarItems.map((x) => 
                <NavCard 
                    navItem={x} 
                    clicked={clickedItem === x} 
                    onChildClick={handleChildClick}
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

    return(
        props.side === "left" ?
        <div className="left-sidebar">
                <div className="header">
                    <div className="button-container">
                        <div className="button close"></div>
                        <div className="button minimize"></div>
                        <div className="button expand"></div>
                    </div>
                </div>
               

                <NavBar onChildClick={props.onChildClick}/>

                <div className="playlists"> 
                    {examples.map(() => {
                        return(
                            <div className="playlist">
                                <p>late night studying</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        : 
        <div className="right-sidebar">
            <div className="header">
                <h4>Friend Activity</h4>
            </div>

            <div className="friends-list">
                {examples.map(() => {
                    return(
                        <div className="friend-card">
                            <div className="friend-card-photo">
                                <img className="image" src={headshot}/>
                            </div>

                            <div className="friend-card-content">
                                
                                <div className="content-top">
                                    <h5>Jared Min</h5>
                                    <h6>2 Hr</h6>
                                </div>
                                    
                                <h6>No Role Modelz • J-Cole</h6>
                                <h6>Summer Jams</h6>

                                <div className="friend-card-timestamp">
                                
                                </div> 
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}