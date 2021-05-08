import React from 'react';
import headshot from '../../../../images/Headshot.jpg';

export default function Conversation(props: any) {

    function handleClick(event: any) {
        props.onChildClick(props.conversationId); // pass any argument to the callback
    }

    return(
        props.type === "pinned" ?
            <div className={`pinned ${props.clicked ? "clicked": ""}`} onClick={handleClick}>
                <div className="pinned-photo">
                    <img className="image-pinned" src={headshot}/>
                </div>
                <div className="pinned-name">
                    <div className="name">Jared Min</div>
                </div>
            </div>
        :
            <div className={`conversation ${props.clicked ? "clicked": ""}`} onClick={handleClick}>
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