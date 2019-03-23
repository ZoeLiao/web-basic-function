import React, { Component } from 'react';
import Item from './Item';

class List extends Component {
    render() {
        return (
        <ol>
            <Item text = "First Item" price = { 100 }/>
            <Item> Sencond </Item>
        </ol>
        )
    }
}

export default List;
