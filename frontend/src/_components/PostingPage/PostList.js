import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

class PostList extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <div>
            <h1 className="center">Vartotojo skelbimai</h1>
			<h6><a href="/newpost">Naujas skelbimas </a></h6>
            <Table striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>Skelbimo pavadinimas</th>
      <th>Kategorija</th>
      <th>Būsena</th>
	  <th></th>
	  <th></th>
	  <th></th>
      <th>Peržiūros</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Pinigų skolinimas</td>
      <td>Verslas</td>
      <td><a>Aktyvus</a></td>
	  <td><a>Redaguoti...</a></td>
	  <td><a>Peržiūrėti...</a></td>
	  <td><a>Šalinti</a></td>
      <td><a>Žiūrėti...</a></td>
    </tr>
    <tr>
      <td>2</td>
      <td>Montažų kūrimas</td>
      <td>Video ir animacija</td>
      <td><a>Aktyvus</a></td>
      <td><a href="/editpost">Redaguoti...</a></td>
      <td><a>Peržiūrėti...</a></td>
	  <td><a>Šalinti</a></td>
      <td><a>Žiūrėti...</a></td>
    </tr>
    <tr>
      <td>3</td>
      <td>Video redagavimas</td>
      <td>Video ir animacija</td>
      <td><a>Archyvuotas</a></td>
      <td><a>Redaguoti...</a></td>
      <td><a>Peržiūrėti...</a></td>
	  <td><a>Šalinti</a></td>
      <td><a>Žiūrėti...</a></td>
    </tr>
  </tbody>
</Table>    
        </div> );
    }
}
 
export { PostList };