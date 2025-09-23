import React from 'react';
import NavBar from './NavBar';
import Profile from './Profile';
import Skills from './Skills';
import Projects from './Projects';
import Certifications from './Certifications';
import ContactMe from './ContactMe';

function LandingPage() {
  return (
    <div className="relative z-10 flex pointer-events-none flex-col items-center justify-center w-full">
      <Profile />
      <Skills />
      <Projects />
      <Certifications />
      <ContactMe />
    </div>
  );
}

export default LandingPage;
