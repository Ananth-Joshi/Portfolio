import './App.css'
import Profile from './components/LandingPage/Profile'
import NavBar from './components/LandingPage/NavBar'
import Skills from './components/LandingPage/Skills'
import Projects from './components/LandingPage/Projects'
import Certifications from './components/LandingPage/Certifications'
import ContactMe from './components/LandingPage/ContactMe'
import Particle from './components/LandingPage/Particle'
import { Route, Routes } from 'react-router-dom'
import LandingPage from './components/LandingPage/LandingPage'
import TimeLine from './components/TimeLine/TimeLine'


function App() {
  return (
    <div className='relative flex flex-col pointer-events-auto min-h-screen w-full'> 
      <Particle />
      <NavBar />
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/timeline" element={<TimeLine />} />
      </Routes>
    </div>
  )
}

export default App