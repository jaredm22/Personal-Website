import headshot from '../../../../../images/Headshot.jpg';

export default function FriendCard() {
    return(
        <div className="friend-card">
            <div className="friend-card-photo">
                <img className="image" src={headshot} alt=""/>
            </div>

            <div className="friend-card-content">
                
                <div className="content-top">
                    <h5>Jared Min</h5>
                    <h6>2 Hr</h6>
                </div>
                    
                <h6>No Role Modelz • J-Cole</h6>
                <h6>Summer Jams</h6>

                <div className="friend-card-timestamp">
                
                </div> 
            </div>
        </div>
    )
}