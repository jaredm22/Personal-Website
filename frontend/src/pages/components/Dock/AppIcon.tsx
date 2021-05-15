import headshot from '../../../images/Headshot.jpg';
import spotify from '../../../images/spotify-icons-logos/icons/01_RGB/02_PNG/Spotify_Icon_RGB_Green.png';

export default function AppIcon(props: any) {

    // function handleClick(event: any) {
    //     props.onChildClick(props.app);
    // }

    return(
        <div className="app-icon">
            <img height="40px" src={spotify}/>
        </div>
    )
}