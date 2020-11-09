import React, { Component } from 'react';
import {Table} from 'react-bootstrap';
import '../styles/Admin.css'

class SuspendedUsers extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
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
      <th>Iki</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Username1</td>
      <td>Smurtas</td>
      <td>120</td>
      <td>Admin1</td>
      <td>2020-10-20</td>
      <td>2020-11-20</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Username2</td>
      <td>Apgaudinėjimas</td>
      <td>320</td>
      <td>Admin2</td>
      <td>2020-09-19</td>
      <td>2020-12-20</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Username3</td>
      <td>Šlamštas</td>
      <td>70</td>
      <td>Admin3</td>
      <td>2020-06-20</td>
      <td>2021-11-20</td>
    </tr>
  </tbody>
</Table>
        </div> );
    }
}
 
export { SuspendedUsers };