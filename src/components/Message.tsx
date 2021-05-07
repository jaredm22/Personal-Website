

export default function Message(props: any) {
    return(
        <div className={`message ${props.type}`}>
            {props.text}
        </div>
    );
}