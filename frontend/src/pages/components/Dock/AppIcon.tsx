// import headshot from '../../../images/Headshot.jpg';
import spotify from '../../../images/spotify-icons-logos/icons/01_RGB/02_PNG/Spotify_Icon_RGB_Green.png';
import iMessage from '../../../images/imessage.png';
import Safari from '../../../images/safari.png';

export default function AppIcon(props: any) {
    
    var icon = spotify;
    if (props.app === "iMessage") {
        icon = iMessage;
    } else if (props.app === "spotify") {
        icon = spotify;
    } else if (props.app === "safari") {
        icon = Safari;
    }

    function handleClick() {
        console.log(props.app)
        props.onChildClick(props.app);
    }

    return(
        <div className="app-icon" onClick={handleClick}>
            <img height="40px" src={icon} alt=""/>
        </div>
    )
}