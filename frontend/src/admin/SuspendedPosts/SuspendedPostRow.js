import React, { Component } from 'react';
import { suspensionService } from '../../_services';
import { Button } from 'react-bootstrap';

class SuspendedPostRow extends Component {
    constructor(props) {
        super(props);
        this.state = { 

         }

         this.clearSuspension = this.clearSuspension.bind(this);
         this.removePost = this.removePost.bind(this);
    }

    clearSuspension() {
        suspensionService.removeSuspention(this.props.id)
            .then(() => window.location.reload(true));
    }

    removePost(){
        suspensionService.removePost()
            .then(() => window.location.reload(true));
    }

    render() { 
        return ( <tr>
            <td>{this.props.number}</td>
            <td>{this.props.title}</td>
            <td>{this.props.firstName} {this.props.lastName}</td>
            <td>{this.props.reason}</td>
            <td>{this.props.reportCount}</td>
            <td>{this.props.suspendedBy}</td>
            <td>{this.props.from}</td>
            <td><Button variant="success" onClick={this.clearSuspension}>Valyti</Button>
            <Button variant="danger" onClick={this.removePost}>Ištrinti</Button></td>
        </tr> );
    }
}
 
export default SuspendedPostRow;