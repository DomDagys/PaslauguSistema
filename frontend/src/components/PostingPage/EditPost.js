import React, { Component } from 'react';
import { Button, FormGroup, FormControl, ControlLabel,Form, Container, ToggleButton,ButtonGroup} from "react-bootstrap";
import { DateTime } from 'react-datetime-bootstrap';



class EditPost extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <div>
            <h1 className="center">Naujas skelbimas</h1>
			<h3 className="center">--Pagrindinė dalis--</h3>
			<Form> 
    <Form.Group controlId="formBasicText">
        <Form.Label>Antraštė</Form.Label>
        <Form.Control type="text" value="Monatžo kūrimas" />
    </Form.Group>
    <Form.Group controlId="formBasicText">
        <Form.Label>Aprašymas</Form.Label>
        <Form.Control type="text" value="Montuoju trumpus filmukus iš jūsų duotos medžiagos" />
    </Form.Group>
	<Form.Group controlId="formBasicSelect">
        <Form.Label>Kategorija</Form.Label>
        <Form.Control as="select"  >
		<option>Grafinis dizainas</option>
		<option>Programavimas</option>
		<option>Marketingas</option>
		<option>Video ir animacijos</option>
		<option>Muzika ir audio</option>
		</Form.Control>
    </Form.Group>
	<h3 className="center">--Sutarties dalis--</h3>
    <Form.Group controlId="formBasicText">
        <Form.Label>Sutarties aprašymas</Form.Label>
        <Form.Control type="text" value="Sumontuoju iki 2 min. trukmės filmuką" />
    </Form.Group>
	<Form.Group controlId="formBasicText">
        <Form.Label>Suma</Form.Label>
        <Form.Control type="float" value="6,98" />
    </Form.Group>
	<Form.Group controlId="formBasicText">
        <Form.Label>Galioja nuo</Form.Label>
        <Form.Control type="date" value="2020-05-30" />
    </Form.Group>
	<Form.Group controlId="formBasicText">
        <Form.Label>Galioja iki</Form.Label>
        <Form.Control type="date"  value="2020-12-31"/>
    </Form.Group>
	<Form.Group controlId="formBasicText">
        <Form.Label>Atlikimo terminas</Form.Label>
        <Form.Control type="text" value="1 savaitė" />
    </Form.Group>
    <Button variant="primary" href="/postlist">
        Išsaugoti
    </Button>
    </Form>
        </div> );
    }
}
 
export { EditPost };