import './logo.css'
import { Navigate, useNavigate } from 'react-router-dom'
import './fade.css'
import { useState } from 'react'

function Logo() {

    const navTool = useNavigate()
    const [fadeActive, setFadeActive] = useState("")

    const handleClick = () => {
        setFadeActive("fade-Out")
        setTimeout(() => {
            navTool('/menu')
        }, 1000)
    }

    return (
        <>
        <div className={fadeActive}>
            <button className='entryButton' onClick={handleClick}>
                <img className='BIM' src='./Others/pp.jpg'/>
            </button>
        </div>
        </>
    )
}

export default Logo