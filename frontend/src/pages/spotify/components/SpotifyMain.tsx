import ContentView from "./Content/ContentView";

export default function Main(props: any) {
    

    return (
        <div className="spotify-main">
            <div className="main-nav">

            </div>
            <ContentView {...props}/>
        </div>
    )
}