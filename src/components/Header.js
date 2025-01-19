import React from "react";
import '../styles/animations.css';
import '../styles/components.css';
import '../styles/main.css';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const toggleMenu = () => {
        try {
            setIsMenuOpen(!isMenuOpen);
        } catch (error) {
            reportError(error);
        }
    };

    return (
        <header data-name="site-header" className="fixed w-full bg-white shadow-md z-50">
            <div className="container mx-auto px-4 py-4">
                <nav className="flex items-center justify-between">
                    {/* Logo Section */}
                    <div data-name="logo" className="flex items-center">
                        <img 
                            src="MVS AUDIT LOGO.png" 
                            alt="MVS Audit Logo" 
                            className="h-20 w-auto" 
                        />
                    </div>
                    
                    {/* Mobile Menu Button */}
                    <button 
                        data-name="mobile-menu-button"
                        className="md:hidden"
                        onClick={toggleMenu}
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-16 6h16"/>
                        </svg>
                    </button>

                    {/* Desktop Menu */}
                    <div data-name="desktop-menu" className={`md:flex items-center space-x-8 ${isMenuOpen ? 'block' : 'hidden'}`}>
                        <a href="#home" className="nav-link">Home</a>
                        <a href="#about" className="nav-link">About</a>
                        <a href="#services" className="nav-link">Services</a>
                        <a href="#gallery" className="nav-link">Gallery</a>
                        <a href="#contact" className="nav-link">Contact</a>
                    </div>
                </nav>
            </div>
        </header>
    );
}
