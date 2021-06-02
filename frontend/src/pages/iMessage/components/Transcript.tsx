import { useState } from 'react';
import { format } from 'date-fns';
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
        messages: props.selectedTranscript.messages || [],
        numMessages: props.selectedTranscript.numMessages || 0,
        lastSentMessageIndex: props.selectedTranscript.lastSentMessageIndex || -1,
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

    var messages = [];
    for (var i = 0; i < state.numMessages; i++) {
        messages.push(
            <Message 
                key={`${props.selectedTranscript.conversationId}-${i}`} 
                type={state.messages[i].sent ? "sent" : "received"} 
                text={state.messages[i].message} 
                last={ i !== state.numMessages - 1 ?
                    state.messages[i+1].sent !== state.messages[i].sent
                    : true
                }
        />)
        if (state.lastSentMessageIndex === i)  messages.push(<p className="delivered">Delivered</p>);
    }

    return(
        <div className="main">

            <div className="main-header draggable">
                <div className="contact">To: <span className="contact-name">{props.selectedTranscript.name}</span></div>
            </div>

            <div className="main-content">
                <div className="timestamp">
                    <h6>Today</h6>
                    <p>{format(new Date(),'h:mm a')}</p>
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