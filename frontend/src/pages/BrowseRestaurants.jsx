import { useEffect, useState } from 'react';
import { getAllRestaurants } from '../services/api';
import RestaurantCard from '../components/RestaurantCard';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const BrowseRestaurants = () => {
    const [restaurants, setRestaurants] = useState([]);

    useEffect(() => {
        (async () => {
            const res = await getAllRestaurants();
            setRestaurants(res.data);
        })();
    }, []);

    return (
        <>
            <Navbar />

            <div className="bg-gray-900 text-white min-h-screen">
                <h2 className="text-2xl font-bold mb-6 text-center pt-6">Available Restaurants</h2>
                <div className="grid gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {restaurants.map((rest) => (
                        <Link key={rest._id} to={`/restaurant/${rest._id}`}>
                            <RestaurantCard restaurant={rest} />
                        </Link>
                    ))}
                </div>
            </div>

            <Footer />
        </>
    );
};

export default BrowseRestaurants;