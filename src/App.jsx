import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Closing, Letter, Passcode, Question, Recap, Timer, Message, Music, Picture } from './components';
import { Facebook, Instagram, Linkedin } from 'lucide-react'; // Importamos iconos
import './index.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Passcode />} />
        <Route path="/question" element={<Question />} />
        <Route path="/timer" element={<Timer />} />
        <Route path="/recap" element={<Recap />} />
        <Route path="/recap/message" element={<Message />} />
        <Route path="/recap/music" element={<Music />} />
        <Route path="/recap/pictures" element={<Picture />} />
        <Route path="/letter" element={<Letter />} />
        <Route path="/closing" element={<Closing />} />
      </Routes>

      {/* Footer mejorado */}
      <footer className="bg-black/20 backdrop-blur-lg text-white text-center py-6 mt-10 border-t border-white/20">
        <div className="flex flex-col items-center">
          <p className="text-lg font-semibold">Desarrollado con ❤️ por José Ortega</p>
          <div className="flex gap-4 mt-2">
            <a href="https://www.instagram.com/mr.orteg4/" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 transition duration-300">
              <Instagram size={20} />
            </a>
            <a href="https://www.linkedin.com/in/jos%C3%A9-ortega-497387321/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition duration-300">
              <Linkedin size={20} />
            </a>
            <a href="https://github.com/joseorteha" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition duration-300">
              <Facebook size={20} />
            </a>
          </div>
          <p className="text-sm opacity-70 mt-2">© {new Date().getFullYear()} Todos los derechos reservados</p>
        </div>
      </footer>
    </Router>
  );
}

export default App;
