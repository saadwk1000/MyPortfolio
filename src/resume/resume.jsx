import './resume.css'
import { useState } from 'react'
import { useEffect } from 'react'
import './fade.css'

function Resume () {
    
    const [fadeResume, setFadeResume] = useState("")
    
    useEffect(() => {
    setFadeResume("fade-In")
}, [])

    return (
        <div id='ResumeInfo' className={fadeResume}>
            <div>
                <img className='CP' src="./CompanyLogo/CP.jpg"/>
                <img className='PPAI' src='./CompanyLogo/PPAI.webp'/>
                <img className='AAR' src='./CompanyLogo/AAR.png'/>
                <img className='HT' src='./CompanyLogo/HT.jpg'/>
            </div>

            <div>
                <div className='CP-Info'>
                    <h2>MERN Stack Developer</h2>
                    <h4>Coding Pixel | July 2025 - Present</h4>
                </div>
                <div className='HT-Info'>
                    <h2>Elixir Developer</h2>
                    <h4>HawksTech | May 2025 - June 2025</h4>
                </div>
                <div className='AAR-Info'>
                    <h2>Team Lead</h2>
                    <h4>AA Robotics | Feburary 2024 - March 2025</h4>
                </div>
                <div className='PPAI-Info'>
                    <h2>Software Developer Trainee</h2>
                    <h4>ProtoPhieAI | January 2023 - April 2023</h4>
                </div>
            </div>
        </div>
    )
}

export default Resume