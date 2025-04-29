
import React from 'react';

export function Home() {
  return (
    <section id="home" className="text-center py-20 px-4 bg-gray-50 min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
        Hi, I'm Shivaksh Johar
      </h1>
      <p className="text-lg md:text-xl text-gray-700 max-w-xl mb-6">
        A passionate web developer focused on building responsive, clean, and functional websites using the MERN stack 
        and modern tools.
      </p>

      <div className="flex gap-4">
        
        <a
          href="/ShivakshJohar_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-yellow-400 text-gray-900 font-semibold px-6 py-3 rounded-lg shadow-md 
          hover:bg-yellow-300 transition duration-300">
          View Resume
        </a>

        <a
          href="/ShivakshJohar_Resume.pdf"
          download
          className="inline-block bg-yellow-400 text-gray-900 font-semibold px-6 py-3 rounded-lg shadow-md 
          hover:bg-yellow-300 transition duration-300">
          Download Resume
        </a>
        
      </div> 

    </section>
  );
}