import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";

const Contact = () => {
  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <section className="relative bg-blue-600 text-white py-20 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Get in Touch with Us
          </h1>
          <p className="mt-4 text-lg">
            We’d love to hear from you! Reach out for inquiries, partnerships, or just a chat.
          </p>
        </div>
      </section>

      {/* Contact Details Section */}
      <section className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Contact Details</h2>
            <p className="text-gray-600 mb-6">
              Feel free to contact us via phone, email, or visit our office. We are available during business hours.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gray-700">
                <FiMapPin className="text-blue-600 text-xl" />
                <span>123 Fashion Street, Accra, Ghana</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <FiPhone className="text-blue-600 text-xl" />
                <span>+233 24 567 8901</span>
              </div>
              <div className="flex items-center gap-3 text-gray-700">
                <FiMail className="text-blue-600 text-xl" />
                <span>info@fashionhub.com</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Send Us a Message</h2>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <input
                type="text"
                placeholder="Subject"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              <textarea
                rows="4"
                placeholder="Your Message"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              ></textarea>
              <button className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
