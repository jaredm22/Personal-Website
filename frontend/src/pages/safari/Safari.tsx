import { useState } from 'react';
import './safari.scss';
import Header from './components/Header';
import Lightsaber from '../components/Lightsaber';
import { Rnd } from 'react-rnd';



export default function Safari(props: any) {

    const [ state, setState ] = useState({
        selectedTab: 0,
        width: "100%",
        height: "100%",
        x: 0,
        y: 0,
        expanded: false, 
        minimized: false,
    });

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
                x: 0,
                y: 0,
            };
        });
    }

    // function handleTabClick(tab: string) {
    //     setState(prevState => {
    //         return { 
    //             ...prevState, 
    //             selectedTab: 0
    //         };
    //     });
    // }

    function handleClick() {
        props.onChildClick("safari");
    }

    console.log(state);
    
    return(
        <div onClick={handleClick} style={{height: "100%", width: "100%"}}>
            <Rnd
                className="safari-container"
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
                minHeight="500px"
                minWidth="500px"
                dragHandleClassName="draggable"
                style={{display: (state.minimized ? "none" : "grid"), zIndex: (props.topApp ? 2 : 1)}}
            >
                <Header
                    minimizeHandler={handleMinimize}
                    expandHandler={handleExpand}
                />
                <div className="safari-main">
                    
                    <Lightsaber color="red"/>
                    <Lightsaber color="orange"/>
                    <Lightsaber color="yellow"/>
                    <Lightsaber color="green"/> 
                    <Lightsaber color="blue"/>
                    <Lightsaber color="purple"/>    
                    <Lightsaber color="black"/>                                  
                </div>

            </Rnd>
        </div>
    );
}