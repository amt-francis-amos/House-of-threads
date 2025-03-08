import { FiShoppingBag } from "react-icons/fi";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


import { sliderImages, categories,reviews, products } from "../assets/assets";



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
                <h1 className="text-6xl font-extrabold mb-4 shadow-xl">Elevate Your Style</h1>
                <p className="text-xl mb-6 shadow-md">Discover the latest trends in fashion.</p>
                <Link
                  to="/shop"
                  className="bg-blue-500 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-600 transition"
                >
                  Shop Now
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

     
      <section className="py-16">
        <h2 className="text-3xl font-bold text-center mb-10">Shop by Category</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 container mx-auto px-6">
          {categories.map((category) => (
            <Link to={`/shop/${category.name.toLowerCase()}`} key={category.name} className="relative group">
              <img src={category.image} alt={category.name} className="rounded-lg w-full h-72 object-cover" />
              <div className="absolute inset-0 bg-black opacity-30 group-hover:bg-opacity-50 transition flex items-center justify-center text-white text-2xl font-semibold">
                {category.name}
              </div>
            </Link>
          ))}
        </div>
      </section>

    
      <section className="py-16 bg-white">
        <h2 className="text-3xl font-bold text-center mb-10">Trending Now</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 container mx-auto px-6">
          {products.map((product) => (
            <div key={product.id} className="bg-gray-100 rounded-lg p-4 shadow-md hover:shadow-lg transition">
              <img src={product.image} alt={product.name} className="rounded-lg w-full h-64 object-cover mb-4" />
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="text-gray-600">{product.price}</p>
              <button className="mt-3 flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
                <FiShoppingBag /> Add to Cart
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-10">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 container mx-auto px-6">
          {reviews.map((review) => (
            <div key={review.id} className="bg-white p-6 rounded-lg shadow-md text-center">
              <p className="text-gray-600">"{review.text}"</p>
              <h4 className="mt-4 font-semibold">- {review.customer}</h4>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
