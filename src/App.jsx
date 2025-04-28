
import React from 'react'
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Projects } from './pages/Projects'
import { Contact } from './pages/Contact'
import { Footer } from './components/Footer'

export default function App() {
  return (
    <Router>
      <div className="min-h-screen font-sans">
        <nav className="bg-gray-900 text-white p-4 flex justify-center space-x-8">
          <NavLink to="/" className={({ isActive }) => isActive ? 'text-yellow-400' : 'hover:text-yellow-300'}>Home</NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? 'text-yellow-400' : 'hover:text-yellow-300'}>About</NavLink>
          <NavLink to="/projects" className={({ isActive }) => isActive ? 'text-yellow-400' : 'hover:text-yellow-300'}>Projects</NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? 'text-yellow-400' : 'hover:text-yellow-300'}>Contact</NavLink>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  )
}
