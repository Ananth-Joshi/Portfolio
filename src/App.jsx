import './App.css'
import Profile from './components/Profile'
import NavBar from './components/NavBar'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Certifications from './components/Certifications'

function App() {
  return (
    <div className='flex flex-col max-w-screen mx-0 scroll-mx-0 first-line:overflow-x-clip  justify-center items-center'> 
      <NavBar/>
      <Profile/>
      <Skills/>
      <Projects/>
      <Certifications/>
    </div>
  )
}

export default App
