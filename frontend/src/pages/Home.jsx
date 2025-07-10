import ChatBot from '../components/ChatBot';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <Navbar />

      <div className="text-white bg-gray-900 min-h-screen">
        <section className="text-center py-20 px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to FoodBot 🍽️</h1>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Discover, reserve, and order from your favorite restaurants — all in one smart conversation.
          </p>
          <Link to="/restaurants" className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
            Explore Restaurants
          </Link>
        </section>
        <ChatBot />
      </div>
      <Footer />
    </>


  );
};

export default Home;
