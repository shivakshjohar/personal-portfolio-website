
import React from 'react'

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6 text-center">
      <p className="text-sm">&copy; {new Date().getFullYear()} Shivaksh Johar. All rights reserved.</p>
      <div className="mt-2 flex justify-center space-x-6">
        <a href="mailto:jshivaksh@gmail.com" className="hover:text-yellow-400">Email</a>
        <a href="https://github.com/shivakshjohar" target="_blank" className="hover:text-yellow-400">GitHub</a>
        <a href="https://www.linkedin.com/in/shivakshjohar" target="_blank" className="hover:text-yellow-400">LinkedIn</a>
      </div>
    </footer>
  )
}