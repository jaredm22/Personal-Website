import WindowButtons from "../../components/WindowButtons"

export default function Header(props: any) {
    return(
        <div className="safari-header draggable">
            <div className="safari-header-top">
                <WindowButtons minimizeHandler={props.minimizeHandler} expandHandler={props.expandHandler}/>
                <div className="safari-input">www.team-mejia.com</div>
                <div className="safari-header-top-right">

                </div>
            </div>
           
            <div className="tabs">
                
            </div>
        </div>
    )
}