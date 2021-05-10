
export default function WindowButtons(props: any) {
    console.log(props);

    function handleClick(event: any) {
        props.minimizeHandler(); // pass any argument to the callback
    }

    return(
        <div className="button-container">
            <div className="button close"></div>
            <div className="button minimize" onClick={handleClick}></div>
            <div className="button expand"></div>
        </div>
    )
}

