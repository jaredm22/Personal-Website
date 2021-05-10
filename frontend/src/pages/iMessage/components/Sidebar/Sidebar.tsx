import Conversation from '../Conversation/Conversation';
import './sidebar.scss';
import headshot from '../images/Headshot.jpg';
import React from 'react';
import WindowButtons from '../../../components/WindowButtons.tsx/WindowButtons';


export default function Sidebar(props: any) {
    var selected = props.selectedIndex;

    const examples = [];
    for (var i = 0; i < 20; i++) {
        examples.push(i);
    }

    return(
        <div className="sidebar">
            <div className="sidebar-header">
                <div className="sidebar-header-top">
                    <WindowButtons/>
                </div>

                <div className="sidebar-header-bottom">
                    <input className="search-bar" placeholder="  Search"></input>
                </div>
            </div>  

            <div className="sidebar-content">
                <div className="pinned-container">
                    <Conversation 
                        key={`pinned-conversation-${100}`}
                        clicked={selected === 100}
                        conversationId={100}
                        type="pinned"
                        onChildClick={props.onChildClick}
                    />
                </div>
                    {examples.map((i) => {
                        return (
                            <Conversation 
                                key={`conversation-${i}`} 
                                clicked={selected === i}
                                conversationId={i}
                                onChildClick={props.onChildClick}
                            />)
                        }
                    )}
            </div>
        </div>
    )
}