import React, { Component } from 'react';
import { suspensionService } from '../../_services';
import { Button } from 'react-bootstrap';
import { dateConverter } from '../../_helpers';

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
        const confirmed = confirm("Ar tikrai norite ištrinti skelbimą?");
        if (!confirmed)
            return;
        suspensionService.removePost(this.props.postId)
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
            <td>{dateConverter.convertDate(new Date(this.props.from))}</td>
            <td><Button variant="success" onClick={this.clearSuspension}>Valyti</Button>
            <Button variant="danger" onClick={this.removePost}>Ištrinti</Button></td>
        </tr> );
    }
}
 
export default SuspendedPostRow;