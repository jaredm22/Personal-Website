import WindowButtons from "../../components/WindowButtons"

export default function Header(props: any) {
    return(
        <div className="safari-header draggable">
            <div className="safari-header-top">
                <WindowButtons minimizeHandler={props.minimizeHandler} expandHandler={props.expandHandler}/>
                <input className="input" type="text"/>
            </div>
           
            <div className="tabs">
                
            </div>
        </div>
    )
}