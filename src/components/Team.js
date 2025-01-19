import React from "react";
import '../styles/animations.css';
import '../styles/components.css';
import '../styles/main.css';

function TeamMember({ name, role, email, phone, image }) {
    return (
        <div data-name="team-member-card" className="team-member-card">
            <img 
                src={image} 
                alt={name}
                className="w-full h-80 object-cover"
            />
            <div className="team-member-info">
                <h3 className="text-xl font-semibold text-blue-900">{name}</h3>
                <p className="text-gray-600 mb-2">{role}</p>
                <a href={`mailto:${email}`} className="text-blue-600 block hover:text-blue-800">{email}</a>
                <a href={`tel:${phone}`} className="text-blue-600 hover:text-blue-800">{phone}</a>
            </div>
        </div>
    );
}

export default function Team() {
    const teamMembers = [
        {
            name: "Vijayaravind Venkatachalam",
            role: "Founder",
            email: "vijayaravind@mvsauditors.com",
            phone: "+971 567847932",
            image: "https://placehold.co/400x500"
        },
        {
            name: "Saranya Vasudevan",
            role: "CEO",
            email: "saranya@mvsauditors.com",
            phone: "+91 7397260694",
            image: "https://placehold.co/400x500"
        }
    ];

    return (
        <section data-name="team-section" id="team" className="section">
            <div className="container mx-auto px-4">
                <h2 className="section-title">Meet Our Experts</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {teamMembers.map((member, index) => (
                        <TeamMember key={index} {...member} />
                    ))}
                </div>
            </div>
        </section>
    );
}
