import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count: 0,
    }

    addCount = () => {
        // setState is not sync
        this.setState((state) => (
            {
                count: state.count + 1,
            }
        ),()=> {
            this.sendCount()
        })
    }

    sendCount = () => {
        //fetch('/api/count?value=${this.state.cuont}')
        console.log('sendCount')
    };

    render() {
        return ( 
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.addCount}>+1</button>
            </div>    
        )
    }
}

export default Counter