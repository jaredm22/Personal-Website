import ContentView from "./ContentView";

export default function Main(props: any) {
    
    return (
        <div className="spotify-main">
            <div className="main-nav draggable">
                
            </div>
            <ContentView key={props.selectedPlaylist} {...props}/>
        </div>
    )
}