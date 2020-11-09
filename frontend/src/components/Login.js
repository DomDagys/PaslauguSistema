import React, { useState } from "react";
import { Button, FormGroup, FormControl, ControlLabel,Form, Container, ToggleButton,ButtonGroup} from "react-bootstrap";
import { DateTime } from 'react-datetime-bootstrap';
export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

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
        <Form.Control type="text" placeholder="Įveskite vartotojo vardą" />
    </Form.Group>

    <Form.Group controlId="formBasicPassword">
        <Form.Label>Slaptažodis</Form.Label>
        <Form.Control type="password" placeholder="Įveskite slaptažodį" />
    </Form.Group>
    <Button variant="primary" type="submit">
        Prisijungti
    </Button>
    </Form>
    <a href="/forgotpassword">Pamiršote slaptažodį? Spauskite čia</a>
    </Container>
  );
}