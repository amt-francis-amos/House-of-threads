import { useParams } from "react-router-dom";
import { products } from "../assets/assets";
import { Link } from "react-router-dom";

const CategoryPage = () => {
  const { category } = useParams();
  const formattedCategory = category.replace(/-/g, " "); // Convert URL format back to normal

  console.log("Selected category:", formattedCategory);

  const filteredProducts = products.filter(
    (product) => product.category && product.category.toLowerCase() === formattedCategory.toLowerCase()
  );

  console.log("Filtered products:", filteredProducts);

  return (
    <div className="container mx-auto py-10 px-6">
      <h2 className="text-3xl font-bold text-center mb-6">{formattedCategory.toUpperCase()}</h2>
      {filteredProducts.length === 0 ? (
        <p className="text-center text-gray-500">No products available in this category.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <div key={product.id} className="bg-white p-4 rounded-lg shadow-md">
              <img src={product.image} alt={product.name} className="w-full h-64 object-cover rounded-md" />
              <div className="mt-4 text-center">
                <h3 className="text-lg font-semibold">{product.name}</h3>
                <p className="text-gray-600">${product.price}</p>
                <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryPage;
