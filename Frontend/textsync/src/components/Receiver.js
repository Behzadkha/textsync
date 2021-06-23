import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import '../componentsStyle/Receiver.css'
import axios from 'axios'
import { config } from '../env';
import {isMobile} from "react-device-detect"

export default function Receiver() {
    const [Rcode, setRcode] = useState("")

    const [Rtext, setRtext] = useState("")

    const GetText = e => {
        e.preventDefault();
        axios.post(`${config.dev_server}/receiver`, { code: Rcode }).then((res) => {
            setRtext(res.data.text)
        })
            .catch(err => {
                console.log(err)
            })
    }

    function RenderText() {
        if (Rtext !== "") {
            return (
                <div id={isMobile ? "ScodeMob" : "Scode"}>
                        <h2 id={isMobile ? "RYourTextIs" : ''}>Your text is:</h2>
                        <textarea id={isMobile ? "RcodeFontMob" : "RcodeFont"} value={Rtext} readOnly/>
                        <h1 id="Rinfo">Your text is now deleted from the database</h1>
                </div>
            )
        }
    }

    return (
        <div>
            <Form id={isMobile ? "RFormMob" : "RForm"} onSubmit={GetText}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label id={isMobile ? "RFormTitleMob" : "RFormTitle"}>Enter the code here</Form.Label>
                    <Form.Control className={isMobile ? "RInputMob" : "RInput"} type="text" placeholder="129" onChange={e => setRcode(e.target.value)} />
                </Form.Group>
                <Button variant="primary" type="submit" id={isMobile ? "RFormBtnMob" : "RFormBtn"} >Get</Button>
            </Form>
            {RenderText()}
        </div>
    )
}
