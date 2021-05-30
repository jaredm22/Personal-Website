// import headshot from '../../../images/Headshot.jpg';
import spotify from '../../../images/spotify-icons-logos/icons/01_RGB/02_PNG/Spotify_Icon_RGB_Green.png';
import iMessage from '../../../images/imessage.png';

export default function AppIcon(props: any) {
    
    var icon = "";
    if (props.app === "iMessage") {
        icon = iMessage;
    } else if (props.app === "spotify") {
        icon = spotify;
    }

    return(
        <div className="app-icon">
            <img height="40px" src={icon} alt=""/>
        </div>
    )
}