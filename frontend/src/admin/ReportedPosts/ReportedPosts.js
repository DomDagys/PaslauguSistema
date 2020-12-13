import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import { reportService } from '../../_services/report.service';
import ReportedPostRow from './ReportedPostRow';
import '../../styles/Admin.css';

class ReportedPosts extends Component {
    constructor(props) {
        super(props);
        this.state = { 
          postReports: null
         }
    }

    componentDidMount(){
      reportService.getAllPostReports().then(reports => this.setState({ postReports: reports }))
    }

    render() { 
      let count = 1;
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
      <th>Veiksmai</th>
    </tr>
  </thead>
  <tbody>
    {this.state.postReports &&
    this.state.postReports.map(report => <ReportedPostRow key={count} number={count++} {...report}/>)}
  </tbody>
</Table>    
        </div> );
    }
}
 
export { ReportedPosts };