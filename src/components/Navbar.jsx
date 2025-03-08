import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiMenu, FiX, FiSearch, FiShoppingCart } from "react-icons/fi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop" },
    { name: "Products", path: "/products" },
    { name: "About", path: "/about" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="bg-white h-[88px] shadow-md fixed w-full z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        

        <Link to="/" className="text-2xl font-bold text-gray-800">
          House of <span className="text-blue-500">Threads</span>
        </Link>

       
        <div className="hidden md:flex items-center bg-gray-100 px-3 py-2 rounded-lg">
          <FiSearch className="text-gray-500 mr-2" size={20} />
          <input
            type="text"
            placeholder="Search for products..."
            className="bg-transparent outline-none text-gray-700 w-64"
          />
        </div>

       
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
              <span
                className={`absolute left-0 bottom-[-3px] w-full h-[2px] bg-blue-500 transition-transform ${
                  location.pathname === item.path ? "scale-x-100" : "scale-x-0"
                } hover:scale-x-100 origin-left`}
              ></span>
            </Link>
          ))}
          
       
          <Link to="/cart" className="relative">
            <FiShoppingCart size={24} />
            <span className="absolute -top-1.5 -right-1.5 bg-red-500 text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
              2
            </span>
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
              Cart
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
