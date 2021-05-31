import AppIcon from "./AppIcon";

export default function Dock(props: any) {

    return(
        <div className="dock-container">
            <div className="dock">
                <AppIcon app={"spotify"} onChildClick={props.onChildClick}/>
                <AppIcon app={"iMessage"} onChildClick={props.onChildClick}/>
                <AppIcon app={"safari"} onChildClick={props.onChildClick}/>
            </div>
        </div>
        
    );
}