import React, { Component, createRef } from 'react';


class Input extends Component {
    inputName = createRef();

    componentDidMound(){
        this.inputName.current.focus();
    }

    // setRef = (input) => {
    //     this.name = input;
    // }

    render(){
        return (
            <div>
                <h3>Name</h3>
                {/* <input type="text" ref={this.setRef}/> */}
                <input type="text" ref={this.inputName}/>
            </div>
        )
    }
}

export default Input;
