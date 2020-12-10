import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import '../../styles/Admin.css';

class ReportedPosts extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <div>
            <h1 className="center">Paskųsti skelbimai</h1>
            <Table striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>Skelbimo pavadinimas</th>
      <th>Skelbimo kūrėjas</th>
      <th>Kategorija</th>
      <th>Paskundimų skaičius</th>
      <th>Paskutinį kartą paskųstas</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Pinigų skolinimas</td>
      <td>Username1</td>
      <td>Apgaudinėjimas</td>
      <td>20</td>
      <td>2020-10-02</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Montažų kūrimas</td>
      <td>Username2</td>
      <td>Smurtas</td>
      <td>100</td>
      <td>2020-10-16</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Video redagavimas</td>
      <td>Username3</td>
      <td>Nepageidaujamas turinys</td>
      <td>200</td>
      <td>2020-10-22</td>
    </tr>
  </tbody>
</Table>    
        </div> );
    }
}
 
export { ReportedPosts };