import { useState, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiMenu, FiX, FiSearch, FiShoppingCart } from "react-icons/fi";
import { products } from "../assets/assets"; 
import { CartContext } from "../context/CartContext"; // Import the cart context

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const location = useLocation();
  const { getCartCount } = useContext(CartContext); // Get cart count

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop" },
    { name: "Products", path: "/products" },
    { name: "About", path: "/about" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  // Handle search input change
  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (query.trim() === "") {
      setFilteredProducts([]);
    } else {
      const results = products.filter((product) =>
        product.name.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredProducts(results);
    }
  };

  return (
    <nav className="bg-white h-[88px] shadow-md fixed w-full z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-gray-800">
          House of <span className="text-blue-500">Threads</span>
        </Link>

        {/* Search Bar */}
        <div className="relative hidden md:flex items-center bg-gray-100 px-3 py-2 rounded-lg">
          <FiSearch className="text-gray-500 mr-2" size={20} />
          <input
            type="text"
            placeholder="Search for products..."
            value={searchQuery}
            onChange={handleSearch}
            className="bg-transparent outline-none text-gray-700 w-64"
          />
         
          {searchQuery && (
            <div className="absolute top-full left-0 w-full bg-white shadow-lg rounded-lg mt-1">
              {filteredProducts.length > 0 ? (
                filteredProducts.map((product) => (
                  <Link
                    key={product.id}
                    to={`/product/${product.id}`}
                    className="block px-4 py-2 hover:bg-gray-100 md:flex items-center"
                    onClick={() => setSearchQuery("")} 
                  >
                    <img src={product.image} alt={product.name} className="w-10 h-10 mr-3 object-cover rounded-md" />
                    <span>{product.name}</span>
                  </Link>
                ))
              ) : (
                <p className="px-4 py-2 text-gray-500">No products found</p>
              )}
            </div>
          )}
        </div>

        {/* Nav Links & Cart */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`relative transition text-gray-800 hover:text-blue-500 ${
                location.pathname === item.path ? "text-blue-500 font-semibold" : ""
              }`}
            >
              {item.name}
            </Link>
          ))}
          
          <Link to="/cart" className="relative">
            <FiShoppingCart size={24} />
            {getCartCount() > 0 && (
              <span className="absolute -top-1.5 -right-1.5 bg-red-500 text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
                {getCartCount()}
              </span>
            )}
          </Link>
        </div>

        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white border-t shadow-md absolute w-full left-0 py-4">
          <div className="px-4">
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={handleSearch}
              className="w-full bg-gray-100 px-3 py-2 rounded-lg outline-none"
            />
          </div>
          <div className="flex flex-col mt-4 px-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`py-2 hover:text-blue-500 ${
                  location.pathname === item.path ? "text-blue-500 font-semibold" : ""
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link to="/cart" className="py-2 hover:text-blue-500 flex items-center gap-2">
              <FiShoppingCart size={20} />
              Cart ({getCartCount()})
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
