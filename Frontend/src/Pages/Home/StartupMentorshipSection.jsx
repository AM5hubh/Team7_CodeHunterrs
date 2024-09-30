// import React, { useState } from 'react';

// const StartupMentorshipSection = () => {
//     const [formData, setFormData] = useState({
//         name: '',
//         email: '',
//         role: '',
//         message: ''
//     });

//     const handleChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log('Form submitted:', formData);
//         // Here you would typically send the data to a server
//     };

//     return (
//         <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-16">
//             <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//                 <div className="bg-white shadow-2xl rounded-lg overflow-hidden">
//                     <div className="md:flex">
//                         <div className="md:w-1/2 p-8 bg-gray-50">
//                             <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-6">Startups/Mentorship Program</h2>
//                             <p className="text-lg mb-4">Support for Startups or looking for mentors from the community?</p>
//                             <p className="text-xl font-semibold text-purple-600 mb-6">Contact us: startup.support@example.com</p>
//                             <div className="hidden md:block">
//                                 <img src="https://via.placeholder.com/400x300" alt="Mentorship" className="rounded-lg shadow-md" />
//                             </div>
//                         </div>
//                         <div className="md:w-1/2 p-8">
//                             <form onSubmit={handleSubmit} className="space-y-6">
//                                 <div>
//                                     <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
//                                     <input
//                                         type="text"
//                                         id="name"
//                                         name="name"
//                                         value={formData.name}
//                                         onChange={handleChange}
//                                         className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
//                                         required
//                                     />
//                                 </div>
//                                 <div>
//                                     <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
//                                     <input
//                                         type="email"
//                                         id="email"
//                                         name="email"
//                                         value={formData.email}
//                                         onChange={handleChange}
//                                         className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
//                                         required
//                                     />
//                                 </div>
//                                 <div>
//                                     <label htmlFor="role" className="block text-sm font-medium text-gray-700">Role</label>
//                                     <select
//                                         id="role"
//                                         name="role"
//                                         value={formData.role}
//                                         onChange={handleChange}
//                                         className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
//                                         required
//                                     >
//                                         <option value="">Select your role</option>
//                                         <option value="startup">Startup Founder</option>
//                                         <option value="mentor">Potential Mentor</option>
//                                         <option value="other">Other</option>
//                                     </select>
//                                 </div>
//                                 <div>
//                                     <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
//                                     <textarea
//                                         id="message"
//                                         name="message"
//                                         value={formData.message}
//                                         onChange={handleChange}
//                                         rows="4"
//                                         className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
//                                         required
//                                     ></textarea>
//                                 </div>
//                                 <button
//                                     type="submit"
//                                     className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-4 rounded-md hover:from-blue-700 hover:to-purple-700 transition duration-300 font-medium text-lg"
//                                 >
//                                     Submit
//                                 </button>
//                             </form>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default StartupMentorshipSection;


import React, { useState } from 'react';

const StartupMentorshipSection = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        role: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Here you would typically send the data to a server
    };

    return (
        <div className="bg-gray-100 py-12"> {/* Changed the background color and decreased the height */}
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white shadow-2xl rounded-lg overflow-hidden">
                    <div className="md:flex">
                        <div className="md:w-1/2 p-8 bg-gray-50">
                            <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-6">Startups/Mentorship Program</h2>
                            <p className="text-lg mb-4">Support for Startups or looking for mentors from the community?</p>
                            <p className="text-xl font-semibold text-purple-600 mb-6">Contact us: startup.support@example.com</p>
                            <div className="hidden md:block">
                                <img src="https://via.placeholder.com/400x300" alt="Mentorship" className="rounded-lg shadow-md" />
                            </div>
                        </div>
                        <div className="md:w-1/2 p-8">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="role" className="block text-sm font-medium text-gray-700">Role</label>
                                    <select
                                        id="role"
                                        name="role"
                                        value={formData.role}
                                        onChange={handleChange}
                                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                        required
                                    >
                                        <option value="">Select your role</option>
                                        <option value="startup">Startup Founder</option>
                                        <option value="mentor">Potential Mentor</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows="4"
                                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                        required
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-4 rounded-md hover:from-blue-700 hover:to-purple-700 transition duration-300 font-medium text-lg"
                                >
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StartupMentorshipSection;
