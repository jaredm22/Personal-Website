import Sidebar from './components/Sidebar/Sidebar';
import Transcript from './components/Transcript/Transcript';
import { Rnd } from 'react-rnd';
import './messenger.scss';
import React, { useState } from 'react';


export default function Messenger(props: any) {

    const [ state, setState ] = useState({
        selected: 100,
        minimized: false,
        expanded: true,
        x: 0, 
        y: 0, 
        width: "100%",
        height: "100%",
    });

    function handleSelect(selectedId: any) {
        setState(prevState => {
            return {
                ...prevState,
                selected: selectedId,
            }
        });
    }

    function handleMinimize() {
        setState(prevState => {
            return { 
                ...prevState, 
                minimized: true, 
            };
        });
    }
  
    function handleExpand() {
        setState(prevState => {
            return { 
                ...prevState, 
                expanded: true, 
                width: "100%",
                height: "100%",
                x: 0,
                y: 0,
            };
        });
    }

    console.log(state.selected);

    return(
        <Rnd
            className="messenger-container"
            size={{ width: state.width,  height: state.height }}
            position={{ x: state.x, y: state.y }}
            onDragStop={(e, d) => {
                console.log(d);
                setState( prevState => {
                    return {
                        ...prevState,
                        x: d.x,
                        y: d.y,
                    }
                })
            }}
            onResizeStop={(e, direction, ref, delta, position) => {
                setState( prevState => {
                    return {
                        ...prevState,
                        width: ref.style.width,
                        height: ref.style.height,
                        expanded: false, 
                        ...position,
                    }
                })
            }}
            style={{display: (state.minimized ? "none" : "grid")}}
        >
                <Sidebar onChildClick={handleSelect} selectedIndex={state.selected} minimizeHandler={handleMinimize} expandHandler={handleExpand}/>
                <Transcript key={`transcript${"-" + state.selected}`} selectedIndex={state.selected} />
        </Rnd>              
    )
}