import { useParams } from "react-router-dom";
import { products } from "../assets/assets"; 

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find((item) => item.id.toString() === id);

  if (!product) {
    return <h2 className="text-center text-2xl">Product not found</h2>;
  }

  return (
    <div className="container mx-auto px-6 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 mt-20 gap-10">
        <img src={product.image} alt={product.name} className="w-full rounded-lg" />
        <div>
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="text-gray-700 mt-4">{product.description}</p>
          <p className="text-xl font-semibold mt-4">${product.price}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
