
export default function Tab(props: any) {

    function handleClick() {
        props.childClick(props.id);
    }

    return(
        <button className="tab" onClick={handleClick}>
            {props.siteName}
        </button>
    )
}