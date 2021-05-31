// import React from 'react';
import headshot from '../../../images/Headshot.jpg';

export default function Conversation(props: any) {

    function handleClick(event: any) {
        props.onChildClick(props.conversationId); // pass any argument to the callback
    }

    return(
        props.type === "pinned" ?
            <div className={`pinned ${props.clicked ? "clicked" : "" }`} 
                onClick= {handleClick}
            >
                <div className="pinned-photo">
                    <img className="image-pinned" src={headshot} alt=""/>
                </div>
                <div className="pinned-name">
                    <div className="name">Jared Min</div>
                </div>
            </div>
        :
            <div 
                className={`conversation ${props.clicked ? "clicked" : "" }`}
                onClick={handleClick} 
            >
                <div className="image-container">
                    <div className="contact-photo">
                        <h3>{props.initials}</h3>
                    </div>
                </div>
                <div 
                    className={`conversation-content ${props.clicked ? "clicked" : ""}`}
                >
                    <div className="content-top">
                        <h5>{props.name}</h5>
                        <p>Yesterday</p>
                    </div>
                    <p>{props.description}</p>
                </div>
            </div>
    )
    
}