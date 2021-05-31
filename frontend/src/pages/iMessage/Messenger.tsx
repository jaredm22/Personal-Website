import Sidebar from './components/Sidebar';
import Transcript from './components/Transcript';
import { Rnd } from 'react-rnd';
import './messenger.scss';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface state {
    dataLoaded: boolean,
    selected: number,
    minimized: boolean,
    expanded: boolean,
    x: number, 
    y: number, 
    width: string,
    height: string,
    transcripts: object[],
}

export default function Messenger(props: any) {

    const [ state, setState ] = useState<state>({
        dataLoaded: false,
        selected: 0,
        minimized: props.minimized,
        expanded: true,
        x: 0, 
        y: 50, 
        width: "90%",
        height: "90%",
        transcripts: [],
    });

    useEffect(() => {
        axios.get("https://personal-website-backend-jmin.herokuapp.com/conversations/")
          .then(res => {
            setState((prevState: state) => {
                return { 
                    ...prevState,
                    dataLoaded: true,
                    transcripts: res.data, 
                };
            });
        })
    }, [])

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
            return { ...prevState, minimized: true };
        });
    }
  
    function handleExpand() {
        setState(prevState => {
            return { 
                ...prevState, 
                expanded: true, 
                width: "100%",
                height: "100%",
                x: 80,
                y: 0,
            };
        });
    }

    function handleClick() {
        props.onChildClick("iMessage");
    }

    console.log(state.minimized);
    
    return(
        state.dataLoaded ?
            <div onClick={handleClick}>
                <Rnd
                    className="messenger-container"
                    size={{ width: state.width,  height: state.height }}
                    position={{ x: state.x, y: state.y }}
                    onDragStop={(e, d) => {
                        setState( prevState => {    
                            return {
                                ...prevState,
                                x: d.x,
                                y: d.y,
                            }
                        })
                    }}
                    // onResizeStop={(e, direction, ref, delta, position) => {
                    //     setState( prevState => {
                    //         return {
                    //             ...prevState,
                    //             width: ref.style.width,
                    //             height: ref.style.height,
                    //             expanded: false, 
                    //             ...position,
                    //         }
                    //     })
                    // }}
                    enableResizing={false}
                    dragHandleClassName="draggable"
                    style={{display: (state.minimized ? "none" : "grid"), zIndex: (props.topApp ? 2 : 1)}}
                >
                    <Sidebar onChildClick={handleSelect} selectedIndex={state.selected} minimizeHandler={handleMinimize} expandHandler={handleExpand} transcripts={state.transcripts}/>
                    <Transcript key={`transcript${"-" + state.selected}`} selectedIndex={state.selected} selectedTranscript={state.transcripts[state.selected]}/>
                </Rnd> 
            </div>
        :
            <div className="messenger-container"></div>           
    )
}