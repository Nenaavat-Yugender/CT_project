import { useEffect, useState } from 'react';
import { makeReservation, getUserReservations } from '../services/api';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Reservations = () => {
    const [form, setForm] = useState({ restaurantId: '', date: '', time: '' });
    const [reservations, setReservations] = useState([]);

    useEffect(() => {
        (async () => {
            const res = await getUserReservations();
            setReservations(res.data);
        })();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        await makeReservation(form);
        const res = await getUserReservations();
        setReservations(res.data);
        setForm({ restaurantId: '', date: '', time: '' });
    };

    return (
        <>
            <Navbar />

            <div className=" bg-gray-900 text-white min-h-screen p-6">
                <div>
                    <h2 className="text-2xl font-bold mb-4">Book a Table</h2>
                    <form onSubmit={handleSubmit} className="space-y-4 bg-gray-800 p-4 rounded shadow-md max-w-md">
                        <input type="text" placeholder="Restaurant ID" value={form.restaurantId}
                            onChange={(e) => setForm({ ...form, restaurantId: e.target.value })}
                            className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600" required />
                        <input type="date" value={form.date}
                            onChange={(e) => setForm({ ...form, date: e.target.value })}
                            className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600" required />
                        <input type="time" value={form.time}
                            onChange={(e) => setForm({ ...form, time: e.target.value })}
                            className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600" required />
                        <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">Reserve</button>
                    </form>
                </div>

                <div>
                    <h3 className="text-xl font-semibold mt-8 mb-4">Your Reservations</h3>
                    <ul className="space-y-3">
                        {reservations.map((res, idx) => (
                            <li key={idx} className="bg-gray-800 p-4 rounded">
                                📍 Restaurant: {res.restaurantId} | 📅 {res.date} at {res.time}
                            </li>
                        ))}
                    </ul>
                </div>

            </div>
            <Footer />
        </>
    );
};

export default Reservations;