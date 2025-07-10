const RestaurantCard = ({ restaurant }) => {
  return (
    <div className="bg-gray-800 shadow-md rounded-lg overflow-hidden hover:shadow-lg transition duration-300">
      <img src={restaurant.image} alt={restaurant.name} className="w-full h-40 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-bold text-white">{restaurant.name}</h3>
        <p className="text-gray-400">{restaurant.cuisine} • {restaurant.location}</p>
        <p className="text-sm text-yellow-400">⭐ {restaurant.rating}</p>
      </div>
    </div>
  );
};

export default RestaurantCard;
