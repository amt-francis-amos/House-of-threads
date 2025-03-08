import { useParams } from "react-router-dom";
import { products } from "../assets/assets"; 
import { FiShoppingBag } from "react-icons/fi";

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <h2 className="text-center text-2xl mt-10">Product Not Found</h2>;
  }

  return (
    <div className="container mx-auto px-6 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        <img src={product.image} alt={product.name} className="w-full h-auto rounded-lg shadow-lg" />

      
        <div>
          <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
          <p className="text-gray-700 text-lg mb-4">{product.description}</p>
          <p className="text-2xl font-semibold text-blue-600 mb-6">{product.price}</p>

          <button className="flex items-center gap-2 bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition">
            <FiShoppingBag /> Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
