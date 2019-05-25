import React, { Component } from 'react';

class TwoWayBinding extends Component {
    state = {
        text: 'abc',
        count: 0,
    }
    changeText = (e) => {
        this.setState({
            text: e.target.value,
        });
    };
    changeCount = (e) => {
        this.setState({
            count: parseInt(e.target.value, 10),
        });
    };
    render(){
        const { text, count } = this.state;
        return (
            <div>
                <input
                    type="text"
                    value={text}
                    onChange={this.changeText}
                />
                <h1>{text}</h1>
                <input
                    type="number"
                    value={count}
                    onChange={this.changeCount}
                />
                <h1>{count}</h1>
            </div>
        );
    }
}

export default TwoWayBinding
