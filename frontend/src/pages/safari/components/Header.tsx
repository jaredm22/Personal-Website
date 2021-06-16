import WindowButtons from "../../components/WindowButtons";
import Tab from "./Tab";

export default function Header(props: any) {
    return(
        <div className="safari-header draggable">
            <div className="safari-header-top">
                <WindowButtons minimizeHandler={props.minimizeHandler} expandHandler={props.expandHandler}/>
                <div className="safari-input">
                    <a href={"https://cadretest.herokuapp.com"}>{props.siteUrl}</a>
                </div>
                <div className="safari-header-top-right">

                </div>
            </div>
           
            <div className="tabs">
                <Tab id={0} childClick={props.childClick} url={"https://cadretest.herokuapp.com"} siteName={"Cadre"}/>
                {/* <Tab id={1} childClick={props.childClick} url={"https://cadretest.herokuapp.com"} siteName={"Mutual Aid site"}/> */}
            </div>
        </div>
    )
}