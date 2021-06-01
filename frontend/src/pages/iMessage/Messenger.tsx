import Sidebar from './components/Sidebar';
import Transcript from './components/Transcript';
import { Rnd } from 'react-rnd';
import './messenger.scss';
import { useState, useEffect } from 'react';
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
        x: 90, 
        y: 60, 
        width: `80%`,
        height: '90%',
        transcripts: [],
    });

    useEffect(() => {
        if (!state.dataLoaded) {
            console.log("hapens")
            axios.get(`https://personal-website-backend-jmin.herokuapp.com/conversations/`)
            .then(res => {
              setState({
                      ...state, 
                      dataLoaded: true,
                      transcripts: res.data, 
                  
              });
          })
        }
    }, [state])

    function handleSelect(selectedId: any) {
        setState({ ...state, selected: selectedId });
    }
    
    function handleMinimize() {
        setState({...state, minimized: true });
    }
  
    function handleExpand() {
        setState({
            ...state,
            expanded: true, 
            width: '100%',
            height: '100%',
            x:0,
            y:0,
        });
    }

    function handleClick() {
        props.onChildClick("iMessage");
    }
    
    return(
        state.dataLoaded ?
            <div onClick={handleClick}>
                <Rnd
                    className="messenger-container"
                    size={{ width: state.width,  height: state.height }}
                    position={{ x: state.x, y: state.y }}
                    onDragStop={(e, d) => {
                        setState({
                            ...state,
                            x: d.x, 
                            y: d.y,
                        })
                    }}
                    onResizeStop={(e, direction, ref, delta, position) => {
                        setState({
                            ...state,
                            width: ref.style.width,
                            height: ref.style.height,
                            expanded: false, 
                            ...position,
                        })
                    }}
                    enableResizing={false}
                    dragHandleClassName="draggable"
                    style={{display: (state.minimized ? "none" : "grid"), zIndex: (props.topApp ? 2 : 1), height: state.height }}
                >
                    <Sidebar onChildClick={handleSelect} selectedIndex={state.selected} minimizeHandler={handleMinimize} expandHandler={handleExpand} transcripts={state.transcripts}/>
                    <Transcript key={`transcript${"-" + state.selected}`} selectedIndex={state.selected} selectedTranscript={state.transcripts[state.selected]}/>
                </Rnd>
            </div>
        :
            <div className="messenger-container"></div>           
    )
}