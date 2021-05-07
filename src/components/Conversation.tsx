import React from 'react';
import headshot from '../images/Headshot.jpg';

export default function Conversation(props: any) {
    var [ clicked, setClick ] = React.useState(false);

    return( 
        <div className="conversation" onClick={() => setClick(!clicked)} style={clicked ? {background: "rgb(10, 132, 255)"} : {background: "none"}}>
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