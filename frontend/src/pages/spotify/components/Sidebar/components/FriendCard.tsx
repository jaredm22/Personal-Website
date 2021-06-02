export default function FriendCard(props: any) {
    return(
        <div className="friend-card">
            <div className="friend-card-photo">
                <img className="image" src={props.imageUrl} alt=""/>
            </div>

            <div className="friend-card-content">
                
                <div className="content-top">
                    <h5>{props.name}</h5>
                    {/* <p>2 Hr</p> */}
                </div>
                    
                <h6>{props.song}</h6>
                <h6>{props.album}</h6>

                <div className="friend-card-timestamp">
                
                </div> 
            </div>
        </div>
    )
}