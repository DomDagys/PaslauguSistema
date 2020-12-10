import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import '../../styles/Admin.css';

class SuspendedPosts extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <div>
            <h1 className="center">Suspenduoti skelbimai</h1>
            <Table striped bordered hover>
            <thead>
    <tr>
      <th>#</th>
      <th>Skelbimo pavadinimas</th>
      <th>Skelbimo kūrėjas</th>
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
      <td>UFC treniruotės</td>
      <td>Username1</td>
      <td>Smurtas</td>
      <td>120</td>
      <td>Admin1</td>
      <td>2020-10-20</td>
      <td>2020-11-20</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Nemokami nuolaidų čekiai</td>
      <td>Username2</td>
      <td>Apgaudinėjimas</td>
      <td>320</td>
      <td>Admin2</td>
      <td>2020-09-19</td>
      <td>2020-12-20</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Parduodu šunį</td>
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
 
export { SuspendedPosts };