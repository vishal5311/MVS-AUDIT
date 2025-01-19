import React from "react";
import '../styles/animations.css';
import '../styles/components.css';
import '../styles/main.css';

export default function Hero() {
    return (
        <section data-name="hero-section" id="home" className="pt-24 pb-16 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center justify-between">
                    <div data-name="hero-content" className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
                            Experts in Accounting and Auditing Services
                        </h1>
                        <p className="text-lg md:text-xl mb-8 animate-fade-in animate-delayed">
                            ISO 9001-2015 Certified International Chartered Accountants Firms are United Auditing and its affiliated professional firms (Emirates Chartered Accountants Group).
                        </p>
                        <a 
                            href="#contact" 
                            data-name="cta-button"
                            className="inline-block bg-white text-blue-900 px-8 py-3 rounded-full font-semibold hover:bg-blue-100 transition duration-300 animate-fade-in animate-delayed"
                        >
                            Get Started
                        </a>
                    </div>
                    <div data-name="hero-image" className="md:w-1/2 animate-fade-in">
                        <img 
                            src="Leonardo_Phoenix_10_i_am_an_auditing_and_accounting_firm_i_ne_0.jpg" 
                            alt="MVS Audit Consultants" 
                            className="rounded-lg shadow-xl"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
