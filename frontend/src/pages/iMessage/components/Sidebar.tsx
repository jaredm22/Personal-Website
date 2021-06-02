import Conversation from './Conversation';
// import { useState, useEffect} from 'react';
import WindowButtons from '../../components/WindowButtons';
import composeIcon from '../../../images/compose.svg';


export default function Sidebar(props: any) {
    var selected = props.selectedIndex;

    var conversations: any = [] 
    
    props.transcripts.forEach((c: any) => {           
        if (c.conversationId === 0) {
            conversations.push(
                <div className="pinned-container" key="pinned">
                    <Conversation 
                        key={`pinned-conversation-0`}
                        clicked={selected === 0}
                        conversationId={0}
                        type="pinned"
                        onChildClick={props.onChildClick}
                    />
                </div>
            )
        } else if (c.conversationId !== 1000) {
            conversations.push(
                <Conversation 
                    key={`conversation-${c.conversationId}`} 
                    name={c.name}
                    description={c.description}
                    initials={c.initials}
                    clicked={selected === c.conversationId}
                    conversationId={c.conversationId}
                    onChildClick={props.onChildClick}
                />)
            }
        }
    )

    if (props.createNew) {
        var newConvo = props.transcripts.find((x: any) => x.conversationId === 1000);
        console.log(newConvo)
        conversations.splice(1, 0,
            <Conversation 
                key={`conversation-${1000}`} 
                name={newConvo.name}
                description={newConvo.description}
                initials={newConvo.initials}
                clicked={selected === newConvo.conversationId}
                conversationId={newConvo.conversationId}
                onChildClick={props.onChildClick}
            />
        );
    }

    // console.log(conversations)
    
    return(
        <div className="sidebar">
            <div className="sidebar-header draggable">
                <div className="sidebar-header-top">
                    <WindowButtons minimizeHandler={props.minimizeHandler} expandHandler={props.expandHandler}/>
                    <button className="new-conversation-button" onClick={props.onCreateNew}>
                        <img src={composeIcon} alt="" height="15px" width="15px"/>
                    </button>
                </div>

                <div className="sidebar-header-bottom">
                    <input className="search-bar" placeholder="  Search"></input>
                </div>
            </div>  

            <div className="sidebar-content">
                {conversations}
            </div>
        </div>
    )
}