import React from "react";
import '../styles/animations.css';
import '../styles/components.css';
import '../styles/main.css';

export default function Gallery() {
    const images = [
        { url: "Leonardo_Phoenix_10_A_modern_and_spacious_office_with_a_unique_0.jpg", alt: "Office Environment" },
        { url: "Leonardo_Phoenix_10_i_am_an_auditing_and_accounting_firm_i_ne_3.jpg", alt: "Team Meeting" },
        { url: "Leonardo_Phoenix_10_MVS_Audit_Consultants_FZE_LLC_MAKING_THE_W_2.jpg", alt: "Client Consultation" },
        { url: "Leonardo_Phoenix_10_A_professional_scene_featuring_a_tidy_offi_2.jpg", alt: "Audit Process" },
        { url: "Leonardo_Phoenix_10_A_serene_and_professional_business_scene_f_1.jpg", alt: "Financial Analysis" },
        { url: "Leonardo_Phoenix_10_landing_page_image_for_MVS_Audit_LogoHomeA_3.jpg", alt: "Team Collaboration" }
    ];

    return (
        <section data-name="gallery-section" id="gallery" className="section bg-gray-50">
            <div className="container mx-auto px-4">
                <h2 className="section-title">Our Gallery</h2>
                <p className="section-subtitle">
                    The exhibition at MVS Audit Consultants is a proud display of our dedication to superior financial scrutiny.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {images.map((image, index) => (
                        <div 
                            key={index}
                            data-name="gallery-item"
                            className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition duration-300"
                        >
                            <img 
                                src={image.url}
                                alt={image.alt}
                                className="w-full h-64 object-cover hover:scale-110 transition duration-300"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
