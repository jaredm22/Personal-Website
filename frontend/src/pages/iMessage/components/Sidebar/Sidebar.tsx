import Conversation from '../Conversation/Conversation';
import './sidebar.scss';
import { useState, useEffect} from 'react';
import WindowButtons from '../../../components/WindowButtons.tsx/WindowButtons';


export default function Sidebar(props: any) {
    var selected = props.selectedIndex;
    const [ coordinates, setCoordinates ] = useState([0,0]);
    const [ mouseDown, setMouseDown ] = useState(false);

    const examples = [];
    for (var i = 0; i < 20; i++) {
        examples.push(i);
    }

    function handleDrag(e: any) {
        console.log(e);
    }

    useEffect(() => {
        const handleMouseUp = () => setMouseDown(false);

        window.addEventListener('mouseup', handleMouseUp);

        return () => {
            window.addEventListener('mouseup', handleMouseUp);
        };
    }, []);

    useEffect(() => {
        const handleMouseMove = (e: any) => console.log(e);

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, [mouseDown, handleDrag]);

    const handleMouseDown = () => setMouseDown(true);

    console.log(coordinates);


    return(
        <div className="sidebar" onMouseDown={handleMouseDown}>
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