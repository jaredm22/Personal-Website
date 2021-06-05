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
        x: 130,
        y: 40,
        expanded: false, 
        minimized: props.minimized,
    });

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
            <Rnd
                className="safari-container"
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
                minHeight="500px"
                minWidth="1100px"
                dragHandleClassName="draggable"
                style={{display: (props.minimized ? "none" : "grid"), zIndex: (props.topApp ? 2 : 1)}}
                onClick={handleClick}
            >
                <Header
                    minimizeHandler={props.minimizeHandler}
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
    );
}