import React from "react";
import '../styles/animations.css';
import '../styles/components.css';
import '../styles/main.css';

export default function Newsletter() {
    const [email, setEmail] = React.useState('');

    const handleSubmit = (e) => {
        try {
            e.preventDefault();
            // Handle newsletter subscription
            console.log('Newsletter subscription:', email);
            setEmail('');
        } catch (error) {
            reportError(error);
        }
    };

    return (
        <section data-name="newsletter-section" className="section bg-blue-900 text-white">
            <div className="container mx-auto px-4">
                <div className="max-w-2xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
                    <p className="mb-8">
                        With pride, MVS Audit Consultants offers our monthly newsletter, which is your go-to resource for smart updates on auditing trends, professional guidance, and success-oriented industry best practices.
                    </p>
                    <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4">
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            className="flex-1 px-4 py-2 rounded-lg text-gray-900"
                            required
                        />
                        <button
                            type="submit"
                            className="bg-white text-blue-900 px-8 py-2 rounded-lg hover:bg-blue-100 transition duration-300"
                        >
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
