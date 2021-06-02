export default function Message(props: any) {
    return(
        <div className={`message ${props.type} ${props.last ? "last" : ""}`}>
            {props.text}
        </div>
    );
}