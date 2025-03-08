import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
import { FiTrash2 } from "react-icons/fi";
import { assets } from "../assets/assets";

const CartPage = () => {
  const { cart, addToCart, removeFromCart, decreaseQuantity, getTotalPrice } = useCart();

  return (
    <div>
   
      <div className="relative bg-cover bg-center h-[300px] md:h-[400px] flex items-center justify-center text-white text-center"
        style={{ backgroundImage: `url(${assets.cartImg})` }}>
        <div className="bg-black bg-opacity-50 px-6 py-8 rounded-lg">
          <h1 className="text-4xl font-bold">Your Shopping Cart</h1>
          <p className="mt-2 text-lg">Review your items and proceed to checkout</p>
        </div>
      </div>

   
      <div className="container mx-auto py-10 px-6">
        {cart.length === 0 ? (
          <p className="text-center text-gray-600 text-xl">Your cart is empty.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {cart.map((item) => (
              <div key={item.id} className="bg-white p-4 rounded-lg shadow-md flex items-center">
                <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded-md" />
                <div className="ml-4 flex-1">
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <p className="text-gray-600">${item.price.toFixed(2)}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <button 
                      onClick={() => decreaseQuantity(item.id)}
                      className="px-3 py-1 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300">
                      -
                    </button>
                    <span className="text-lg">{item.quantity}</span>
                    <button 
                      onClick={() => addToCart(item)}
                      className="px-3 py-1 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300">
                      +
                    </button>
                  </div>
                </div>
                <button 
                  onClick={() => removeFromCart(item.id)}
                  className="ml-auto text-red-500 hover:text-red-700">
                  <FiTrash2 size={20} />
                </button>
              </div>
            ))}
          </div>
        )}

    
        {cart.length > 0 && (
          <div className="mt-8 p-6 bg-gray-100 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold">Total: ${getTotalPrice().toFixed(2)}</h3>
            <Link to="/checkout">
              <button className="mt-4 px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700">
                Proceed to Checkout
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;
