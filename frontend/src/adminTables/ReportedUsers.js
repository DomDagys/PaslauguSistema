import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import '../styles/Admin.css';

class ReportedUsers extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <div>
            <h1 className="center">Paskųsti vartotojai</h1>
            <Table striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>Vartotojo vardas</th>
      <th>Kategorija</th>
      <th>Paskundimų skaičius</th>
      <th>Paskutinį kartą paskųstas</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Username1</td>
      <td>Apgaudinėjimas</td>
      <td>50</td>
      <td>2020-10-12</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Username2</td>
      <td>Smurtas</td>
      <td>40</td>
      <td>2020-10-06</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Username3</td>
      <td>Nepageidaujamas turinys</td>
      <td>220</td>
      <td>2020-10-12</td>
    </tr>
  </tbody>
</Table>    
        </div> );
    }
}
 
export { ReportedUsers };