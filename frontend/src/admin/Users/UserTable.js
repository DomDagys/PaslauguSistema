import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import { accountService } from '../../_services';
import UserRow from './UserRow';
import '../../styles/Admin.css';

class UserTable extends Component {
    constructor(props) {
        super(props);
        this.state = { 
          users: null
         }
    }

    componentDidMount() {
      accountService.getAll().then(data => this.setState({users: data}));
    }

    render() { 
      let count = 1;
        return ( 
        <div className="adminTable">
            <h1 className="center">Vartotojai</h1>
            <Table striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>Vardas</th>
      <th>Pavardė</th>
      <th>El. paštas</th>
      <th>Paskyra sukurta</th>
    </tr>
  </thead>
  <tbody>
    {this.state.users && this.state.users.map(user => <UserRow key={count} number={count++} {...user}/>)}
  </tbody>
</Table>    
        </div> );
    }
}

export { UserTable };