import { useParams } from "react-router-dom";
import { products } from "../assets/assets";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Shop = () => {
  const { category } = useParams();
  const filteredProducts = category 
    ? products.filter((product) => product.category.toLowerCase() === category.toLowerCase()) 
    : products;

  return (
    <div className="container mx-auto py-10 px-6">
      <h2 className="text-3xl font-bold text-center mb-6">
        {category ? category.toUpperCase() : "All Products"}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <motion.div 
            key={product.id} 
            whileHover={{ y: -5, boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.15)" }}
            className="bg-white p-4 rounded-lg shadow-md"
          >
            <Link to={`/product/${product.id}`}>
              <img src={product.image} alt={product.name} className="w-full h-64 object-cover rounded-md" />
            </Link>
            <div className="mt-4 text-center">
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="text-gray-600">${product.price}</p>
              <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
                Add to Cart
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
