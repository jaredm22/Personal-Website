
export default function WindowButtons(props: any) {

    function handleMinimize(e:any) {
        e.stopPropagation();
        props.minimizeHandler();
    }

    function handleExpand() {
        props.expandHandler();
    }


    return(
        <div className="button-container">
            <div className="button close" onClick={(e) => handleMinimize(e)}></div>
            <div className="button minimize" onClick={(e) => handleMinimize(e)}></div>
            <div className="button expand" onClick={handleExpand}></div>
        </div>
    )
}

