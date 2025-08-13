import './about.css'
import { useState } from 'react'
import { useEffect } from 'react'
import './fade.css'

function About() {

  const [fadeAbout, setFadeAbout] = useState("")
  const [imgFade, setImgFade] = useState("hiddenImage")
  useEffect(() => {

    setFadeAbout("fade-In")
    const timer = setTimeout(() => {
      setImgFade("seperateFadeIn")
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <div id='AboutInfo' className={fadeAbout}>
        <h1 className='heading'>Who am I?</h1>
        <p className='intro'>I'm a Computer Science graduate from the University of Central Punjab 
            with a multidisciplinary background in software and hardware. I began my career in the 
            robotics and mechatronics industry, then explored functional programming through Elixir 
            development. Currently, I'm working as a MERN Stack Developer at Coding Pixel, where I 
            build full-stack web applications using React, Node.js, Express, and MongoDB. My diverse 
            experience enables me to approach challenges with both technical depth and creative 
            flexibility. I'm passionate about writing clean, scalable code and continuously learning 
            new technologies to stay ahead in the field.
            </p>
      </div>

      <div className={imgFade}>
        <img className='Selfie' src='/Others/CU1.jpg'></img>
      </div>
  
    </>
  )
}

export default About
