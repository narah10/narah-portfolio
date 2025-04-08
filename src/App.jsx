// import React from 'react'
// import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import Landing from './Landing'
// // import About from '../src/components/About'
// // import Skills from '../src/components/Skills'
// // import Projects from '../src/components/Projects'
// // import Contact from '../src/components/Contact'

// const App = () => {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Landing/>} />
//         {/* <Route path="/About" element={<About/>} />
//         <Route path="/Skills" element={<Skills/>} />
//         <Route path="/Projects" element={<Projects/>} />
//         <Route path="/Contact" element={<Contact/>} /> */}
//       </Routes>
//     </BrowserRouter>
//   )
// }

// export default App
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contacts from './pages/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <main className="max-w-4xl mx-auto mt-20 px-5 md:px-0">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contacts/>}/>
          </Routes>
        </main>
        <footer>
          <Footer/>
        </footer>
      </div>
    </Router>
  );
}

export default App;
