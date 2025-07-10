import { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Cart = () => {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const stored = JSON.parse(localStorage.getItem('cart')) || [];
        setCart(stored);
    }, []);

    const total = cart.reduce((sum, item) => sum + item.price, 0);

    return (
        <>
            <Navbar />

            <div className="bg-gray-900 text-white min-h-screen p-6">
                <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
                {cart.length === 0 ? <p>No items in cart.</p> : (
                    <div className="space-y-3">
                        {cart.map((item, idx) => (
                            <div key={idx} className="bg-gray-800 p-4 rounded shadow-md">
                                <h4 className="font-semibold">{item.name}</h4>
                                <p className="text-gray-400">₹{item.price}</p>
                            </div>
                        ))}
                        <p className="text-lg font-bold pt-4">Total: ₹{total}</p>
                        <button className="mt-4 px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700">
                            Place Order
                        </button>
                    </div>
                )}
            </div>

            <Footer />
        </>
    );
};

export default Cart;
