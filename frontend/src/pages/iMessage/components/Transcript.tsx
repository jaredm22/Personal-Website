import { useState } from 'react';
import Message from './Message';

export default function Transcript(props: any) {

    const [ state, setState ] = useState({
        input: "",
        userMessages: [],
        messages: props.selectedTranscript.messages,
    })

    function createMessage(b: boolean) {
        if (b) {   
            setState(prevState => {
                return {
                    ...prevState,
                    messages: [...prevState.userMessages, []]
                }
           }) 
        } 
    }

    const transcript = props.selectedTranscript;

    var messages = []
    for (var i = 0; i < transcript.numMessages; i++) {
        messages.push(<Message key={i} type={state.messages[i].sent ? "sent" : "received"} text={state.messages[i].message}/>)
        if (transcript.lastSentMessageIndex === i)  messages.push(<p className="delivered">Delivered</p>);
    }

    console.log(state);
    return(
        <div className="main">

            <div className="main-header draggable">
                
            </div>

            <div className="main-content">
                <div className="timestamp">
                    <h6>Yesterday</h6>
                    <p>8:35 PM</p>
                </div>
                {messages}
            </div>

            <div className="main-footer">
                <div className="main-left">

                </div>

                <input 
                    className="message-input" 
                    placeholder="iMessage" 
                    type="text" 
                    onChange={(e) => setState( prevState => {
                        return {
                            ...prevState,
                            input: e.target.value,
                        }
                    })} 
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') { createMessage(true) }
                    }}
                />

                {/* <button onSubmit={() => {this.setState()}}></button> */}

                <div className="main-right">

                </div>
                
            </div>

        </div>
    )
}