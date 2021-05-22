import { useState } from 'react';
import Message from '../Message/Message';

const text = ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", "This is a sample text", "Here is another sample text that is a little bit longer than the other sample text", "sample!"]
const type = ["received", "sent"]

export default function Transcript(props: any) {
    var examples: (string | number)[][] = [];
    for (var i = 0; i < 40; i++) {
        let v = [i, text[Math.floor(Math.random()*text.length)], type[Math.floor(Math.random()*type.length)]]
        examples.push(v);
    } 

    const [ messages, setMessages ] = useState<any[]>(examples);
    const [ input, setInput ] = useState("");

    function createMessage(b: any) {
        if (b) {
            setMessages(prevState => [...prevState, [100, input, "sent"]]);
            setInput("");
        }
    }

    // console.log(messages);
    console.log(input);
    return(
        <div className="main">
            <div className="main-header">
                
            </div>
            <div className="main-content">
                <div className="timestamp">
                    <h6>Yesterday</h6>
                    <p>8:35 PM</p>
                </div>
                {messages.map((e: any) => {
                    return(<Message key={e[0]} type={e[2]} text={e[1]}/>);
                })}
                <p className="delivered">Delivered</p>
            </div>
            <div className="main-footer">
                <div className="main-left"></div>
                <input 
                    className="message-input" 
                    placeholder="iMessage" 
                    type="text" 
                    onChange={(e) => setInput(e.target.value)} 
                    onKeyDown={(e) => {e.key === 'Enter' ? createMessage(true) : createMessage(false) }}
                />
                {/* <button onSubmit={() => {this.setState()}}></button> */}
                <div className="main-right"></div>
            </div>
        </div>
    )
}