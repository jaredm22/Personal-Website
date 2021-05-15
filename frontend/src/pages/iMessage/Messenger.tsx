import Sidebar from './components/Sidebar/Sidebar';
import Transcript from './components/Transcript/Transcript';
import React from 'react';
import { Rnd } from 'react-rnd';
import './messenger.scss';
import useState from 'react';


export default function Messenger(props: any) {

    const [ state, setState ] = React.useState({
        selected: 100,
        minimized: false,
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
                        ...position,
                    }
                })
            }}
            style={{display: (state.minimized ? "none" : "grid")}}
        >
                <Sidebar onChildClick={handleSelect} selectedIndex={state.selected} minimizeHandler={handleMinimize}/>
                <Transcript key={`transcript${"-" + state.selected}`} selectedIndex={state.selected} />
        </Rnd>              
    )
}