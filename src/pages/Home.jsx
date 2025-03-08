import { FiShoppingBag } from "react-icons/fi";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { sliderImages, categories, reviews, products } from "../assets/assets";


const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 1 },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const Home = () => {
  return (
    <div className="bg-gray-50">
      
      <section className="relative h-screen">
        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop
          className="h-full"
        >
          {sliderImages.map((image, index) => (
            <SwiperSlide key={index} className="relative">
              <img src={image} alt="Fashion Slide" className="w-full h-screen object-cover" />
              <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white text-center px-6">
                <motion.h1
                  className="text-6xl font-extrabold mb-4 "
                  initial={{ opacity: 0, y: -50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  Elevate Your Style
                </motion.h1>
                <motion.p
                  className="text-xl mb-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                >
                  Discover the latest trends in fashion.
                </motion.p>
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.5, ease: "easeOut" }}
                >
                  <Link
                    to="/shop"
                    className="bg-blue-500 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-600 transition"
                  >
                    Shop Now
                  </Link>
                </motion.div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      
      <section className="py-16">
        <h2 className="text-3xl font-bold text-center mb-10">Shop by Category</h2>
        <motion.div
  className="grid grid-cols-1 md:grid-cols-3 gap-6 container mx-auto px-6"
  variants={staggerContainer}
  initial="hidden"
  animate="visible"
>
  {categories.map((category) => (
    <motion.div 
      key={category.name} 
      variants={fadeInUp} 
      whileHover={{ y: -5, boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.15)" }}
      className="relative overflow-hidden rounded-lg transition"
    >
      <Link to={`/shop/${category.name.toLowerCase()}`} className="block">
        <img src={category.image} alt={category.name} className="rounded-lg w-full h-72 object-cover" />
        <motion.div
          className="absolute inset-0 bg-black/40 flex items-center justify-center text-white text-2xl font-semibold transition"
        >
          {category.name}
        </motion.div>
      </Link>
    </motion.div>
  ))}
</motion.div>

      </section>

      
      <section className="py-16 bg-white">
        <h2 className="text-3xl font-bold text-center mb-10">Trending Now</h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 container mx-auto px-6"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {products.map((product) => (
            <motion.div
              key={product.id}
              className="bg-gray-100 rounded-lg p-4 shadow-md hover:shadow-lg transition"
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
            >
              <img src={product.image} alt={product.name} className="rounded-lg w-full h-64 object-cover mb-4" />
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="text-gray-600">{product.price}</p>
              <motion.button
                className="mt-3 flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiShoppingBag /> Add to Cart
              </motion.button>
            </motion.div>
          ))}
        </motion.div>
      </section>

      
      <section className="py-16 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-10">What Our Customers Say</h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 container mx-auto px-6"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {reviews.map((review) => (
            <motion.div
              key={review.id}
              className="bg-white p-6 rounded-lg shadow-md text-center"
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
            >
              <p className="text-gray-600">"{review.text}"</p>
              <h4 className="mt-4 font-semibold">- {review.customer}</h4>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
