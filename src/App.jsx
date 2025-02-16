import React from 'react'
import Navbar from './components/Navbar'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Profile from './components/Profile'

const App = () => {
  return (
    <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
      <Profile />
      {/* <Navbar />
      <About />
      <Projects />
      <Skills />
      <Contact /> */}

    </div>
  )
}

export default App