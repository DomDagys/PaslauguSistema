import React, { Component } from 'react';
import { Table, Button } from 'react-bootstrap';
import { suspensionService } from '../../_services';
import {SuspendedPostRow} from '../rows';
import '../../styles/Admin.css';

class SuspendedPosts extends Component {
    constructor(props) {
        super(props);
        this.state = { 
          suspendedPosts: null,
          sortedSuspensions: null,
          sortCategory: "Visos",
          sortBy: "None",
          sortOrder: "Decreasing"
         }

         this.handleSort = this.handleSort.bind(this);
         this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
      suspensionService.getSuspendedPosts().then(suspensions => 
        this.setState({suspendedPosts: suspensions, sortedSuspensions: suspensions}));
    }

    handleSort(){
      if (this.state.suspendedPosts === null)
        return;
      let suspensions = this.state.suspendedPosts;
      if (this.state.sortCategory !== "Visos")
        suspensions = suspensions.filter(suspension => suspension.reason.includes(this.state.sortCategory));
      if (this.state.sortBy === "suspensions"){
        if (this.state.sortOrder === "Increasing"){
          suspensions = suspensions.sort((a, b) => (a.reportCount > b.reportCount? 1 : -1));
        } else if (this.state.sortOrder === "Decreasing"){
          suspensions = suspensions.sort((a, b) => (a.reportCount < b.reportCount? 1 : -1));
        }
      } else if (this.state.sortBy === "Date"){
        if (this.state.sortOrder === "Increasing"){
          suspensions = suspensions.sort((a, b) => (a.from > b.from? 1 : -1));
        } else if (this.state.sortOrder === "Decreasing"){
          suspensions = suspensions.sort((a, b) => (a.from < b.from? 1 : -1));
        }
      }
      this.setState({sortedSuspensions: suspensions});
    }

    handleChange(event){
      const { name, value } = event.target;
      this.setState({[name]: value});
    }

    render() { 
      let count = 1;
        return ( <div className="adminTable">
            <h1 className="center">Suspenduoti skelbimai</h1>
            <table>
              <tbody>
              <tr>
                <td><label className="sortLabel">Kategorija</label></td>
                <td><label className="sortLabel">Rikiuoti pagal</label></td>
                <td><label className="sortLabel">Kryptis</label></td>
              </tr>
              <tr>
                <td>
                  <select className="sortSelect" name="sortCategory" onChange={this.handleChange}>
                    <option value="Visos">Visos</option>
                    <option value="Apgaudinėjimas">Apgaudinėjimas</option>
                    <option value="Netinkamas turinys">Netinkamas turinys</option>
                    <option value="Smurtas">Smurtas</option>
                    <option value="Šlamštas">Šlamštas</option>
                    <option value="Neapykantos kurstymas">Neapykantos kurstymas</option>
                    <option value="Suspenduotas administratoriaus">Suspenduotas administratoriaus</option>
                  </select>
                </td>
                <td>
                  <select className="sortSelect" name="sortBy" onChange={this.handleChange}>
                    <option value="None">Nieką</option>
                    <option value="suspensions">Paskundimus</option>
                    <option value="Date">Paskundimo Data</option>
                  </select>
                </td>
                <td>
                  <select className="sortSelect" name="sortOrder" onChange={this.handleChange}>
                    <option value="Decreasing">Mažejančiai</option>
                    <option value="Increasing">Didėjančiai</option>
                  </select>
                </td>
                <td><Button variant="info" onClick={this.handleSort}>Rikiuoti</Button></td>
              </tr>
              </tbody>
            </table>
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
      <th>Veiksmai</th>
    </tr>
  </thead>
  <tbody>
  {this.state.sortedSuspensions &&
    this.state.sortedSuspensions.map(post => <SuspendedPostRow key={count} number={count++} {...post} />)}
  </tbody>
</Table>
        </div> );
    }
}
 
export { SuspendedPosts };