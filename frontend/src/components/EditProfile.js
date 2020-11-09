import React, { useState } from "react";
import { Button, FormGroup, FormControl, ControlLabel,Form, Container, ToggleButton,ButtonGroup} from "react-bootstrap";
import { DateTime } from 'react-datetime-bootstrap';
export function EditProfile() {
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
    <Form.Group controlId="formBasicText">
        <Form.Label>Vardas</Form.Label>
        <Form.Control type="text"  />
    </Form.Group>
    <Form.Group controlId="formBasicText">
        <Form.Label>Pavardė</Form.Label>
        <Form.Control type="text"  />
    </Form.Group>
    <Form.Group controlId="formBasicText">
        <Form.Label>Naujas slaptažodis</Form.Label>
        <Form.Control type="password"  />
    </Form.Group>
    <Button variant="primary" href="/viewprofile">
        Išsaugoti pakeitimus
    </Button>
    </Form>
    </Container>
  );
}