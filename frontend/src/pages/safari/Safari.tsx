import { useState } from 'react';
import './safari.scss';
import Header from './components/Header';
import Lightsaber from '../components/Lightsaber';
import { Rnd } from 'react-rnd';



export default function Safari(props: any) {

    const [ state, setState ] = useState({
        selectedTab: 0,
        width: "80%",
        height: "90%",
        x: 0,
        y: 40,
        expanded: false, 
        minimized: false,
    });

    function handleMinimize() {
        setState({...state, minimized: true });
    }

    function handleExpand() {
        setState({
            ...state, 
            expanded: true, 
            width: "100%",
            height: "100%",
            x: 0,
            y: 0,
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
    
    return(
        <div onClick={handleClick} style={{height: state.height, width: state.width}}>
            <Rnd
                className="safari-container"
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
                    <div style={{width: "200px", }}>
                        <h2>Thanks for stopping by! As you can see, this website is still a work in progress.</h2>
                        <br></br>
                        <h2>For now, please enjoy these css/html lightsabers I made.</h2>
                    </div>
                    <Lightsaber color="red"/>
                    <Lightsaber color="orange"/>
                    <Lightsaber color="yellow"/>
                    <Lightsaber color="green"/> 
                    <Lightsaber color="blue"/>
                    <Lightsaber color="purple"/>    
                    <Lightsaber color="black"/>
                    <h1>May the force be with you.</h1>             
                </div>

            </Rnd>
        </div>
    );
}