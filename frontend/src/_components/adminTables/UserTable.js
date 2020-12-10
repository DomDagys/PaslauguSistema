import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import '../../styles/Admin.css'

class UserTable extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
        <div>
            <h1 className="center">Vartotojai</h1>
            <Table striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>Vartoto vardas</th>
      <th>Vardas</th>
      <th>Pavardė</th>
      <th>El. paštas</th>
      <th>Gimimo data</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Username1</td>
      <td>Petras</td>
      <td>Petraitis</td>
      <td>petras@mail.com</td>
      <td>1985-04-14</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Username2</td>
      <td>Jonas</td>
      <td>Jonaitis</td>
      <td>jonas@mail.com</td>
      <td>1986-04-14</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Username3</td>
      <td>Antanas</td>
      <td>Antanaitis</td>
      <td>antanas@mail.com</td>
      <td>1998-04-15</td>
    </tr>
  </tbody>
</Table>    
        </div> );
    }
}

export { UserTable };