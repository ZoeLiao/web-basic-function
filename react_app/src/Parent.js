import React, { Component, createRef } from 'react';
import Child from './Child';

class Parent extends Component {
    childRef = createRef();

    state = {
        count: 0,
        childCount: 0,
    }
    addCount = () =>{
        this.setState({
            count: this.state.count + 1,
        });
    }
    addChildCount = () => {
        //this.childRef.current.addCount();
        this.setState({
            childCount: this.state.childCount + 1.
        })
    };
    render(){
        return (
            <div>
                <h1>Parent: {this.state.count}</h1>
                <button onClick={this.addCount}>+ Parent</button>
                <button onClick={this.addChildCount}>+ Child</button>   
                {/* addParentCount : communicate with parent */}
                {/* <Child ref={this.childRef} addParentCount={this.addCount}/> */}
                <Child
                    count={this.state.childCount}
                    addParentCount={this.addCount}
                    addChildCount={this.addChildCount}
                />
            </div>
        )
    }
}

export default Parent;