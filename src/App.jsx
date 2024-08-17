import './App.css'
import Profile from './components/Profile'
import NavBar from './components/NavBar'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Certifications from './components/Certifications'
import ContactMe from './components/ContactMe'
import { useCallback } from "react"
import Particles from "react-particles"
import { loadSlim } from "tsparticles-slim"

function App() {
  const particlesInit = useCallback(async engine => {
    await loadSlim(engine)
  }, [])

  return (
    <div className='relative flex flex-col max-w-screen mx-0 scroll-mx-0 first-line:overflow-x-clip justify-center items-center'> 
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 6,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        }}
      />
      <div className="relative z-10">
        <NavBar/>
        <Profile/>
        <Skills/>
        <Projects/>
        <Certifications/>
        <ContactMe/>
      </div>
    </div>
  )
}

export default App