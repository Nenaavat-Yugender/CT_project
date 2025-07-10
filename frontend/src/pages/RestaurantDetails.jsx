import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getRestaurantById, getMenuByRestaurant } from '../services/api';
import MenuItem from '../components/MenuItem';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const RestaurantDetails = () => {
    const { id } = useParams();
    const [restaurant, setRestaurant] = useState(null);
    const [menu, setMenu] = useState([]);

    useEffect(() => {
        (async () => {
            const res = await getRestaurantById(id);
            setRestaurant(res.data);
            const menuRes = await getMenuByRestaurant(id);
            setMenu(menuRes.data);
        })();
    }, [id]);

    const addToCart = (item) => {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.push(item);
        localStorage.setItem('cart', JSON.stringify(cart));
    };

    if (!restaurant) return <div className="text-white p-6">Loading...</div>;

    return (
        <>
            <Navbar />

            <div className="bg-gray-900 text-white min-h-screen p-6">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold mb-2">{restaurant.name}</h1>
                    <p className="text-gray-400">{restaurant.cuisine} | {restaurant.location}</p>
                </div>
                <h2 className="text-2xl font-semibold mb-4">Menu</h2>
                <div>
                    {menu.map(item => (
                        <MenuItem key={item._id} item={item} addToCart={addToCart} />
                    ))}
                </div>
            </div>
            <Footer />
        </>
    );
};

export default RestaurantDetails;