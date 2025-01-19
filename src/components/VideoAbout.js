import React from "react";

export default function VideoAbout() {
    const [isPlaying, setIsPlaying] = React.useState(false);
    
    return (
        <section data-name="video-about-section" className="section bg-gray-900 text-white">
            <div className="container mx-auto px-4">
                <h2 className="section-title1 text-white">Our Story</h2>
                <div className="max-w-4xl mx-auto">
                    <div className="relative w-full h-0 pb-[56.25%] rounded-lg overflow-hidden">
                        {/* Removed the dull effect overlay when video is playing */}
                        
                        {/* Play Button Overlay */}
                        {!isPlaying && (
                            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center z-20">
                                <button
                                    onClick={() => setIsPlaying(true)}
                                    className="w-20 h-20 bg-white bg-opacity-90 rounded-full flex items-center justify-center transform transition-transform hover:scale-110"
                                >
                                    <svg
                                        className="w-10 h-10 text-blue-900"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M8 5v14l11-7z" />
                                    </svg>
                                </button>
                            </div>
                        )}
                        
                        {/* Video Element */}
                        {isPlaying ? (
                            <video
                                className="absolute inset-0 w-full h-full object-cover"
                                src="5minprofessionalv (online-video-cutter.com).mp4"
                                controls
                                autoPlay
                                title="About MVS Audit Consultants"
                                // Added muted property - remove this if you want audio by default
                                // muted
                            />
                        ) : (
                            <img
                                src="Leonardo_Phoenix_10_A_professional_photograph_featuring_two_pe_0.jpg"
                                alt="Video thumbnail"
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                        )}
                    </div>
                    
                    <div className="mt-8 text-center">
                        <h3 className="text-2xl font-semibold mb-4">Excellence in Audit Services</h3>
                        <p className="text-gray-300">
                            Watch our video to learn how MVS Audit Consultants has been helping businesses
                            achieve their financial goals through expert audit and consulting services.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}