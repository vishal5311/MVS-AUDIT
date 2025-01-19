// App.js
import React from 'react';
import About from "./components/About";
import Chatbot from "./components/Chatbot";
import Contact from "./components/Contact";
import FAQ from "./components/FAQ";
import FloatingActions from "./components/FloatingActions";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Newsletter from "./components/Newsletter";
import Services from "./components/Services";
import Team from "./components/Team";
import VideoAbout from "./components/VideoAbout";
import TaxCalculator from './components/TaxCalculator';
import CurrencyConverter from './components/CurrencyConverter';
import DocumentRequirements from './components/DocumentRequirements';

export default function App() {
  return (
    <div data-name="app-container">
      <Header />
      <main>
        <Hero />
        <About />
        <VideoAbout />
        <Services />
        <DocumentRequirements />
        {/* Add a container for TaxCalculator and CurrencyConverter */}
        <div className="calculators-container">
          <TaxCalculator />
          <CurrencyConverter />
        </div>
        
        <Gallery />
        <Team />
        <FAQ />
        <Contact />
        <Newsletter />
      </main>
      <Footer />
      <Chatbot />
      <FloatingActions />
    </div>
  );
}

