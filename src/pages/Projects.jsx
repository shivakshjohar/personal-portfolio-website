
import React from 'react'
import todo from '../assets/To-Do App.png' 
import blog from '../assets/Blog Website.png' 
import expense from '../assets/Expense Tracker.png' 
import gym from '../assets/Gym Management System.png' 

export function Projects() {
  const projects = [
    {
      id: 1,
      title: 'To-Do App',
      description: 'Task manager built using MERN stack.',
      image: todo,
      liveLink: '#',
      githubLink: '#',
    },
    {
      id: 2,
      title: 'Expense Tracker',
      description: 'Track income and expenses with charts and filters.',
      image: expense,
      liveLink: '#',
      githubLink: '#',
    },
    {
      id: 3,
      title: 'Blog Website',
      description: 'Dynamic blog app using MERN stack with user login.',
      image: blog,
      liveLink: '#',
      githubLink: '#',
    },
    {
      id: 4,
      title: 'Gym Management System',
      description: 'Web-based system to manage gym memberships, payments, and trainers.',
      image: gym,
      liveLink: '#',
      githubLink: '#',
    },
  ]

  return (
    <section id="projects" className="py-16 px-4 bg-gray-50 min-h-screen text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-900">My Projects</h2>
      
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div 
            key={project.id}
            data-aos="flip-left"
            className="bg-white rounded-lg shadow-md p-4 hover:shadow-2xl duration-300">
            <img
              src={project.image}
              alt={project.title}
              className="rounded-lg duration-300 shadow-md"/>
            <h3 className="text-xl font-semibold mt-4 text-gray-800">{project.title}</h3>
            <p className="text-gray-600 text-sm mt-2">{project.description}</p>
            <div className="flex justify-center gap-4 mt-4 text-sm text-blue-600 font-medium">
              <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                Live Demo
              </a>
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}