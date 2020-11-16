import React from 'react'
import "./MessageForm.css";
import Button from 'react-bootstrap/Button'
import Form from "react-bootstrap/Form";

function MessageForm() {
    return (
        <div>
            <h2 className="messageHeader">Pradėkite pokalbį</h2>
            <div className="form">
      <Form>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Žinutė:</Form.Label>
          <Form.Control as="textarea" rows={4} />
        </Form.Group>
      </Form>
      <div className="sendButton">
      <Button variant="primary">Siųsti</Button>
      </div>
      </div>
        </div>
    )
}

export default MessageForm