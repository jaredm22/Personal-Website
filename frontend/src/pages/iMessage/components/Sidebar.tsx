import Conversation from './Conversation';
// import { useState, useEffect} from 'react';
import WindowButtons from '../../components/WindowButtons';


export default function Sidebar(props: any) {
    var selected = props.selectedIndex;
    // const [ coordinates, setCoordinates ] = useState([0,0]);
    // const [ mouseDown, setMouseDown ] = useState(false);

    const examples = [];
    for (var i = 1; i < 15; i++) {
        examples.push(i);
    }

    return(
        <div className="sidebar">
            <div className="sidebar-header draggable">
                <div className="sidebar-header-top">
                    <WindowButtons minimizeHandler={props.minimizeHandler} expandHandler={props.expandHandler}/>
                </div>

                <div className="sidebar-header-bottom">
                    <input className="search-bar" placeholder="  Search"></input>
                </div>
            </div>  

            <div className="sidebar-content">
                <div className="pinned-container">
                    <Conversation 
                        key={`pinned-conversation-${0}`}
                        clicked={selected === 0}
                        conversationId={0}
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