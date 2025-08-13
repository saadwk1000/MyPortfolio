import { Fragment } from 'react'
import './menu.css'
import { useNavigate } from 'react-router-dom'
import './fade.css'
import { useState } from 'react'
import { useEffect } from 'react'
function Menu () {

    const navTool = useNavigate()
    
    useEffect(() => {
        setAnimation("fade-In")
    }, [])

    const [animation, setAnimation] = useState("")
    const [aboutNavi, setAboutNavi] = useState(false)
    const [resumeNavi, setResumeNavi] = useState(false)
    const [contactNavi, setContactNavi] = useState(false)
    const [projectNavi, setProjectNavi] = useState(false)

    useEffect(() => {
        if(aboutNavi) {
            setAnimation("fade-Out")
            setTimeout(() => {
                navTool("/about")
            }, 1000)
        }
    }, [aboutNavi, navTool])

    useEffect(() => {
        if(resumeNavi) {
            setAnimation("fade-Out")
            setTimeout(() => {
                navTool("/resume")
            }, 1000)
        }
    }, [resumeNavi, navTool])

    useEffect(() => {
        if(contactNavi) {
            setAnimation("fade-Out")
            setTimeout(() => {
                navTool("/contact")
            }, 1000)
        }
    }, [contactNavi, navTool])

    useEffect(() => {
        if(projectNavi) {
            setAnimation("fade-Out")
            setTimeout(() => {
                navTool("/project")
            }, 1000)
        }
    }, [projectNavi, navTool])

    return (
        <div className={animation}>
            <div>
                <button className='about' onClick={() => setAboutNavi(true)}>
                    <img className='about_img' src="/Icons/About.webp"/>
                </button>
            </div>

            <div>
                <button className='contact' onClick={() => setContactNavi(true)}>
                    <img className='contact_img ' src="/Icons/Contact.jpg"/>
                </button>
            </div>

            <div>
                <button className='project' onClick={() => setProjectNavi(true)}>
                    <img className='project_img' src="/Icons/Project1.jpg"/>
                </button>
            </div>

            <div>
                <button className='resume' onClick={() => setResumeNavi(true)}>
                    <img className='resume_img' src="/Icons/CV.jpg"/>
                </button>
            </div>
        </div>
    )
}

export default Menu