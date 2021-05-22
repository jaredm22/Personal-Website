import React, { useEffect, useState } from 'react';
import './bookshelf.scss';
import { Rnd } from 'react-rnd';
import axios from 'axios';

export default function Bookshelf(props: any) {

    const [ state, setState ] = useState({
        dataLoaded: false,
        minimized: false,
        x: 0, 
        y: 0, 
        width: "100%",
        height: "100%",
    });

    function handleMinimize() {
        setState(prevState => {
            return { ...prevState, minimized: true };
        });
    }

    function handleNavClick(navItem: string) {
        setState(prevState => {
            return { ...prevState, selectedNavItem: navItem };
        });
    }

    return(
        <Rnd
            className="bookshelf-container"
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
            <div className="bookshelf-sidebar">

            </div>

            <div className="bookshelf-main">
                
            </div>
        </Rnd>
    );
}