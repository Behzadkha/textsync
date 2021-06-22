import React, { useState } from 'react'
import '../componentsStyle/Home.css'
import { Button } from 'react-bootstrap';
import Sender from '../components/Sender';
import Receiver from '../components/Receiver';

export default function Home() {
    const [SR, setSR] = useState("Both")
    function checkSR() {
        if (SR === "Both") {
            return (
                <div id="HomeStyle">
                    <h1 id="HomeIAMA">I'm a</h1>
                    <Button id="HomeS" onClick={() => setSR("S")}>Sender</Button>
                    <Button id="HomeR" onClick={() => setSR("R")}>Receiver</Button>
                </div>
            )
        }
        else if (SR === "S") { return (<Sender />) }
        else { return (<Receiver />) }
    }
    return (
        <div>
            <div>
                <h1 className="HomeTitle">Share text between your devices easily!</h1>
            </div>
            {checkSR()}

        </div>
    )
}
