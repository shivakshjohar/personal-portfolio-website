
import React from 'react'

export function About() {
  return (
    <section id="about" className="text-center py-20 px-4 bg-white min-h-screen">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">
        About Me
      </h2>
      
      <div className="max-w-3xl mx-auto text-left space-y-8 text-gray-700 text-lg leading-relaxed">
        <div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">Background</h3>
          <p>
            I'm a B.Tech. graduate in Computer Science and a self-driven developer currently focused on 
            building web projects using the MERN stack. I enjoy turning complex problems into clean, functional solutions.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">Tech Stack</h3>
          <p>
            HTML, CSS, JavaScript, React, Node.js, Express, MongoDB, Git, GitHub, Tailwind CSS, Vite.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">Goals</h3>
          <p>
            My current goal is to build a strong portfolio, land a solid tech job, and continue growing 
            into a skilled full-stack developer. 
          </p>
        </div>
      </div>
    </section>
  )
}