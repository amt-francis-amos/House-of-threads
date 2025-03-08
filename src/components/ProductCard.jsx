const ProductCard = ({ product }) => {
  return (
    <div className="border rounded-lg p-4 shadow-md hover:shadow-lg">
      <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded-md" />
      <h2 className="mt-2 font-semibold">{product.name}</h2>
      <p className="text-gray-500">${product.price}</p>
      <button className="bg-blue-500 text-white px-4 py-2 mt-2 rounded-lg">Add to Cart</button>
    </div>
  );
};

export default ProductCard;
