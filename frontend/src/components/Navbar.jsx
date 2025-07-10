import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 shadow-md py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <Link to="/" className="text-xl font-bold text-white">
          🍽️ FoodBot
        </Link>
        <ul className="flex space-x-6 text-gray-300 font-medium">
          <li><Link to="/restaurants" className="hover:text-white">Restaurants</Link></li>
          <li><Link to="/reservations" className="hover:text-white">Reservations</Link></li>
          <li><Link to="/orders" className="hover:text-white">Orders</Link></li>
          <li><Link to="/cart" className="hover:text-white">Cart</Link></li>
          <li><Link to="/login" className="hover:text-white">Login</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;