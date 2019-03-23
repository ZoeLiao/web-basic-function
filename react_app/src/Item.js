import React, { Component } from 'react';

class Item extends Component {
    render() {
        return (
            <li> { this.props.text } { this.props.price + 1 } </li>
            //<li> { this.props.children } </li>
        )
    }
}

export default Item;
