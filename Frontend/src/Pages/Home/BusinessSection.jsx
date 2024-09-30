// src/components/BusinessSection.jsx
import React, { useState } from 'react';

const BusinessSection = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [
        {
            title: "Startups/Mentorship",
            description: "Support for the Startups or looking for mentors from the community?",
            icon: "🚀",
            img: "/path-to-image1.jpg",
        },
        {
            title: "Partner With Us",
            description: "We work with companies and tailor programs to get visibility within our community.",
            icon: "🤝",
            img: "/path-to-image2.jpg",
        },
        {
            title: "Passing Through Singapore",
            description: "Please share your schedule, and we will arrange a networking session.",
            icon: "✈️",
            img: "/path-to-image3.jpg",
        },
    ];

    const handleDotClick = (index) => {
        setCurrentSlide(index);
    };

    return (
        <div className="text-center py-10">
            <h5 className="text-blue-600 uppercase tracking-wider font-bold">BUSINESS</h5>
            <h1 className="text-4xl font-bold mb-8">ENGAGING WITH IITAS COMMUNITY</h1>
            <div className="flex justify-center gap-8">
                {/* Current Slide Card */}
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`bg-white rounded-lg shadow-lg overflow-hidden w-80 transition-transform duration-300 ${index === currentSlide ? 'scale-100' : 'scale-90 hidden'}`}
                    >
                        <img src={slide.img} alt={slide.title} className="w-full h-48 object-cover" />
                        <div className="p-4">
                            <div className="absolute top-4 left-4 bg-gray-300 rounded-full p-2 text-2xl">{slide.icon}</div>
                            <h3 className="text-lg font-semibold mt-8">{slide.title}</h3>
                            <p className="text-gray-600">{slide.description}</p>
                            <div className="mt-4 text-blue-600 cursor-pointer">→</div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Carousel Dots */}
            <div className="flex justify-center mt-6">
                {slides.map((_, index) => (
                    <span
                        key={index}
                        className={`w-3 h-3 rounded-full mx-1 cursor-pointer ${index === currentSlide ? 'bg-blue-600' : 'bg-gray-300'}`}
                        onClick={() => handleDotClick(index)}
                    ></span>
                ))}
            </div>

            {/* Next/Previous buttons */}
            <div className="flex justify-between mt-4">
                <button
                    className="px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700"
                    onClick={() => setCurrentSlide((currentSlide - 1 + slides.length) % slides.length)}
                >
                    Previous
                </button>
                <button
                    className="px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700"
                    onClick={() => setCurrentSlide((currentSlide + 1) % slides.length)}
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default BusinessSection;
