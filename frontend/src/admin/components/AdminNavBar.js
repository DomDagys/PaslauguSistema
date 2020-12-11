import React, { Component } from 'react';
import { Nav } from 'react-bootstrap';

class AdminNavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <div>
            <Nav fill variant="tabs" defaultActiveKey="/admin">
                    <Nav.Item>
                        <Nav.Link href="/admin?table=users">Vartotojai</Nav.Link>   
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/admin?table=reported_users">Paskusti vartotojai</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/admin?table=reported_posts">Paskusti skelbimai</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/admin?table=suspended_users">Suspenduoti vartotojai</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/admin?table=suspended_posts">Suspenduoti skelbimai</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/admin?table=user_posts">Vartoto skelbimai</Nav.Link>
                    </Nav.Item>
                </Nav>
        </div> );
    }
}
 
export { AdminNavBar };