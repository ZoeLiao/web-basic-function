import React, { Component } from 'react';

class Message extends Component {
    state = {
        text: 'Hello',
    }
    changeWord = () => {
        this.setState({
            // partial state
            text: 'Happy New Year!',
        })
    }
    render() {
        return (
            <div>
                <h3>{ this.state.text }</h3>
                <button onClick ={ this.changeWord }> Change < /button>
            </div>
        );
    }
}

export default Message;
