import { useState } from 'react';
import Message from './Message';

interface MyState {
    input: string, 
    userMessages: Array<Object>,
    messages: Array<{sent: boolean, message: string}>,
    numMessages: number,
    lastSentMessageIndex: number,
}

export default function Transcript(props: any) {

    const [ state, setState ] = useState <MyState> ({
        input: "",
        userMessages: [],
        messages: props.selectedTranscript.messages,
        numMessages: props.selectedTranscript.numMessages,
        lastSentMessageIndex: props.selectedTranscript.lastSentMessageIndex,
    })

    function createMessage() {
        setState({
            ...state,
            input: "",
            messages: [...state.messages, {
                sent: true,
                message: state.input,
            }],
            numMessages: state.numMessages+1,
            lastSentMessageIndex: state.messages.length,
        }) 
    }

    var messages = []
    for (var i = 0; i < state.numMessages; i++) {
        messages.push(<Message key={`${props.selectedTranscript.conversationId}-${i}`} type={state.messages[i].sent ? "sent" : "received"} text={state.messages[i].message}/>)
        if (state.lastSentMessageIndex === i)  messages.push(<p className="delivered">Delivered</p>);
    }

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
                    value={state.input}
                    onChange={(e) => setState({...state, input: e.target.value})} 
                    onKeyDown={(e) => { if (e.key === 'Enter') createMessage() }}
                />

                {/* <button onSubmit={() => {this.setState()}}></button> */}

                <div className="main-right">

                </div>
                
            </div>

        </div>
    )
}