// UserCards.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserCards = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fetch users data from the backend
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/v1/users/all-users'); // Your API endpoint
                setUsers(response.data.data); // Assuming your ApiResponse structure has 'data' field
            } catch (err) {
                setError('Failed to fetch users');
            } finally {
                setLoading(false);
            }
        };

        fetchUsers();
    }, []);

    if (loading) return <p className="text-center">Loading users...</p>;
    if (error) return <p className="text-center text-red-500">{error}</p>;

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
            {users.map(user => (
                <div key={user._id} className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105">
                    <div className="p-6">
                        <h3 className="text-xl font-bold text-blue-600">{user.fullname}</h3>
                        <p className="text-gray-700">Email: <span className="font-medium">{user.email}</span></p>
                        <p className="text-gray-700">Education: <span className="font-medium">{user.education}</span></p>
                        <p className="text-gray-700">Location: <span className="font-medium">{user.location}</span></p>
                        <p className="text-gray-700">Year of Passout: <span className="font-medium">{user.yearOfPassout}</span></p>
                        <p className="text-gray-700">Profession: <span className="font-medium">{user.profession}</span></p>
                        <p className="text-gray-700">Phone: <span className="font-medium">{user.phone}</span></p>
                        <p className="text-gray-700">Verified: <span className="font-medium text-green-500">{user.verified ? 'Yes' : 'No'}</span></p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default UserCards;
