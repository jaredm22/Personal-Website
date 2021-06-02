import Conversation from './Conversation';
// import { useState, useEffect} from 'react';
import WindowButtons from '../../components/WindowButtons';


export default function Sidebar(props: any) {
    var selected = props.selectedIndex;

    var conversations: any = props.transcripts.map((c: any, i: number) => {           
        if (i === 0) {
            return(
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
        } else {
            return (
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
    console.log(conversations)
    
    if (selected === 1000) {
        conversations.splice(1, 0,
            <Conversation 
                    key={`conversation-${1000}`} 
                    name={"New Message"}
                    description={""}
                    initials={""}
                    clicked={true}
                    conversationId={1000}
                    onChildClick={props.onChildClick}
            />
        );
    }

    return(
        <div className="sidebar">
            <div className="sidebar-header draggable">
                <div className="sidebar-header-top">
                    <WindowButtons minimizeHandler={props.minimizeHandler} expandHandler={props.expandHandler}/>
                    {/* <input className="new-conversation-button" type="button" src="https://developer.apple.com/design/human-interface-guidelines/ios/images/icons/navigation_bar_toobar_icons/Navigation_Compose.png" onClick={props.onCreateNew}/> */}
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