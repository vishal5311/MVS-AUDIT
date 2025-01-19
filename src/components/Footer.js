import React from "react";
import '../styles/animations.css';
import '../styles/components.css';
import '../styles/main.css';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    // Define social media URLs
    const socialLinks = {
        linkedin: "https://www.linkedin.com/company/mvs-audit-consultants",  // Replace with actual LinkedIn URL
        twitter: "https://twitter.com/mvsaudit"  // Replace with actual Twitter URL
    };

    const handleSocialClick = (platform) => {
        window.open(socialLinks[platform], '_blank', 'noopener,noreferrer');
    };

    return (
        <footer data-name="site-footer" className="bg-gray-900 text-white py-12 relative">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div data-name="footer-about">
                        <h3 className="text-xl font-bold mb-4">MVS Audit</h3>
                        <address className="not-italic">
                            <p>Business Centre, Sharjah Publishing City Free Zone</p>
                            <p>Sharjah, United Arab Emirates</p>
                            <a href="mailto:vijayaravind@mvsauditors.com" className="hover:text-blue-400">vijayaravind@mvsauditors.com</a>
                            <p>+971 567847932</p>
                        </address>
                    </div>

                    <div data-name="footer-links">
                        <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><a href="/" className="hover:text-blue-400">Home</a></li>
                            <li><a href="/about" className="hover:text-blue-400">About</a></li>
                            <li><a href="/services" className="hover:text-blue-400">Services</a></li>
                            <li><a href="/contact" className="hover:text-blue-400">Contact</a></li>
                        </ul>
                    </div>

                    <div data-name="footer-services">
                        <h3 className="text-xl font-bold mb-4">Services</h3>
                        <ul className="space-y-2">
                            <li>Annual Audit Services</li>
                            <li>Internal Audit Services</li>
                            <li>Book-keeping Services</li>
                            <li>VAT Compliance & Services</li>
                        </ul>
                    </div>

                    <div data-name="footer-social">
                        <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
                        <div className="flex space-x-4">
                            <button 
                                onClick={() => handleSocialClick('linkedin')}
                                className="hover:text-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 rounded-full p-1"
                                aria-label="Visit our LinkedIn page"
                            >
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
                                </svg>
                            </button>
                            <button 
                                onClick={() => handleSocialClick('twitter')}
                                className="hover:text-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 rounded-full p-1"
                                aria-label="Visit our Twitter page"
                            >
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-8 pt-8 text-center">
                    <img 
                        src="MVS AUDIT LOGO.png" 
                        alt="Company Logo" 
                        className="mx-auto w-80 h-auto bg-white p-2 rounded shadow"
                    />
                    <p className="mt-4 text-center">&copy; {currentYear} MVS Audit Consultants. All Rights Reserved.</p>
                    <p className="mt-2 text-center">Designed by <span className="font-semibold">KSVR</span></p>
                </div>
            </div>
        </footer>
    );
}
