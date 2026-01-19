import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import './contact.css'
import './fade.css'

function Contact () {

    const [conFade, setConFade] = useState("")
    useEffect(() => {
        setConFade("fade-In")
    }, [])

    return (
        <div className={conFade} id="Contact-Style">
            <button className="fb" onClick={() => window.location.href = "https://facebook.com/saad.waheed.1000"}></button>
            <button className="li" onClick={() => window.location.href = "https://www.linkedin.com/in/saad-waheed-508715286"}></button>
            <button className="gm" onClick={() => window.location.href = "https://mailto:saadwaheed67@gmail.com"}></button>
            <button className="wa" onClick={() => window.location.href = "https://wa.me/03034311347"}></button>
            <button className="ig" onClick={() => window.location.href = "https://instagram.com/saadwk1000_"}></button>
        </div>
    )
}

export default Contact