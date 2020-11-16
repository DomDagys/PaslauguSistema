import React from "react";
import Form from "react-bootstrap/Form";
import "./EmailForm.css";
import Button from 'react-bootstrap/Button'


function EmailForm() {
  return (
    <div>
      <h2 className="emailHeader">Elektroninio laiško forma</h2>
      <div className="form">
      <Form>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label></Form.Label>
          <Form.Control type="text" placeholder="Tema" />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Laiškas:</Form.Label>
          <Form.Control as="textarea" rows={4} />
        </Form.Group>
      </Form>
      <div className="sendButton">
      <Button variant="primary">Siųsti</Button>
      </div>
      </div>
    </div>
  );
}

export default EmailForm;
