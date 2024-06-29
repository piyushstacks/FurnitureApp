// Orders.jsx

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Orders = () => {
    const [bookings, setBookings] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchBookings = async () => {
            try {
                const token = localStorage.getItem('token'); // Assuming token stored in localStorage
                const response = await axios.get('/bookings');
                setBookings(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching bookings:', error);
                setError('Error fetching bookings. Please try again later.');
                setLoading(false);
            }
        };

        fetchBookings();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div>
            <h1>Your Bookings</h1>
            {bookings.length === 0 ? (
                <p>No bookings found.</p>
            ) : (
                <ul>
                    {bookings.map(booking => (
                        <div key={booking._id} className="border rounded-md p-4 mb-4">
                            <p>Furniture: {booking.furniture.name}</p>
                            <p>Start Date: {new Date(booking.startDate).toLocaleDateString()}</p>
                            <p>End Date: {new Date(booking.endDate).toLocaleDateString()}</p>
                            <p>Status: {booking.status}</p>
                        </div>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Orders;
