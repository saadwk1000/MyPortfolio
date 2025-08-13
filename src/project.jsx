import React from "react"
import { useState } from "react"
import { useEffect } from "react"
import "./fade.css"
import "./project.css"

function Project() {

    const [projectFade, setProjectFade] = useState("")
    useEffect(() => {
        setProjectFade("fade-In")
    }, [])

    return (
        <div id="ProjectInfo" className={projectFade}>
            <div className="P1">
                <h2 className="P1-Main">Zakat Deduction Calculator</h2>
                <p className="P1-Description">This is a C++ based code, specifically created to calculate your annual Zakat on Property, Gold, Silver & Cash</p>
                <button className="P1-Link" onClick={() => window.location.href = "https://github.com/saadwk1000/Zakat-Calculator" } />
            </div>
        </div>
    )    
}

export default Project