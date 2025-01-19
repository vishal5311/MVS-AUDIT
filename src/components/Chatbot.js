import React from "react";
import '../styles/animations.css';
import '../styles/components.css';
import '../styles/main.css';

export default function Chatbot() {
    const [isOpen, setIsOpen] = React.useState(false);
    const [messages, setMessages] = React.useState([
        {
            type: 'bot',
            content: 'Hello! How can I help you today?'
        }
    ]);
    const [inputMessage, setInputMessage] = React.useState('');

    const handleSubmit = (e) => {
        try {
            e.preventDefault();
            if (!inputMessage.trim()) return;

            setMessages(prev => [...prev, {
                type: 'user',
                content: inputMessage
            }]);

            // Simulate bot response
            setTimeout(() => {
                setMessages(prev => [...prev, {
                    type: 'bot',
                    content: "Thank you for your message. One of our representatives will get back to you shortly."
                }]);
            }, 1000);

            setInputMessage('');
        } catch (error) {
            reportError(error);
        }
    };

    return (
        <div data-name="chatbot" className="fixed bottom-4 right-4 z-50">
            {/* Chatbot Toggle Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="bg-blue-900 text-white p-4 rounded-full shadow-lg hover:bg-blue-800 transition duration-300"
            >
                {isOpen ? (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                ) : (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                    </svg>
                )}
            </button>

            {/* Chatbot Window */}
            {isOpen && (
                <div className="absolute bottom-16 right-0 w-96 bg-white rounded-lg shadow-xl overflow-hidden">
                    <div className="bg-blue-900 text-white p-4">
                        <h3 className="font-semibold">MVS Audit Support</h3>
                    </div>
                    
                    <div className="h-96 overflow-y-auto p-4 space-y-4">
                        {messages.map((message, index) => (
                            <div
                                key={index}
                                className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                            >
                                <div
                                    className={`max-w-3/4 p-3 rounded-lg ${
                                        message.type === 'user'
                                            ? 'bg-blue-900 text-white'
                                            : 'bg-gray-100 text-gray-800'
                                    }`}
                                >
                                    {message.content}
                                </div>
                            </div>
                        ))}
                    </div>

                    <form onSubmit={handleSubmit} className="border-t p-4">
                        <div className="flex space-x-2">
                            <input
                                type="text"
                                value={inputMessage}
                                onChange={(e) => setInputMessage(e.target.value)}
                                placeholder="Type your message..."
                                className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                            />
                            <button
                                type="submit"
                                className="bg-blue-900 text-white px-4 py-2 rounded-lg hover:bg-blue-800"
                            >
                                Send
                            </button>
                        </div>
                    </form>
                </div>
            )}
        </div>
    );
}
