import  heroImg from './hero_img.png'
import  heroImg2 from './hero-img2.jpg'
import  heroImg3 from './hero-img3.jpg'
import  menImg from './men.jpg'
import  womenImg from './women.jpg'
import  accessImg from './accessories.jpg'


export const assets = {
      heroImg,
      heroImg2,
      heroImg3,
      menImg,
      womenImg,
      accessImg
}

export const sliderImages = [
    assets.heroImg,
    assets.heroImg2,
    assets.heroImg3,
  ];


  export const categories = [
    { name: "Men", image:assets.menImg },
    { name: "Women", image: assets.womenImg },
    { name: "Accessories", image: assets.accessImg },
  ];
  


  export const products = [
    { id: 1, name: "Stylish Outfit", price: "$49.99", image: "/product-1.jpg" },
    { id: 2, name: "Casual Jacket", price: "$59.99", image: "/product-2.jpg" },
    { id: 3, name: "Elegant Dress", price: "$69.99", image: "/product-3.jpg" },
    { id: 4, name: "Trendy Shoes", price: "$39.99", image: "/product-4.jpg" },
  ];

  

  export const reviews = [
    { id: 1, text: "Amazing quality! I'm in love with my new outfit.", customer: "Customer 1" },
    { id: 2, text: "Fast delivery and great service!", customer: "Customer 2" },
    { id: 3, text: "I highly recommend this store to everyone!", customer: "Customer 3" },
  ];
  