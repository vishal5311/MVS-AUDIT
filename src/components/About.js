import React from "react";
import '../styles/animations.css';
import '../styles/components.css';
import '../styles/main.css';

export default function About() {
    const features = [
        {
            title: "Comprehensive Compliance Assessments",
            icon: "fas fa-check-circle",
        },
        {
            title: "Risk Mitigation Strategies",
            icon: "fas fa-shield-alt",
        },
        {
            title: "Streamlined Internal Controls Implementation",
            icon: "fas fa-cogs",
        },
        {
            title: "Customized Audit Solutions",
            icon: "fas fa-clipboard-list",
        },
        {
            title: "Regulatory Compliance Training",
            icon: "fas fa-chalkboard-teacher",
        },
        {
            title: "Advanced Data Analytics for Audit Optimization",
            icon: "fas fa-chart-line",
        },
    ];

    return (
        <section data-name="about-section" id="about" className="section bg-gray-50">
            <div className="container mx-auto px-4">
                <h2 className="section-title">About Us</h2>
                <h3 className="section-subtitle">Welcome to MVS Audit Consultants</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div data-name="about-content">
                        <p className="text-gray-600 mb-6">
                            Leading company MVS Audit Consultants specializes in thorough audit services that are suited to the various demands of companies all over the world. With a seasoned team of experts in risk management, compliance, and auditing, we offer unmatched insights to maximize organizational performance and guarantee regulatory conformance.
                        </p>
                        <p className="text-gray-600 mb-6">
                            Our dedication to quality and client satisfaction motivates us to offer customized solutions that tackle difficult problems and promote long-term development. You may confidently manage the ever-changing business landscape of today by putting your trust in MVS Audit Consultants for thorough audits and strategic guidance.
                        </p>
                    </div>
                    
                    <div data-name="about-features" className="grid grid-cols-2 gap-6">
                        {features.map((feature, index) => (
                            <div 
                                key={index}
                                className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition duration-300"
                            >
                                <div className="bg-blue-50 w-12 h-12 rounded-full flex items-center justify-center text-blue-600 mb-2">
                                    <i className={`${feature.icon} text-xl`}></i>
                                </div>
                                <h4 className="text-sm font-semibold text-blue-900">{feature.title}</h4>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
