import React from "react";
import '../styles/animations.css';
import '../styles/components.css';
import '../styles/main.css';

// ServiceCard Component
function ServiceCard({ title, description, icon }) {
    return (
        <div
            data-name="service-card"
            className="bg-white rounded-lg p-6 transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-2 border border-gray-100"
        >
            <div className="bg-blue-50 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                <i className={`${icon} text-2xl text-blue-600`}></i>
            </div>
            <h3 className="text-xl font-semibold mb-4 text-blue-900">{title}</h3>
            <p className="text-gray-600 mb-4">{description}</p>
            
        </div>
    );
}

// Services Component
function Services() {
    const services = [
        {
            title: "Annual Audit Services",
            description:
                "Comprehensive annual audit services ensuring financial accuracy and regulatory compliance.",
            icon: "fas fa-chart-line",
        },
        {
            title: "Internal Audit Services",
            description:
                "Strategic evaluation of risk management processes and control frameworks.",
            icon: "fas fa-shield-alt",
        },
        {
            title: "Book-keeping Services",
            description:
                "Expert monthly bookkeeping services for accurate financial record-keeping.",
            icon: "fas fa-book",
        },
        {
            title: "VAT Compliance & Services",
            description:
                "End-to-end VAT services covering registration, filing, and assessments.",
            icon: "fas fa-percentage",
        },
        {
            title: "Corporate Tax Compliance",
            description:
                "Complete corporate tax services including registration and advisory.",
            icon: "fas fa-building",
        },
        {
            title: "WPS Services",
            description:
                "Comprehensive Wage Protection System solutions for salary processing.",
            icon: "fas fa-money-bill-wave",
        },
        {
            title: "In-House Accounting",
            description:
                "Full-scale accounting services with advanced Clientele software.",
            icon: "fas fa-calculator",
        },
        {
            title: "Other Services",
            description:
                "Additional services including Certifications and Business Advisory.",
            icon: "fas fa-plus-circle",
        },
    ];

    return (
        <section
            data-name="services-section"
            id="services"
            className="section"
        >
            <div className="container mx-auto px-4">
                <h2 className="section-title text-3xl font-bold text-center mb-8">
                    Our Services
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <ServiceCard
                            key={index}
                            title={service.title}
                            description={service.description}
                            icon={service.icon}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Services;
