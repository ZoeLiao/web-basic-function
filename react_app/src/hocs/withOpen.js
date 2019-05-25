import React, { Component } from 'react';


//heigher order components
const withOpen = (WrappedComponent)=>{
    return class extends Component{
        state = {
            open: false,
        }
        toggle = () => {
            this.setState({
                open: !this.state.open,
            });
        }
        render(){
            return <WrappedComponent
            open={this.state.open
            toggleOpen={this.open}
            {...this.props}
            />
        }
    }
}

export default withOpen;
