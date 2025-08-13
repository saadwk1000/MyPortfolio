import { BrowserRouter } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import About from './about.jsx'
import Menu from './menu.jsx'
import Resume from './resume.jsx'
import Logo from './logo.jsx'
import Contact from './contact.jsx'
import Project from './project.jsx'

function App () {
    return (
        <BrowserRouter>
        <Routes>
            <Route path='/'element={<Logo />} />
            <Route path='/about' element={<About />} />
            <Route path='/resume' element={<Resume />} />
            <Route path='/menu' element={<Menu />} />
            <Route path='/main' element={<main />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/project' element={<Project />} />
        </Routes>
        </BrowserRouter>
    )
}

export default App;