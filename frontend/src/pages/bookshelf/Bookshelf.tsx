import { useState } from 'react';
import './bookshelf.scss';
// import Lightsaber from '../components/Lightsaber';
import { Rnd } from 'react-rnd';
import Card from './components/Card';

var gameIds: Array<string> = [
    '58175',
    '58134',
    
]

export default function Bookshelf(props: any) {

    const [ state, setState ] = useState({
        selectedTab: 0,
        width: "80%",
        height: "90%",
        x: 80,
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
        props.onChildClick("bookshelf");
    }
    
    return(
            <Rnd
                className="bookshelf-container"
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
            >
                <div className="bookshelf-main">
                    <Card id={"58175"}/>
                    <Card id={"marvels-spider-man"}/>   
                </div>
            </Rnd>
    );
}