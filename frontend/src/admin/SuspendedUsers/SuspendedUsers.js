import React, { Component } from 'react';
import {Table} from 'react-bootstrap';
import { suspensionService } from '../../_services';
import SuspendedUserRow from './SuspendedUserRow';
import '../../styles/Admin.css';

class SuspendedUsers extends Component {
    constructor(props) {
        super(props);
        this.state = { 
          suspendedUsers: null
         }
    }

    componentDidMount() {
      suspensionService.getSuspendedUsers()
        .then(users => this.setState({suspendedUsers: users}));
    }

    render() { 
      let count = 1;
        return ( <div>
            <h1 className="center">Suspenduoti vartotojai</h1>
<Table striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>Vartotojo vardas</th>
      <th>Priežastis</th>
      <th>Paskundimu skaicius</th>
      <th>Suspenduotas administratoriaus</th>
      <th>Nuo</th>
      <th>Veiksmai</th>
    </tr>
  </thead>
  <tbody>
    {this.state.suspendedUsers &&
    this.state.suspendedUsers.map(user => <SuspendedUserRow key={count} number={count++} {...user}/>)}
  </tbody>
</Table>
        </div> );
    }
}
 
export { SuspendedUsers };