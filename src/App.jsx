import './App.css'
import Profile from './components/Profile'
import NavBar from './components/NavBar'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Certifications from './components/Certifications'
import ContactMe from './components/ContactMe'
import Particle from './components/Particle'


function App() {
  return (
    <div className='relative flex flex-col min-h-screen w-full'> 
      <Particle />
      <div className="relative z-10 flex flex-col items-center justify-center w-full">
          <NavBar />
          <Profile />
          <Skills />
          <Projects />
          <Certifications />
          <ContactMe />
      </div>
    </div>
  )
}

export default App