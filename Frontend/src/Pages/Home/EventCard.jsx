import React, { useState } from 'react';
import { Calendar, Info, ArrowRight } from 'lucide-react';

const EventCard = () => {
    const [showAllEvents, setShowAllEvents] = useState(false);

    const handleViewAll = () => {
        setShowAllEvents(!showAllEvents);
    };

    return (
        <div className="max-w-4xl mx-auto py-4 px-4 mt-4 rounded-md" style={{ backgroundColor: '#ede8f5' }}>
            <h1 className="text-2xl font-bold text-center mb-4" style={{ color: '#3d52a0' }}>COLLEGE EVENT</h1>
            <h2 className="text-3xl font-bold text-center mb-6" style={{ color: '#3d52a0' }}>REUNION OF BATCH 2023 - VCET</h2>

            <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-6">
                <div className="md:flex">
                    <div className="md:flex-1 p-6">
                        <h3 className="text-xl font-semibold mb-2" style={{ color: '#3d52a0' }}>Reunion of Batch 2023</h3>
                        <div className="flex items-center mb-4">
                            <Calendar className="mr-2" style={{ color: '#7091e5' }} />
                            <span className="font-bold" style={{ color: '#7091e5' }}>12 DECEMBER 2024</span>
                        </div>
                        <p className="mb-4" style={{ color: '#8697c4' }}>
                            <Info className="inline mr-2" />
                            Register to participate
                        </p>
                        <p className="mb-4" style={{ color: '#8697c4' }}>4:00 PM - 9:00 PM</p>
                        <div className="flex space-x-4">
                            <button className="text-white px-4 py-2 rounded transition"
                                style={{ backgroundColor: '#7091e5', hover: { backgroundColor: '#3d52a0' } }}>
                                REGISTER NOW
                            </button>
                            <button className="text-white px-4 py-2 rounded transition flex items-center"
                                style={{ backgroundColor: '#7091e5', hover: { backgroundColor: '#3d52a0' } }}>
                                KNOW MORE <ArrowRight className="ml-2" />
                            </button>
                        </div>
                    </div>
                    <div className="md:w-1/3 p-6 flex items-center justify-center" style={{ backgroundColor: '#3d52a0' }}>
                        <div className="text-white text-center">
                            <h3 className="text-2xl font-bold mb-2">Reunion of Batch 2023</h3>
                            {/* <img src="/api/placeholder/100/100" alt="Reunion icon" className="mx-auto rounded-full" /> */}
                        </div>
                    </div>
                </div>
            </div>

            {showAllEvents && (
                <>
                    {/* Event 2 */}
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-6">
                        <div className="md:flex">
                            <div className="md:flex-1 p-6">
                                <h3 className="text-xl font-semibold mb-2" style={{ color: '#3d52a0' }}>VCET Alumni Panel Discussion</h3>
                                <div className="flex items-center mb-4">
                                    <Calendar className="mr-2" style={{ color: '#7091e5' }} />
                                    <span className="font-bold" style={{ color: '#7091e5' }}>15 JANUARY 2025</span>
                                </div>
                                <p className="mb-4" style={{ color: '#8697c4' }}>
                                    <Info className="inline mr-2" />
                                    Register to participate in a panel discussion with successful alumni from various industries.
                                </p>
                                <p className="mb-4" style={{ color: '#8697c4' }}>2:00 PM - 6:00 PM</p>
                                <div className="flex space-x-4">
                                    <button className="text-white px-4 py-2 rounded transition"
                                        style={{ backgroundColor: '#7091e5', hover: { backgroundColor: '#3d52a0' } }}>
                                        REGISTER NOW
                                    </button>
                                    <button className="text-white px-4 py-2 rounded transition flex items-center"
                                        style={{ backgroundColor: '#7091e5', hover: { backgroundColor: '#3d52a0' } }}>
                                        KNOW MORE <ArrowRight className="ml-2" />
                                    </button>
                                </div>
                            </div>
                            <div className="md:w-1/3 p-6 flex items-center justify-center" style={{ backgroundColor: '#3d52a0' }}>
                                <div className="text-white text-center">
                                    <h3 className="text-2xl font-bold mb-2">Alumni Panel Discussion</h3>
                                    {/* <img src="/api/placeholder/100/100" alt="Panel discussion icon" className="mx-auto rounded-full" /> */}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Event 3 */}
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                        <div className="md:flex">
                            <div className="md:flex-1 p-6">
                                <h3 className="text-xl font-semibold mb-2" style={{ color: '#3d52a0' }}>VCET Alumni Networking Event</h3>
                                <div className="flex items-center mb-4">
                                    <Calendar className="mr-2" style={{ color: '#7091e5' }} />
                                    <span className="font-bold" style={{ color: '#7091e5' }}>10 FEBRUARY 2025</span>
                                </div>
                                <p className="mb-4" style={{ color: '#8697c4' }}>
                                    <Info className="inline mr-2" />
                                    Connect with fellow alumni, exchange ideas, and expand your professional network.
                                </p>
                                <p className="mb-4" style={{ color: '#8697c4' }}>5:00 PM - 9:00 PM</p>
                                <div className="flex space-x-4">
                                    <button className="text-white px-4 py-2 rounded transition"
                                        style={{ backgroundColor: '#7091e5', hover: { backgroundColor: '#3d52a0' } }}>
                                        REGISTER NOW
                                    </button>
                                    <button className="text-white px-4 py-2 rounded transition flex items-center"
                                        style={{ backgroundColor: '#7091e5', hover: { backgroundColor: '#3d52a0' } }}>
                                        KNOW MORE <ArrowRight className="ml-2" />
                                    </button>
                                </div>
                            </div>
                            <div className="md:w-1/3 p-6 flex items-center justify-center" style={{ backgroundColor: '#3d52a0' }}>
                                <div className="text-white text-center">
                                    <h3 className="text-2xl font-bold mb-2">Alumni Networking Event</h3>
                                    {/* <img src="/api/placeholder/100/100" alt="Networking event icon" className="mx-auto rounded-full" /> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}

            <div className="text-center mt-6">
                <button onClick={handleViewAll} className="text-white px-6 py-2 rounded transition"
                    style={{ backgroundColor: '#3d52a0', hover: { backgroundColor: '#7091e5' } }}>
                    {showAllEvents ? 'VIEW LESS EVENTS' : 'VIEW ALL EVENTS'}
                </button>
            </div>
        </div>
    );
};

export default EventCard;
