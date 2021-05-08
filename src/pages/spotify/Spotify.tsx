import React from 'react';
import Conversation from '../../components/Conversation';
import './spotify.scss';
import headshot from '../../images/Headshot.jpg';

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
    const [clickedItem, setClickedItem] = React.useState(""); 

    function handleChildClick(navItem: string) {
        setClickedItem(navItem);
    }

    const navbarItems = ["Home", "Search", "Your Library"];
    console.log(clickedItem);

    return(
        <div className="navbar">
            <NavCard navItem={"Home"} clicked={clickedItem === "Home"} onChildClick={handleChildClick}/>
            <NavCard navItem={"Search"} clicked={clickedItem === "Search"} onChildClick={handleChildClick}/>
            <NavCard navItem={"Your Library"} clicked={clickedItem === "Your Library"} onChildClick={handleChildClick}/>
        </div>
    )
}


export default function Spotify(props: any) {
    const [ selected, setSelected ] = React.useState(null);

    function handleChildClick(childData: any) {
        setSelected(childData);
    }

    console.log(selected);
    const examples = [];
    for (var i = 0; i < 60; i++) {
        examples.push(i);
    }

    return(
        <div className="spotify-container">
            

            <div className="left-sidebar">
                <div className="header">
                    <div className="button-container">
                        <div className="button close"></div>
                        <div className="button minimize"></div>
                        <div className="button expand"></div>
                    </div>
                </div>
               

                <NavBar/>

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

            <div className="spotify-main">

            </div>

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
        </div>
    )
}


function Sidebar(props: any) {

    return(
        <div className="spotify-sidebar">
            
        </div>
    )
}