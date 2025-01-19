import React from "react";
import '../styles/animations.css';
import '../styles/components.css';
import '../styles/main.css';

function ServiceCard({ icon, title, description }) {
    return (
        <div
            data-name="service-card"
            className="bg-white rounded-lg p-6 transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-2 border border-gray-100"
        >
            <div className="bg-blue-50 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                <i className={`${icon} text-2xl text-blue-600`}></i>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800">{title}</h3>
            <p className="text-gray-600">{description}</p>
            <div className="mt-4">
                <button className="text-blue-600 hover:text-blue-800 font-medium flex items-center">
                    Learn More
                    <svg
                        className="w-4 h-4 ml-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 5l7 7-7 7"
                        />
                    </svg>
                </button>
            </div>
        </div>
    );
}

export default ServiceCard;
