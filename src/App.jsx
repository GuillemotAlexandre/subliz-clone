import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import PhotoGallery from "./components/PhotoGallery";
import HowItWorks from "./components/HowItWorks";
import BecomeOwner from "./components/BecomeOwner";
import MarketExpansion from "./components/MarketExpansion"; // Nouveau
import Categories from "./components/Categories";
import ForTenants from "./components/ForTenants";
import Simulators from "./components/Simulators"; // Nouveau
import PreFooter from "./components/PreFooter";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-[#1D2939]">
      <Navbar />
      <main className="pt-[124px]">
        <Hero />
        <PhotoGallery />
        <BecomeOwner /> 
        <Categories />
        
        <ForTenants />
        <HowItWorks />
        <MarketExpansion />
        <Simulators />
        <PreFooter />
      </main>
      <Footer />
    </div>
  );
}

export default App;