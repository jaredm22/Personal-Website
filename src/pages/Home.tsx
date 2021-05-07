import Sidebar from '../components/Sidebar';
import Main from '../components/Main';
import React from 'react';


export default function Home(props: any) {
    const [ selected, setSelected ] = React.useState(null);

    function handleChildClick(childData: any) {
        setSelected(childData);
    }

    console.log(selected);

    return(
        <div className="container">
            <Sidebar onChildClick={handleChildClick} selectedIndex={selected}/>
            <Main/>
        </div>
    )
}