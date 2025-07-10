import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import BrowseRestaurants from './pages/BrowseRestaurants';
import RestaurantDetails from './pages/RestaurantDetails';
import Cart from './pages/Cart';
import Reservations from './pages/Reservations';
import Orders from './pages/Orders';
import Login from './pages/Login';
import Signup from './pages/Signup';

const App = () => {

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.botframework.com/botframework-webchat/latest/webchat.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="bg-gray-900 min-h-screen flex flex-col">
      {/* <Navbar /> */}
      <main className="flex-grow">
        <Routes>
          {/* All Routes Public for Now */}
          <Route path="/" element={<Home />} />
          <Route path="/restaurants" element={<BrowseRestaurants />} />
          <Route path="/restaurant/:id" element={<RestaurantDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/reservations" element={<Reservations />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          {/* Fallback */}
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default App;
