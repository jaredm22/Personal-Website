import albumArt from '../../../../images/blond.jpeg';
import swimming from '../../../../images/2009.jpg';

export default function ContentView(props: any) {
    const examples = [];
    for (var i = 1; i < 31; i++) {
        examples.push(i);
    }
    return(
        <div className={`content-view${props.type === "album" ? "-album" : "-playlist"}`}>
            <div className="content-header">
                <img className="content-header-art" src={albumArt}/>
                <div className="content-header-info">
                    
                </div>
            </div>

            <div className="content-body">

                <div className="body-control-header">

                </div>

                <div className="content-body-list">
                    <div className="list-header">
                        <p className="item-number">#</p>
                        <div className="title">Title</div>
                        <p className="album-name">Album</p>
                        <p className="added-by">Added by</p>
                        <p className="time">Time</p>
                    </div>

                    {examples.map((x) => 
                        x % 2 === 0 ?
                        <div className="list-item">
                            <p className="item-number">{x}</p>
                            <div className="title">
                                <img className="album-art" src={albumArt}/>
                                <div className="title-info">
                                    <h5>Blond</h5>
                                    <h6>Frank Ocean</h6>
                                </div>
                            </div>
                            <h6 className="album-name">Blond</h6>
                            <h6 className="added-by">Jared Min</h6>
                            <h6 className="time">3:00</h6>
                        </div>
                        
                        :

                        <div className="list-item">
                            <p className="item-number">{x}</p>
                            <div className="title">
                                <img className="album-art" src={swimming}/>
                                <div className="title-info">
                                    <h5>2009</h5>
                                    <h6>Mac Miller</h6>
                                </div>
                            </div>
                            <h6 className="album-name">Swimming</h6>
                            <h6 className="added-by">Jared Min</h6>
                            <h6 className="time">3:00</h6>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}