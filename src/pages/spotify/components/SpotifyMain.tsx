export default function Main(props: any) {
    const examples = [];
    for (var i = 0; i < 60; i++) {
        examples.push(i);
    }

    return (
        <div className="spotify-main">
            <div className="main-nav">

            </div>
            <div className="main-content">
                {examples.map((x) => 
                    <p>This is an example</p>
                )}
            </div>
        </div>
    )
}