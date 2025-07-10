import { useEffect, useState } from 'react';
import { getUserOrders } from '../services/api';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Orders = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        (async () => {
            const res = await getUserOrders();
            setOrders(res.data);
        })();
    }, []);

    return (
        <>
            <Navbar />

            <div className="bg-gray-900 text-white min-h-screen p-6">
                <h2 className="text-2xl font-bold mb-6">Your Orders</h2>
                {orders.length === 0 ? (
                    <p>No past orders found.</p>
                ) : (
                    <div className="space-y-4">
                        {orders.map((order, idx) => (
                            <div key={idx} className="bg-gray-800 p-4 rounded">
                                <p className="font-semibold">Order #{order._id}</p>
                                <p className="text-sm text-gray-400">Items: {order.items.map(i => i.name).join(', ')}</p>
                                <p className="text-sm">Total: ₹{order.total} | Status: {order.status}</p>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            <Footer />
        </>
    );
};

export default Orders;
