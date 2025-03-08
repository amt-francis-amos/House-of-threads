import { useParams, Link } from "react-router-dom";
import { products, categories } from "../assets/assets"; 
import { FiShoppingBag } from "react-icons/fi";

const ProductDetails = () => {
  const { id, category } = useParams(); // Get params

  if (id) {
    // Display Product Details
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

            <Link to="/shop" className="block mt-6 text-blue-500 hover:underline">
              ← Back to Shop
            </Link>
          </div>
        </div>
      </div>
    );
  }

  if (category) {
    // Display Category Page
    const categoryData = categories.find((c) => c.name.toLowerCase() === category.toLowerCase());

    if (!categoryData) {
      return <h2 className="text-center text-2xl mt-10">Category Not Found</h2>;
    }

    return (
      <div className="container mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold mb-6">Shop: {categoryData.name}</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products
            .filter((p) => p.category.toLowerCase() === category.toLowerCase())
            .map((p) => (
              <Link key={p.id} to={`/product/${p.id}`} className="block">
                <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition">
                  <img src={p.image} alt={p.name} className="w-full h-48 object-cover rounded-lg mb-4" />
                  <h2 className="text-xl font-semibold">{p.name}</h2>
                  <p className="text-blue-600 font-semibold">{p.price}</p>
                </div>
              </Link>
            ))}
        </div>

        <Link to="/shop" className="block mt-6 text-blue-500 hover:underline">
          ← Back to Shop
        </Link>
      </div>
    );
  }

  return <h2 className="text-center text-2xl mt-10">Invalid Page</h2>;
};

export default ProductDetails;
