import  heroImg from './hero_img.png'
import  heroImg2 from './hero-img2.jpg'
import  heroImg3 from './hero-img3.jpg'
import  menImg from './men.jpg'
import  womenImg from './women.jpg'
import  accessImg from './accessories.jpg'
import  stylishImg from './stylish.jpg'
import  jacketImg from './jacket.jpg'
import  shoesImg from './shoes.jpg'
import  elegantImg from './elegant.jpg'
import  user1 from './profile_img_1.png'
import  user2 from './profile_img_2.png'
import  user3 from './profile-img.png'
import  shopImg from './shop-img.jpg'
import  cartImg from './cart-img.jpg'



export const assets = {
      heroImg,
      heroImg2,
      heroImg3,
      menImg,
      womenImg,
      accessImg,
      elegantImg,
      shoesImg,
      jacketImg,
      stylishImg,
      user1,
      user2,
      user3,
      shopImg,
      cartImg

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
    { 
      id: 1, 
      name: "Stylish Outfit", 
      price: "49.99", 
      image: assets.stylishImg, 
      description: "Step into a world of elegance and sophistication with this stylish outfit. Designed for individuals who appreciate both fashion and comfort, this outfit is made from high-quality, breathable fabric that allows for all-day wear without discomfort. Whether you're heading to a casual outing, a business event, or an evening gathering, this outfit will keep you looking sharp and confident. The sleek design complements various body types, ensuring a flattering fit for everyone. Pair it with accessories and stylish footwear to elevate your look. Its versatility allows you to mix and match with other wardrobe essentials, making it a valuable addition to your collection. With meticulous stitching and durable material, this outfit is built to last, ensuring you get value for your money. Don't just wear clothes—make a statement with this stylish and modern outfit, perfect for any occasion." 
    },
    { 
      id: 2, 
      name: "Casual Jacket", 
      price: "59.99", 
      image: assets.jacketImg, 
      description: "Stay warm and stylish with this casual jacket, crafted for those who love a mix of fashion and functionality. The jacket is designed with premium fabric that ensures both warmth and breathability, making it perfect for different weather conditions. Whether you're going for a walk in the park, heading to work, or meeting up with friends, this jacket complements any outfit effortlessly. The modern cut provides a relaxed fit, while the stylish design makes it suitable for various occasions. Featuring a secure zipper closure, spacious pockets, and a soft inner lining, this jacket guarantees both comfort and practicality. Layer it over a t-shirt for a casual look or a sweater for extra warmth. It's easy to maintain and remains in great shape even after multiple washes. A must-have piece for anyone looking to add a touch of sophistication and comfort to their wardrobe. Get ready to turn heads and make a fashion statement with this versatile and timeless jacket." 
    },
    { 
      id: 3, 
      name: "Elegant Dress", 
      price: "69.99", 
      image: assets.elegantImg, 
      description: "Embrace grace and beauty with this elegant dress, designed for women who appreciate timeless fashion. Made from high-quality, soft, and breathable fabric, this dress provides a luxurious feel while ensuring maximum comfort. The flattering silhouette enhances your natural shape, making it a perfect choice for various occasions such as weddings, dinner parties, or formal events. The detailed stitching and high-end craftsmanship ensure durability, allowing you to enjoy this dress for years to come. The sophisticated design features delicate elements that add a touch of charm and femininity, making you feel confident and beautiful wherever you go. Pair it with elegant accessories and high heels to complete your look. Whether you're aiming for a refined or glamorous style, this dress adapts effortlessly to your preference. A wardrobe essential for every fashion-forward woman looking to make a lasting impression." 
    },
    { 
      id: 4, 
      name: "Trendy Shoes", 
      price: "39.99", 
      image: assets.shoesImg, 
      description: "Step into style with these trendy shoes, crafted for individuals who value both comfort and fashion. These shoes are designed with high-quality materials that ensure durability, breathability, and long-lasting comfort. Whether you're heading to work, a casual outing, or an evening event, these shoes offer a sleek and stylish appearance that complements any outfit. The cushioned insole provides all-day support, reducing foot fatigue and ensuring a comfortable experience. The non-slip sole adds stability, making these shoes ideal for various terrains and activities. With a modern design and versatile color options, they are easy to pair with different clothing styles, from casual jeans to formal attire. The lightweight construction allows for easy movement, while the superior craftsmanship ensures they remain in excellent condition even after repeated use. Upgrade your shoe collection with these stylish and practical shoes that guarantee both elegance and comfort." 
    },
  ];
  

  

  export const reviews = [
    { id: 1, text: "Amazing quality! I'm in love with my new outfit.", customer: "Customer 1", image:assets.user1 },
    { id: 2, text: "Fast delivery and great service!", customer: "Customer 2", image:assets.user2},
    { id: 3, text: "I highly recommend this store to everyone!", customer: "Customer 3", image:assets.user3 },
  ];
  