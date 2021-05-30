import { useState } from 'react';
import Message from './Message';

export default function Transcript(props: any) {

    const [ state, setState ] = useState({
        input: "",
        messages: props.selectedTranscript.messages,
    })

    function createMessage(b: any) {
        
    }

    const transcript = props.selectedTranscript;

    var messages = []
    for (var i = 0; i < transcript.numMessages; i++) {
        console.log(transcript.messages[i]);
        messages.push(<Message key={i} type={state.messages[i].sent ? "sent" : "received"} text={state.messages[i].message}/>)
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
                {transcript.lastSentMessageIndex !== -1 ? <p className="delivered">Delivered</p> : false }
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