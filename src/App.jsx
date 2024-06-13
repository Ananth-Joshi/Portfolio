import './App.css'
import Profile from './components/Profile'
import NavBar from './components/NavBar'
import Skills from './components/Skills'
import Projects from './components/Projects'


function App() {
  return (
    <div className='flex flex-col justify-center items-center'> 
      <NavBar/>
      <Profile/>
      <Skills/>
      <Projects/>
      
    </div>
  )
}

export default App
