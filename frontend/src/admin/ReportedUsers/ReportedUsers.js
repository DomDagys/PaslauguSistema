import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import { reportService } from '../../_services/report.service';
import ReportedUserRow from './ReportedUserRow';
import '../../styles/Admin.css';

class ReportedUsers extends Component {
    constructor(props) {
        super(props);
        this.state = { 
          userReports: null
         }
    }

    componentDidMount(){
      reportService.getAllUserReports().then(data => this.setState({userReports: data}));
    }

    render() { 
      let count = 1;
      console.log(this.state);
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
      <th>Veiksmai</th>
    </tr>
  </thead>
  <tbody>
    {this.state.userReports && 
    this.state.userReports.map(report => <ReportedUserRow key={count} number={count++} {...report}/>)}
  </tbody>
</Table>    
        </div> );
    }
}
 
export { ReportedUsers };