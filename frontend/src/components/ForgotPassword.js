import React, { useState } from "react";
import { Button, FormGroup, FormControl, ControlLabel,Form, Container, ToggleButton,ButtonGroup} from "react-bootstrap";
import { DateTime } from 'react-datetime-bootstrap';
export function ForgotPassword() {
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
        <Form.Label>El-Paštas</Form.Label>
        <Form.Control type="email" placeholder="Įveskite savo el-paštą" />
    </Form.Group>
    <Button variant="primary" type="submit">
        Patvirtinti
    </Button>
    </Form>
    </Container>
  );
}