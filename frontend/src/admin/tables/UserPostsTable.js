import React, { Component } from 'react';
import { Table, Button } from 'react-bootstrap';
import { postService } from '../../_services';
import {UserPostRow} from '../rows';
import '../../styles/Admin.css'

class UserPostsTable extends Component {
    constructor(props) {
        super(props);
        this.state = { 
          searchedUser: "",
          userPosts: null
         }

         this.handleChange = this.handleChange.bind(this);
         this.getUserPosts = this.getUserPosts.bind(this);
    }

    handleChange(event) {
      let { name, value } = event.target
      this.setState({ [name]: value });
    }

    getUserPosts() {
      postService.getPostsByUsername(this.state.searchedUser)
        .then(posts => this.setState({userPosts: posts}));
    }

    render() { 
      let count = 1;
        return ( <div className="adminTable">
            <h1 className="center">Vartotojo skelbimų paieška</h1>
            <div className="searchBar">
                <input type="text" name="searchedUser" className="searchField" placeholder="Vartotojas" onChange={this.handleChange}></input>
                <Button variant="primary" onClick={this.getUserPosts}>Ieškoti</Button>
            </div>
<Table striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>Vartotojas</th>
      <th>Antraštė</th>
      <th>Aprašymas</th>
      <th>Kategorija</th>
      <th>Peržiūros</th>
      <th>Veiksmai</th>
    </tr>
  </thead>
  <tbody>
    {this.state.userPosts &&
    this.state.userPosts.posts &&
    this.state.userPosts.posts.map(post => <UserPostRow key={count} number={count++} {...post} username={this.state.userPosts.username}/>)}
  </tbody>
</Table>    
        </div> );
    }
}
 
export { UserPostsTable }