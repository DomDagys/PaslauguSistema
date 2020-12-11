import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./ChatUsers.css";
import Table from "react-bootstrap/Table";
import Button from 'react-bootstrap/Button'
import EmailForm from "./EmailForm";
import MessageForm from "./MessageForm";

function ChatUsers() {
  return (
    <div>
      <h2 className="header">Visi Vartotojai</h2>
      <Router>
        <div className="chatTable">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Vartotojo vardas</th>
                <th>Vardas</th>
                <th>Pavarde</th>
                <th>Susisiekti</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Username1</td>
                <td>Petras</td>
                <td>Petraitis</td>
                <td>
                    <div className="links">
                  <Button variant="outline-primary"><Link className="link" to="/email">Elektroninis paštu</Link></Button>{" "}
                  <Button variant="outline-primary"><Link className="link" to="/message">Žinute</Link></Button>
                  </div>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>Username2</td>
                <td>Jonas</td>
                <td>Jonaitis</td>
                <td>
                <div className="links">
                  <Button variant="outline-primary"><Link className="link" to="/email">Elektroninis paštu</Link></Button>{" "}
                  <Button variant="outline-primary"><Link className="link" to="/message">Žinute</Link></Button>
                  </div>
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>Username3</td>
                <td>Antanas</td>
                <td>Antanaitis</td>
                <td>
                <div className="links">
                  <Button variant="outline-primary"><Link className="link" to="/email">Elektroninis paštu</Link></Button>{" "}
                  <Button variant="outline-primary"><Link className="link" to="/message">Žinute</Link></Button>
                  </div>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
        <Route path="/email">
          <EmailForm />
        </Route>
        <Route path="/message">
          <MessageForm />
        </Route>
      </Router>
    </div>
  );
}

export default ChatUsers;
