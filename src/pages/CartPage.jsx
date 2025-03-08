import { useCart } from "../context/CartContext";

const CartPage = () => {
  const { cart } = useCart();

  return (
    <div className="container mx-auto py-10 px-6">
      <h2 className="text-3xl font-bold text-center mb-6">Shopping Cart</h2>
      {cart.length === 0 ? (
        <p className="text-center text-gray-600">Your cart is empty.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cart.map((item) => (
            <div key={item.id} className="bg-white p-4 rounded-lg shadow-md flex items-center">
              <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded-md" />
              <div className="ml-4">
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="text-gray-600">${item.price} x {item.quantity}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CartPage;
