// import { Rnd } from "react-rnd";

export default function Lightsaber(props: {color: String}) {

    

    return(
        <div
            className="lightsaber"
        >
            <div className={`lightsaber-beam ${props.color}`}></div>
            <div className="lightsaber-hilt">
                <div className="hilt-top"></div>
                <div className="hilt-bottom">
                    <div className="col"></div>
                    <div className="col"></div>
                    <div className="col"></div>
                </div>
            </div>
        </div>
    )
}