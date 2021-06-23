import React, { useState } from 'react'
import '../componentsStyle/Home.css'
import { Button } from 'react-bootstrap';
import Sender from '../components/Sender';
import Receiver from '../components/Receiver';
import { isMobile } from "react-device-detect";
import homeimage from "../drawable/homepage.svg";

export default function Home() {
    const [SR, setSR] = useState("Both")
    function checkSR() {
        if (SR === "Both") {
            return (
                <div id="HomeStyle">
                    <h1 id={isMobile ? "HomeIAMAMob" : "HomeIAMA"}>I'm a</h1>
                    <Button id={isMobile ? "HomeSMob" : "HomeS"} onClick={() => setSR("S")}>Sender</Button>
                    <Button id={isMobile ? "HomeRMob" : "HomeR"} onClick={() => setSR("R")}>Receiver</Button>
                </div>
            )
        }
        else if (SR === "S") { return (<Sender />) }
        else { return (<Receiver />) }
    }
    return (
        <div>
            {isMobile ? '' :
                <div id="Behzad">
                    <a href="https://github.com/Behzadkha">GitHub</a>
                </div>}
            <div id="Homepageimagediv">
                <img id={isMobile ? "HomepageimageMob" : "Homepageimage"} src={homeimage} alt="Home" />
            </div>
            <div>
                <h1 className={isMobile ? "HomeTitleMob" : "HomeTitle"}>Share text between your devices easily!</h1>
            </div>
            {checkSR()}

        </div>
    )
}
