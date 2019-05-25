import React, { Component } from 'react';


class Child extends Component {
    // state = {
    //     count: 0,
    // }
    // addCount = () =>{
    //     this.setState({
    //         count: this.state.count + 1,
    //     });
    // }
    render(){
        const {count, addParentCount, addChildCount} = this.props;
        return (
            <div>
                {/* <h1>Child: {this.state.count}</h1>
                <buttone onClick={this.addCount}>+ Child</button>
                {/* use the function sent by parents */}
                {/* <buttone onClick={this.props.addParentCount}>+ Parent</button> */}

                <h1>Child: {count}</h1>
                <button onClick={addChildCount}>+ Child</button>
                <button onClick={addParentCount}>+ Parent</button>
            </div>
        )
    }
}

export default Child;