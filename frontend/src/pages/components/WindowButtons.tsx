
export default function WindowButtons(props: any) {

    function handleClick() {
        props.minimizeHandler();
    }

    function handleExpand() {
        props.expandHandler();
    }

    return(
        <div className="button-container">
            <div className="button close" onClick={handleClick}></div>
            <div className="button minimize" onClick={handleClick}></div>
            <div className="button expand" onClick={handleExpand}></div>
        </div>
    )
}

