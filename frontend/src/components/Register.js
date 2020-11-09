import React, { useState } from "react";
import { Button, FormGroup, FormControl, ControlLabel,Form, Container, ToggleButton,ButtonGroup} from "react-bootstrap";
import { DateTime } from 'react-datetime-bootstrap';
export function Register() {
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
        <Form.Control type="text" placeholder="Įveskite vartotojo vardą" required />
    </Form.Group>

    <Form.Group controlId="formBasicPassword">
        <Form.Label>Slaptažodis</Form.Label>
        <Form.Control type="password" placeholder="Įveskite slaptažodį" required />
    </Form.Group>
    <Form.Group controlId="formBasicText">
        <Form.Label>Vardas</Form.Label>
        <Form.Control type="text" placeholder="Įveskite savo vardą" required />
    </Form.Group>
    <Form.Group controlId="formBasicText">
        <Form.Label>Pavardė</Form.Label>
        <Form.Control type="password" placeholder="Įveskite savo pavardę" required />
    </Form.Group>
    <Form.Group controlId="formBasicEmail">
        <Form.Label>El-Paštas</Form.Label>
        <Form.Control type="email" placeholder="Įveskite el-paštą" required />
    </Form.Group>
    <Form.Group controlId="formBasicEmail">
        <Form.Label>Gimimo data</Form.Label>
        <Form.Control type="date" placeholder="Pasirinkite datą"  required/>
    </Form.Group>
    <Form.Group>
    <Form.Label>Lytis</Form.Label>
    <div >
        <input type="radio" value="male" name="gender" /> Vyras
        <input type="radio" value="female" name="gender" /> Moteris
        <input type="radio" value="other" name="gender" /> Kita
      </div>
    </Form.Group>
    <Button variant="primary" type="submit">
        Registruotis
    </Button>
    </Form>
    </Container>
  );
}