import React from 'react'
import {Form, Button} from 'react-bootstrap'
import '../componentsStyle/Sender.css'
export default function Sender() {
    return (
        <div>
            <Form id="SForm"> 
                <Form.Group controlId="formBasicEmail">
                    <Form.Label id="SFormTitle">Text to be sent</Form.Label>
                    <Form.Control id="SFormInput" type="text" placeholder="A very long text" />
                </Form.Group>
                <Button variant="primary" type="submit" id="SFormBtn">Send</Button>
                <h1 id="Sinfo">All texts will be deleted after clicking on the confirm button(recipient side)</h1>
            </Form>
            
        </div>
    )
}
