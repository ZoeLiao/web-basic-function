import React, { Component } from 'react';

class Message extends Component {
    // Define the state
    state = {
        title: 'Change the title by the function which is binded to the component',
        text: 'Change the text by the function of the component',
    }

    constructor(props) {
        super(props);

        this.changeTitle = this.changeTitle.bind(this);
    }

    changeTitle() {
        this.setState({
            // partial state
            title: "Before it is binded to the component, the scope of 'this' is the button, instead of the component.",
        })
    }
    changeWord = () => {
        this.setState({
            // partial state
            text: "By default, the scope of 'this' is the component.",
        })
    }

    render() {
        return (
            <div>
                <h3> { this.state.title } </h3>
                <button onClick = { this.changeTitle }> Change Title </button>
                <h3> { this.state.text } </h3>
                <button onClick = { this.changeWord }> Change Word </button>
            </div>
        );
    }
}

export default Message;
