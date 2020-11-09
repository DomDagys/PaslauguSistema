import React, { Component } from 'react';
import { Table, Button } from 'react-bootstrap';
import '../styles/Admin.css'

class UserPostsTable extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <div>
            <h1 className="center">Vartotojo skelbimų paieška</h1>
            <div className="searchBar">
                <input type="text" className="searchField" value="Vartotojo vardas"></input>
                <Button variant="primary">Ieškoti</Button>
            </div>
<Table striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>Antraštė</th>
      <th>Aprašymas</th>
      <th>Kategorija</th>
      <th>Peržiūros</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Video montavimas</td>
      <td>Montuoju nusiųstus video įrašus.</td>
      <td>Video ir animacija</td>
      <td>200</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Animuoju video</td>
      <td>Kūriu animacinius video pagal jūsų prašymą.</td>
      <td>Video ir animacija</td>
      <td>220</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Video įrašų montavimo kursai</td>
      <td>Dėstau kaip montuoti video įrašus</td>
      <td>Video ir animacija</td>
      <td>160</td>
    </tr>
  </tbody>
</Table>    
        </div> );
    }
}
 
export { UserPostsTable }