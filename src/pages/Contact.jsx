import React, { useState } from 'react'

export function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()

    const form = e.target
    const data = new FormData(form)

    await fetch('https://formspree.io/f/xzzrboqv', {
      method: 'POST',
      body: data,
      headers: {
        Accept: 'application/json',
      },
    })

    setSubmitted(true)
    form.reset()
  }

  return (
    <section id="contact" className="py-16 px-4 bg-gray-50 min-h-screen text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Contact Me</h2>

      <p className="text-gray-700 max-w-xl mx-auto mb-12 text-base md:text-lg">
        I'm currently open to new opportunities. Feel free to reach out if you have a project in mind, 
        want to collaborate, or just want to connect!
      </p>

      <div className="max-w-xl mx-auto bg-white p-8 rounded-lg shadow-md">
        {submitted ? (
          <p className="text-green-600 text-lg font-semibold">
            Thanks for reaching out! I'll get back to you as soon as possible.
          </p>
          ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full p-2 border border-gray-300 rounded"/>

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full p-2 border border-gray-300 rounded"/>

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              required
              className="w-full p-2 border border-gray-300 rounded" />

            <textarea
              name="message"
              placeholder="Your Message"
              required
              rows="5"
              className="w-full p-2 border border-gray-300 rounded"></textarea>

            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              Send
            </button>
          </form>
        )}
      </div>
    </section>
  )
}