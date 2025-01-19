import React from "react";
import '../styles/animations.css';
import '../styles/components.css';
import '../styles/main.css';

function FAQItem({ question, answer, isOpen, onClick }) {
    return (
        <div data-name="faq-item" className="border-b border-gray-200">
            <button
                className="w-full text-left py-4 px-6 focus:outline-none flex justify-between items-center"
                onClick={onClick}
            >
                <span className="font-semibold text-lg text-gray-800">{question}</span>
                <svg
                    className={`w-6 h-6 transform transition-transform ${isOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
            </button>
            <div
                className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? 'max-h-96 py-4' : 'max-h-0'
                }`}
            >
                <p className="px-6 text-gray-600">{answer}</p>
            </div>
        </div>
    );
}

export default function FAQ() {
    const [openIndex, setOpenIndex] = React.useState(0);
    const faqs = [
        {
            question: "What types of audit services do you provide?",
            answer: "We offer a comprehensive range of audit services including annual audits, internal audits, compliance audits, and specialized industry-specific audits tailored to meet your business needs."
        },
        {
            question: "How long does a typical audit process take?",
            answer: "The duration varies depending on the size and complexity of your business. A typical audit can take anywhere from 2-4 weeks, but we work efficiently to minimize disruption to your operations."
        },
        {
            question: "What makes MVS Audit Consultants different?",
            answer: "Our combination of extensive experience, personalized service, and use of cutting-edge technology sets us apart. We provide tailored solutions that address your specific needs while ensuring compliance and optimization."
        },
        {
            question: "Do you provide international audit services?",
            answer: "Yes, we have experience working with international clients and can provide audit services that comply with international standards and regulations."
        }
    ];

    return (
        <section data-name="faq-section" id="faq" className="section bg-gray-50">
            <div className="container mx-auto px-4">
                <h2 className="section-title">Frequently Asked Questions</h2>
                <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
                    {faqs.map((faq, index) => (
                        <FAQItem
                            key={index}
                            question={faq.question}
                            answer={faq.answer}
                            isOpen={index === openIndex}
                            onClick={() => setOpenIndex(index === openIndex ? -1 : index)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
