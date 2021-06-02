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
                <div className="album">
                    <svg width="20" height="20" version="1.1" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="10" cy="10" r="5" stroke="rgb(179, 179, 179)" fill="transparent" strokeWidth="1"/>
                        <circle cx="10" cy="10" r="2" stroke="rgb(179, 179, 179)" fill="transparent" strokeWidth="1"/>
                    </svg>
                    <h6>{props.album}</h6>
                </div>                
            </div>
        </div>
    )
}