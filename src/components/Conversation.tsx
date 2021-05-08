import React from 'react';
import headshot from '../images/Headshot.jpg';

export default function Conversation(props: any) {
    return(
        props.type === "pinned" ?
            <div className="pinned" style={props.clicked ? {background: "rgb(54, 134, 237)"} : {background: "none"}}>
                <div className="pinned-photo">
                    <img className="image-pinned" src={headshot}/>
                </div>
                <div className="pinned-name">
                    <div className="name">Jared Min</div>
                </div>
            </div>
        :
            <div className="conversation" style={props.clicked ? {background: "rgb(10, 132, 255)"} : {background: "none"}}>
                <div className="image-container">
                    <img className="image" src={headshot}/>
                </div>
                <div className="conversation-content">
                    <div className="content-top">
                        <h5>Jared Min</h5>
                        <p>Yesterday</p>
                    </div>
                    <p>Oh he's just sitting there. That's a beeeeeeeeg yoshi.</p>
                </div>
            </div>
    )
    
}