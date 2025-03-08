import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-5 gap-8">
        
       
        <div>
          <h2 className="text-xl font-semibold mb-4">House of Threads</h2>
          <p className="text-gray-400">
            We bring you the latest fashion trends with high-quality outfits and accessories.
          </p>
        </div>

       
        <div>
          <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-2">
            <li><Link to="/shop" className="text-gray-400 hover:text-white">Shop</Link></li>
            <li><Link to="/about" className="text-gray-400 hover:text-white">About</Link></li>
            <li><Link to="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
            <li><Link to="/faq" className="text-gray-400 hover:text-white">FAQ</Link></li>
          </ul>
        </div>

       
        <div>
          <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
          <p className="text-gray-400">Email: support@Houseofthreads.com</p>
          <p className="text-gray-400">Phone: +971529824652 | +19046662804</p>
          <p className="text-gray-400">Location: Dubai, UAE</p>
        </div>

        
        <div>
          <h2 className="text-xl font-semibold mb-4">Follow Us</h2>
          <div className="flex space-x-4">
            <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-700 hover:bg-blue-500 transition">
              <FaFacebookF className="text-white text-lg" />
            </a>
            <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-700 hover:bg-blue-400 transition">
              <FaTwitter className="text-white text-lg" />
            </a>
            <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-700 hover:bg-pink-500 transition">
              <FaInstagram className="text-white text-lg" />
            </a>
            <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-700 hover:bg-blue-600 transition">
              <FaLinkedinIn className="text-white text-lg" />
            </a>
          </div>
        </div>

     
        <div>
          <h2 className="text-xl font-semibold mb-4">Subscribe to Our Newsletter</h2>
          <p className="text-gray-400 mb-4">Get the latest updates and exclusive offers.</p>
          <form className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-2 rounded-l-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-blue-500"
            />
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-r-md transition">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      
      <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
        &copy; {new Date().getFullYear()} House of Threads. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
