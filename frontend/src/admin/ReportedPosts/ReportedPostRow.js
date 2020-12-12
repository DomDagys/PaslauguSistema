import React, { Component } from 'react';

class ReportedPostRow extends Component {
    constructor(props) {
        super(props);
        this.state = { 

         }
    }
    render() { 
        return ( <tr>
            <td>{this.props.number}</td>
            <td>{this.props.title}</td>
            <td>{this.props.firstName} {this.props.lastName}</td>
            <td>{this.props.category}</td>
            <td>{this.props.count}</td>
            <td>{this.props.lastReported}</td>
        </tr> );
    }
}
 
export default ReportedPostRow;