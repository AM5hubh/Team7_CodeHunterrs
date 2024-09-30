import React from 'react';

const BusinessSection = () => {
    const cards = [
        {
            title: "Startups/Mentorship",
            description: "Support for the Startups or looking for mentors from the community?",
            icon: "🚀",
            img: "/api/placeholder/300/200?text=Startups",
        },
        {
            title: "Partner With Us",
            description: "We work with companies and tailor programs to get visibility within our community.",
            icon: "🤝",
            img: "/api/placeholder/300/200?text=Partnership",
        },
        {
            title: "Passing Through Singapore",
            description: "Please share your schedule, and we will arrange a networking session.",
            icon: "✈️",
            img: "/api/placeholder/300/200?text=Singapore",
        },
        {
            title: "Community Events",
            description: "Join our upcoming community events to meet and learn from each other.",
            icon: "🎉",
            img: "/api/placeholder/300/200?text=Events",
        },
    ];

    return (
        <div className="py-10 px-4 max-w-6xl mx-auto bg-[#ede8f5]">
            <h5 className="text-[#3d52a0] uppercase tracking-wider font-bold text-center">BUSINESS</h5>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 text-[#3d52a0] text-center">ENGAGING WITH IITAS COMMUNITY</h1>

            <div className="flex  sm:grid overflow-x-auto sm:grid-cols-2 lg:grid-cols-4 gap-6 pb-4 sm:pb-0">
                {cards.map((card, index) => (
                    <div
                        key={index}
                        className="flex-shrink-0 w-[280px] sm:w-auto bg-white border border-[#adbbda] rounded-xl overflow-hidden transition-all duration-300 transform hover:scale-95 hover:shadow-xl"
                    >
                        <div className="relative">
                            <img
                                src={card.img}
                                alt={card.title}
                                className="w-full h-48 object-cover"
                            />
                            <div className="absolute top-4 left-4 bg-[#ede8f5] bg-opacity-75 rounded-full p-2 text-2xl">
                                {card.icon}
                            </div>
                        </div>
                        <div className="p-4 flex flex-col h-[calc(100%-192px)]">
                            <h3 className="text-xl font-bold text-[#3d52a0] mb-2">{card.title}</h3>
                            <p className="text-sm text-[#8697c4] mb-4 flex-grow">{card.description}</p>
                            <button className="w-full bg-[#7091e5] text-white rounded-full py-2 px-4 transition-colors duration-300 hover:bg-[#3d52a0] focus:outline-none focus:ring-2 focus:ring-[#3d52a0] focus:ring-opacity-50">
                                Learn More
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BusinessSection;

