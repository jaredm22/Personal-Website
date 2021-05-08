import React from 'react';
import Conversation from '../components/Conversation';
import './spotify.scss';

function NavCard(props: any) {
    return(
        <div className="nav-card">
            <div className="icon">
                
            </div>
            <h5>Home</h5>
        </div>
    )
}

function NavBar(props: any) {
    return(
        <div className="">

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

               

                <div className="navbar"> 
                    <NavCard/>
                    <NavCard/>
                    <NavCard/>
                </div>

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

            </div>
        </div>
    )
}


function Sidebar(props: any) {
    const [clicked, setClicked] = React.useState(null); 

    return(
        <div className="spotify-sidebar">
            
        </div>
    )
}