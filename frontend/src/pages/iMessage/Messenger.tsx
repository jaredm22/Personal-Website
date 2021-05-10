import Sidebar from './components/Sidebar/Sidebar';
import Transcript from './components/Transcript/Transcript';
import React from 'react';
import './messenger.scss';


export default function Messenger(props: any) {
    const [ selected, setSelected ] = React.useState(100);
    const [ topLeftCoordinates, setTopLeftCoordinates ] = React.useState([0, 0]);
    const [ dragging, setDragging ] = React.useState(false);


    function handleChildClick(childData: any) {
        setSelected(childData);
    }

    console.log(selected);

    return(
        <div className="container" style={{top: topLeftCoordinates[0], left: topLeftCoordinates[1]}}>
            <Sidebar onChildClick={handleChildClick} selectedIndex={selected}/>
            <Transcript key={`transcript${"-" + selected}`} selectedIndex={selected} />
        </div>
    )
}