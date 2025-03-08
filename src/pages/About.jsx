import { Link } from "react-router-dom";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <div>
    
      <section
        className="relative bg-cover bg-center h-[400px] flex items-center justify-center text-white text-center px-6"
        style={{ backgroundImage: `url(${assets.aboutImg})` }}
      >
        <div className="bg-black bg-opacity-50 p-8 rounded-lg">
          <h1 className="text-4xl font-bold md:text-5xl">About Us</h1>
          <p className="mt-3 text-lg max-w-2xl">
            Learn more about our journey, mission, and the dedicated team behind our success.
          </p>
        </div>
      </section>

   
      <section className="container mx-auto py-16 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-4">Our Story</h2>
        <p className="text-gray-700 max-w-3xl mx-auto">
          Founded in 2015, our company started with a simple vision: to revolutionize the way people interact 
          with technology. Over the years, we've grown from a small startup into an industry leader, 
          delivering cutting-edge solutions to clients worldwide.
        </p>
      </section>

      
     
      <section className="bg-blue-600 text-white py-16 text-center">
        <h2 className="text-3xl font-semibold mb-4">Let's Build the Future Together</h2>
        <p className="max-w-3xl mx-auto text-lg mb-6">
          Whether you're looking for a tech partner, career opportunity, or just want to learn more about us, 
          we'd love to hear from you.
        </p>
        <Link to="/contact">
          <button className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-md hover:bg-gray-100">
            Contact Us
          </button>
        </Link>
      </section>
    </div>
  );
};

export default About;
