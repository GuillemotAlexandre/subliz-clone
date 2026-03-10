import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Navbar from "./components/Navbar";
import Hero from "./components/Hero"; // Importe le nouveau fichier

function App() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />
      <main>
        <Hero />
      </main>
    </div>
  );
}

export default App;
