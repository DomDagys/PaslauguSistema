import React, { useState } from "react";
import { Button, FormGroup, FormControl, ControlLabel,Form, Container, ToggleButton,ButtonGroup} from "react-bootstrap";
import { DateTime } from 'react-datetime-bootstrap';
export function ViewProfile() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const radios = [
    { name: "Foo", value: "foo" },
    { name: "Bar", value: "bar" },
    { name: "Baz", value: "baz" }
  ];
  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault(); 
  }

  return (
<Container>
<Form> 
    <Form.Group controlId="formBasicEmail">
        <Form.Label>Vartotojo vardas</Form.Label>
        <Form.Control type="text" value="test" readOnly />
    </Form.Group>
    <Form.Group controlId="formBasicText">
        <Form.Label>Vardas</Form.Label>
        <Form.Control type="text" value="test" readOnly  />
    </Form.Group>
    <Form.Group controlId="formBasicText">
        <Form.Label>Pavardė</Form.Label>
        <Form.Control type="text" value="test" readOnly />
    </Form.Group>
    <Form.Group controlId="formBasicEmail">
        <Form.Label>El-Paštas</Form.Label>
        <Form.Control type="email" value="test@gmail.com" readOnly/>
    </Form.Group>
    <Form.Group controlId="formBasicEmail">
        <Form.Label>Gimimo data</Form.Label>
        <Form.Control type="date" value="2010-10-27" readOnly />
    </Form.Group>

    <Button variant="primary" href="/editprofile">
        Redaguoti
    </Button>
    </Form>
    </Container>
  );
}