import React, { Component } from 'react';
import { Table, Button } from 'react-bootstrap';
import { reportService } from '../../_services/report.service';
import ReportedPostRow from './ReportedPostRow';
import '../../styles/Admin.css';

class ReportedPosts extends Component {
    constructor(props) {
        super(props);
        this.state = { 
          postReports: null,
          sortedReports: null,
          sortCategory: "Visos",
          sortBy: "None",
          sortOrder: "Decreasing"
         }

         this.handleSort = this.handleSort.bind(this);
         this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount(){
      reportService.getAllPostReports().then(reports => this.setState({ postReports: reports, sortedReports: reports }))
    }


    handleSort(){
      if (this.state.postReports === null)
        return;
      let reports = this.state.postReports;
      if (this.state.sortCategory !== "Visos")
        reports = reports.filter(report => report.category === this.state.sortCategory);
      if (this.state.sortBy === "Reports"){
        if (this.state.sortOrder === "Increasing"){
          reports = reports.sort((a, b) => (a.count > b.count? 1 : -1));
        } else if (this.state.sortOrder === "Decreasing"){
          reports = reports.sort((a, b) => (a.count < b.count? 1 : -1));
        }
      } else if (this.state.sortBy === "Date"){
        if (this.state.sortOrder === "Increasing"){
          reports = reports.sort((a, b) => (a.lastReported > b.lastReported? 1 : -1));
        } else if (this.state.sortOrder === "Decreasing"){
          reports = reports.sort((a, b) => (a.lastReported < b.lastReported? 1 : -1));
        }
      }
      this.setState({sortedReports: reports});
    }

    handleChange(event){
      const { name, value } = event.target;
      this.setState({[name]: value});
    }

    render() { 
      let count = 1;
        return ( <div className="adminTable">
            <h1 className="center">Paskųsti skelbimai</h1>
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
                  </select>
                </td>
                <td>
                  <select className="sortSelect" name="sortBy" onChange={this.handleChange}>
                    <option value="None">Nieką</option>
                    <option value="Reports">Paskundimus</option>
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
            <br/>

            <Table striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>Skelbimo pavadinimas</th>
      <th>Skelbimo kūrėjas</th>
      <th>Kategorija</th>
      <th>Paskundimų skaičius</th>
      <th>Paskutinį kartą paskųstas</th>
      <th>Veiksmai</th>
    </tr>
  </thead>
  <tbody>
    {this.state.sortedReports&&
    this.state.sortedReports.map(report => <ReportedPostRow key={count} number={count++} {...report}/>)}
  </tbody>
</Table>    
        </div> );
    }
}
 
export { ReportedPosts };