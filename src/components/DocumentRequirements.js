import React from "react";
import '../styles/animations.css';
import '../styles/components.css';
import '../styles/main.css';


function DocumentRequirements() {
    const [selectedCountry, setSelectedCountry] = React.useState('uae');
    const [selectedService, setSelectedService] = React.useState('business');
    
    const documents = {
        uae: {
            business: {
                title: "Business Setup in UAE",
                requirements: [
                    "Valid Passport Copy",
                    "Emirates ID (for residents)",
                    "No Objection Certificate (NOC)",
                    "Bank Reference Letter",
                    "Business Plan",
                    "Initial Approval Certificate"
                ]
            },
            tax: {
                title: "Tax Registration in UAE",
                requirements: [
                    "Trade License",
                    "Company Registration Documents",
                    "Memorandum of Association",
                    "Bank Statement (last 3 months)",
                    "Owner's Passport Copy",
                    "Tenancy Contract"
                ]
            },
            audit: {
                title: "Audit Services in UAE",
                requirements: [
                    "Financial Statements",
                    "Bank Statements",
                    "Trade License",
                    "Previous Audit Reports",
                    "VAT Returns (if applicable)",
                    "Company Registration Documents"
                ]
            }
        },
        india: {
            business: {
                title: "Business Registration in India",
                requirements: [
                    "PAN Card",
                    "Aadhar Card",
                    "Address Proof",
                    "Photographs",
                    "Bank Account Details",
                    "NOC from Owner"
                ]
            },
            tax: {
                title: "Tax Registration in India",
                requirements: [
                    "PAN Card",
                    "Aadhar Card",
                    "Business Registration Proof",
                    "Bank Account Details",
                    "Rent Agreement",
                    "Partnership Deed (if applicable)"
                ]
            },
            audit: {
                title: "Audit Services in India",
                requirements: [
                    "GST Returns",
                    "Income Tax Returns",
                    "Bank Statements",
                    "Financial Statements",
                    "Previous Year Audit Reports",
                    "Business Registration Documents"
                ]
            }
        }
    };

    return (
        <section data-name="document-requirements" id="requirements" className="section bg-gray-50">
            <div className="container mx-auto px-4">
                <h2 className="section-title">Document Requirements</h2>
                <p className="section-subtitle">Select your country and service type to view required documents</p>

                <div className="max-w-4xl mx-auto">
                    {/* Country Selection */}
                    <div className="flex justify-center space-x-4 mb-8">
                        <button
                            onClick={() => setSelectedCountry('uae')}
                            className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                                selectedCountry === 'uae'
                                    ? 'bg-blue-900 text-white shadow-lg'
                                    : 'bg-white text-gray-600 hover:bg-blue-50'
                            }`}
                        >
                            United Arab Emirates
                        </button>
                        <button
                            onClick={() => setSelectedCountry('india')}
                            className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                                selectedCountry === 'india'
                                    ? 'bg-blue-900 text-white shadow-lg'
                                    : 'bg-white text-gray-600 hover:bg-blue-50'
                            }`}
                        >
                            India
                        </button>
                    </div>

                    {/* Service Selection */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                        {['business', 'tax', 'audit'].map((service) => (
                            <button
                                key={service}
                                onClick={() => setSelectedService(service)}
                                className={`p-4 rounded-lg font-medium capitalize transition-all duration-300 ${
                                    selectedService === service
                                        ? 'bg-blue-900 text-white shadow-lg transform -translate-y-1'
                                        : 'bg-white text-gray-600 hover:bg-blue-50'
                                }`}
                            >
                                {service} Services
                            </button>
                        ))}
                    </div>

                    {/* Requirements Display */}
                    <div className="bg-white rounded-lg shadow-lg p-6 transform transition-all duration-300 hover:shadow-xl">
                        <h3 className="text-2xl font-semibold mb-6 text-blue-900">
                            {documents[selectedCountry][selectedService].title}
                        </h3>
                        <ul className="space-y-4">
                            {documents[selectedCountry][selectedService].requirements.map((req, index) => (
                                <li key={index} className="flex items-center">
                                    <svg className="w-6 h-6 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                                    </svg>
                                    <span className="text-gray-700">{req}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default DocumentRequirements;