import Conversation from './Conversation';
import './sidebar.scss';
import headshot from '../images/Headshot.jpg';
import React from 'react';


export default function Sidebar(props: any) {
    var [ clicked, setClick ] = React.useState(true);

    const examples = [];
    for (var i = 0; i < 20; i++) {
        examples.push(i);
    }

    return(
        <div className="sidebar">
            <div className="sidebar-header">
                <div className="sidebar-header-top">
                    <div className="button-container">
                        <div className="button close"></div>
                        <div className="button minimize"></div>
                        <div className="button expand"></div>
                    </div>
                </div>

                <div className="sidebar-header-bottom">
                    <input className="search-bar" placeholder="  Search"></input>
                </div>
            </div>
            
            <div className="sidebar-content">
                <div className="pinned-container">
                    <div className="pinned" onClick={() => setClick(!clicked)} style={clicked ? {background: "rgb(54, 134, 237)"} : {background: "none"}}>
                        <div className="pinned-photo">
                            <img className="image-pinned" src={headshot}/>
                        </div>
                        <div className="pinned-name">
                            <div className="name">Jared Min</div>
                        </div>
                    </div>
                </div>
                {examples.map(() => {
                    return (<Conversation key={`conversation-${i}`}/>)
                })}
            </div>
        </div>
    )
}