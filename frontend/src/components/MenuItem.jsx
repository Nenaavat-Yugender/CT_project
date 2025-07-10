const MenuItem = ({ item, addToCart }) => {
  return (
    <div className="flex items-center justify-between p-4 bg-gray-800 shadow-sm rounded-md mb-3">
      <div>
        <h4 className="text-md font-semibold text-white">{item.name}</h4>
        <p className="text-sm text-gray-400">{item.description}</p>
      </div>
      <div className="text-right">
        <p className="text-md font-bold text-green-400">₹{item.price}</p>
        <button onClick={() => addToCart(item)} className="mt-2 px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600">
          Add
        </button>
      </div>
    </div>
  );
};

export default MenuItem;
