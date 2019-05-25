import React, { Component, PureComponent } from 'react';
import './style.css'

// Class Component
// class ProgressBar extends Component {
//     render(){
//         const { value } = this.props;
//         return (
//             <div className="bar-outer">
//                 <div 
//                     className="bar-inner"
//                     style={{ width: `${value}%` }}
//                 />
//                 <span>{value}%</span>
//             </div>
//         )
//     }
// }


// (Stateless) Function Component: no state, self-defined function
const ProgressBar = (props)  => {
    //const { value } = props;
    const value = 30;
    return (
        <div className="bar-outer">
            <div className="bar-inner" style={{ width: `${value}%`}}>
                <span>{value}%</span>
            </div>
        </div>
    )
}

// PureComponent
// class ProgressBar extends PureComponent {
//     // if the props's value and state (shallow compare )do not change, it will not render angin
//     render(){
//         const { value } = this.props;
//         return (
//             <div className="bar-outer">
//                 <div 
//                     className="bar-inner"
//                     style={{ width: `${value}%` }}
//                 />
//                 <span>{value}%</span>
//             </div>
//         )
//     }
// }

export default ProgressBar