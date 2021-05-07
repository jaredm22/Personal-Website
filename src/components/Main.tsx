// import './main.css';
import React from 'react';
import Message from './Message';

const text = ["Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", "This is a sample text", "Here is another sample text that is a little bit longer than the other sample text", "sample!"]
const type = ["received", "sent"]

interface IProp {}

interface IState {
    messages: any,
    input: string
}

export default class Main extends React.Component<IProp, IState>{
    constructor(props: any) {
        super(props);

        this.state = {
            messages: [],
            input: "",
        }

        this.createMessage = this.createMessage.bind(this);
    }


    componentDidMount() {
        const examples = []
        for (var i = 0; i < 40; i++) {
            let v = [i, text[Math.floor(Math.random()*text.length)], type[Math.floor(Math.random()*type.length)]]
            examples.push(v);
        }
        this.setState({
            messages: examples
        })
    }

    createMessage(b: any) {
        if (b) {
            this.setState(prevState => ({
                messages: [...prevState.messages, [69, this.state.input, "sent"]],
                input: "",
            }))
        }
    }

    render(){
        return(
            <div className="main">
                <div className="main-header">
                    
                </div>
                <div className="main-content" id="m">
                    <div className="timestamp">
                        <h6>Yesterday</h6>
                        <p>8:35 PM</p>
                    </div>
                    {this.state.messages.map((e: any) => {
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
                        onChange={(e) => {this.setState({input: e.target.value})}} 
                        onKeyDown={(e) => {e.key === 'Enter' ? this.createMessage(true) : this.createMessage(false) }}
                    />
                    {/* <button onSubmit={() => {this.setState()}}></button> */}
                    <div className="main-right"></div>
                </div>
            </div>
        )
    }
}