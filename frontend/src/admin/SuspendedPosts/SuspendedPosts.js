import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import { suspensionService } from '../../_services';
import SuspendedPostRow from './SuspendedPostRow';
import '../../styles/Admin.css';

class SuspendedPosts extends Component {
    constructor(props) {
        super(props);
        this.state = { 
          suspendedPosts: null
         }
    }

    componentDidMount() {
      suspensionService.getSuspendedPosts().then(suspensions => this.setState({suspendedPosts: suspensions}));
    }

    render() { 
      let count = 1;
        return ( <div className="adminTable">
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
      <th>Veiksmai</th>
    </tr>
  </thead>
  <tbody>
  {this.state.suspendedPosts &&
    this.state.suspendedPosts.map(post => <SuspendedPostRow key={count} number={count++} {...post} />)}
  </tbody>
</Table>
        </div> );
    }
}
 
export { SuspendedPosts };