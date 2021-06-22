import React, {useState} from 'react'
import { Form, Button } from 'react-bootstrap'
import '../componentsStyle/Sender.css'
import {config} from '../env';
import axios from 'axios'

export default function Sender() {
    const [Stext, setStext] = useState("")
    const [code, setcode] = useState("")
    const SendText = e => {
        e.preventDefault();
        axios.post(`${config.dev_server}/sender`, {text: Stext}).then((res) => {
            setcode(res.data.code)
        })
        .catch(err => {
            console.log(err)
        })
    }

    function RenderCode(){
        if(code !== ""){
            return(
                <div id="Scode">
                    <h2>Your code is:</h2>
                    <h3 id="ScodeFont">{code}</h3>
                </div>
            )
        }
    }

    return (
        <div>
            <Form id="SForm" onSubmit={SendText}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label id="SFormTitle">Text to be sent</Form.Label>
                    <Form.Control className="SFormInput" type="text" placeholder="A very long text" onChange={(e) => setStext(e.target.value)}/>
                </Form.Group>
                <Button variant="primary" type="submit" id="SFormBtn" >Send</Button>
                <h1 id="Sinfo">All texts will be deleted after receiving it or 2h</h1>
            </Form>
            {RenderCode()}
        </div>
    )
}
