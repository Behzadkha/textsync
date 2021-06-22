import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import '../componentsStyle/Receiver.css'
import axios from 'axios'
import { config } from '../env';

export default function Receiver() {
    const [Rcode, setRcode] = useState("")

    const [Rtext, setRtext] = useState("")

    const GetText = e => {
        e.preventDefault();
        axios.post(`${config.dev_server}/receiver`, { code: Rcode }).then((res) => {
            console.log(res.data.text)
            setRtext(res.data.text)
        })
            .catch(err => {
                console.log(err)
            })
    }

    function RenderText() {
        if (Rtext !== "") {
            return (
                <div id="Scode">
                        <h2>Your text is:</h2>
                        <textarea id="ScodeFont">{Rtext}</textarea>
                        <h1 id="Sinfo">Your text is now deleted from the database</h1>
                </div>
            )
        }
    }

    return (
        <div>
            <Form id="RForm" onSubmit={GetText}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label id="RFormTitle">Enter the code here</Form.Label>
                    <Form.Control className="RInput" type="text" placeholder="129" onChange={e => setRcode(e.target.value)} />
                </Form.Group>
                <Button variant="primary" type="submit" id="RFormBtn" >Get</Button>
            </Form>
            {RenderText()}
        </div>
    )
}
