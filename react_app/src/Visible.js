import React, { Component } from 'react';
import './style.css';

class Visible extends Component {
    state = {
        visible: true,
    }
    toggle = () => {
        this.setState({
            visible: !this.state.visible,
        });
    };
    render(){
        const { visible } = this.state;
        // const styleObj = { display: visible ? 'block' : 'none'};
        const cn = `${visible ? '': 'in'}visibleH1`
        return (
            <div>
                <button onClick={this.toggle}>Toggle</button>
                <hr />
                {/* {visible ? <h1>Visible!</h1> : null} */}
                {/* {visible && <h1>Visible!</h1>} */}
                {/* <h1 style={styleObj}>control visibility by style</h1> */}
                <h1 className={cn}>control visibility by className</h1>
            </div>
        )
    }
}

export default Visible;