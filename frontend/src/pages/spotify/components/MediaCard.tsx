import swimming from '../../../images/2009.jpg';

export default function MediaCard(props: any) {
    return(
        <div className="media-card">
            <div className="media-card-top">
                <img className="media-card-image" alt="" src={swimming}/>
            </div>
            <div className="media-card-bottom">
                <h3>{props.mediaName}</h3>
                <h6>By {props.artistName}</h6>
            </div>
        </div>
    )
}