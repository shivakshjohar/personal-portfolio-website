import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import 'aos/dist/aos.css';
import AOS from 'aos';

AOS.init({
  duration: 1000, // Animation duration in ms
  once: true,     // Only animate once when scrolled into view
});


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
