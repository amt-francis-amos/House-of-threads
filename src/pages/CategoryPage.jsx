import { useParams } from "react-router-dom";
import { products } from "../assets/assets";
import { Link } from "react-router-dom";

const CategoryPage = () => {
  const { category } = useParams();
  
  // Normalize category format
  const formattedCategory = category.replace(/-/g, " ").toLowerCase().trim();

  console.log("Selected category:", formattedCategory);

  // Ensure product categories are also normalized
  const filteredProducts = products.filter(
    (product) =>
      product.category &&
      product.category.toLowerCase().trim().replace(/\s+/g, " ") === formattedCategory
  );

  console.log("Filtered products:", filteredProducts);

  return (
    <div className="container mx-auto py-10 px-6">
      <h2 className="text-3xl font-bold text-center mb-6">
        {formattedCategory.toUpperCase()}
      </h2>
      {filteredProducts.length === 0 ? (
        <p className="text-center text-gray-500">
          No products available in this category.
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <div key={product.id} className="bg-white p-4 rounded-lg shadow-md">
              <img src={product.image} alt={product.name} className="w-full h-64 object-cover rounded-lg" />
              <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
              <p className="text-gray-600">${product.price}</p>
              <Link to={`/product/${product.id}`} className="text-blue-500 mt-2 block">
                View Details
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryPage;
