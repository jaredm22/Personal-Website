import Sidebar from './components/Sidebar/Sidebar';
import Transcript from './components/Transcript/Transcript';
import React, { useRef } from 'react';
import { Rnd } from 'react-rnd';
import './messenger.scss';


export default function Messenger(props: any) {
    const [ selected, setSelected ] = React.useState(100);
    const [ minimized, setMinimized ] = React.useState(false);
    const [ topLeftCoordinates, setTopLeftCoordinates ] = React.useState([0, 0]);
    const [ dragging, setDragging ] = React.useState(false);


    function handleChildClick(childData: any) {
        setSelected(childData);
    }

    function handleMinimize() {
        setMinimized(true);
    }
  

    console.log(selected);

    return(
        <Rnd
            className="messenger-container"
            default={{
                x: 0,
                y: 0,
                width: "100%",
                height: "93%",
            }}
            style={{display: (minimized ? "none" : "grid")}}
        >
                <Sidebar onChildClick={handleChildClick} selectedIndex={selected} minimizeHandler={handleMinimize}/>
                <Transcript key={`transcript${"-" + selected}`} selectedIndex={selected} />
        </Rnd>              
    )
}