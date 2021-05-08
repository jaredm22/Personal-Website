import Sidebar from './components/Sidebar/Sidebar';
import Transcript from './components/Transcript/Transcript';
import React from 'react';


export default function Messenger(props: any) {
    const [ selected, setSelected ] = React.useState(100);

    function handleChildClick(childData: any) {
        setSelected(childData);
    }

    console.log(selected);

    return(
        <div className="container">
            <Sidebar onChildClick={handleChildClick} selectedIndex={selected}/>
            <Transcript/>
        </div>
    )
}