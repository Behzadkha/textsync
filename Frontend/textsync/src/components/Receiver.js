import React, {useState} from 'react'
import { Form, Button } from 'react-bootstrap'
import '../componentsStyle/Receiver.css'

export default function Receiver() {
    return (
        <div>
            <Form id="RForm" >
                <Form.Group controlId="formBasicEmail">
                    <Form.Label id="RFormTitle">Enter the code here</Form.Label>
                    <Form.Control className="RInput" type="text" placeholder="129" />
                </Form.Group>
                <Button variant="primary" type="submit" id="RFormBtn" >Get</Button>
                <h1 id="Sinfo">All texts will be deleted after clicking on the confirm button(recipient side)</h1>
            </Form>
        </div>
    )
}
