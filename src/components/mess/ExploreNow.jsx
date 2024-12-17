import React, { useState } from 'react';
import banner from "../../assets/tiffineimges/banner1.jpg"
import veg1 from "../../assets/tiffineimges/alu.webp";
import veg2 from "../../assets/tiffineimges/alugobi.jpg";
import veg3 from "../../assets/tiffineimges/brinjal.jpg";
import veg4 from "../../assets/tiffineimges/ladyfinger.jpg";
import veg5 from "../../assets/tiffineimges/masala.webp";
import veg6 from "../../assets/tiffineimges/frenchbeans.jpeg";
import veg7 from "../../assets/tiffineimges/masala.webp";
import veg8 from "../../assets/tiffineimges/paneer.jpg";
import veg9 from "../../assets/tiffineimges/paneerbhurji.webp";
import veg10 from "../../assets/tiffineimges/sabudana.webp";
import veg11 from "../../assets/tiffineimges/southindian.avif";
import veg12 from "../../assets/tiffineimges/misalpav.jpeg";
import veg13 from "../../assets/tiffineimges/beetrootparatha.jpg";
import veg14 from "../../assets/tiffineimges/aluparatha.jpeg";
import veg15 from "../../assets/tiffineimges/palak.jpeg";
import veg16 from "../../assets/tiffineimges/soya.webp";
//nonvegmenu
import nv1 from "../../assets/tiffineimges/eggbiryani.jpeg";
import nv2 from "../../assets/tiffineimges/chickenbiryani.jpeg";
import nv3 from "../../assets/tiffineimges/muttonbiryani.jpeg";
import nv4 from "../../assets/tiffineimges/mutton.jpeg";
import nv5 from "../../assets/tiffineimges/fish.jpeg";
import nv6 from "../../assets/tiffineimges/fishfry.jpeg";
import nv7 from "../../assets/tiffineimges/eggcurry.jpeg";
import nv8 from "../../assets/tiffineimges/eggbhurji.jpeg";
import nv9 from "../../assets/tiffineimges/drymutton.jpeg";
import nv10 from "../../assets/tiffineimges/drychicken.jpeg";
import nv11 from "../../assets/tiffineimges/chicken.jpeg";
import nv12 from "../../assets/tiffineimges/mutton.jpeg";








const ExploreNow = () => {
  const [selectedMenu, setSelectedMenu] = useState(''); // State to track selected menu ('veg' or 'nonVeg')
  const [cart, setCart] = useState([]);

  const menuData = {
    veg: {
      menu: [
        {
          name: 'masala alu tiffin',
          price: 50,
          rating: 4.3,
          description: 'masala alu with fresh cream.',
          image: veg1
        },

        {
          name: 'alugobi',
          price: 70,
          rating: 4.6,
          description: 'Spicy alugobi with fresh masala.',
          image: veg2

        }
      ],


      sabji: [
        {
          name: 'Paneer Butter Masala',
          price: 120,
          rating: 4.8,
          description: 'Delicious paneer cooked in buttery tomato gravy.',
          image: veg3
        },

        {
          name: 'Aloo Gobi',
          price: 80,
          rating: 4.2,
          description: 'A dry vegetable dish made with potatoes and cauliflower.',
          image: veg4
        }
      ],
      paneer: [
        {
          name: 'masala chana',
          price: 120,
          rating: 4.8,
          description: 'Delicious paneer cooked in buttery tomato gravy.',
          image: veg5
        },
        {
          name: 'french beans',
          price: 220,
          rating: 4.8,
          description: 'Tender mutton in flavorful curry.',
          image: veg6
        },
        {
          name: 'masala chana',
          price: 220,
          rating: 4.8,
          description: 'Tender mutton in flavorful curry.',
          image: veg7
        },
        {
          name: 'panner',
          price: 220,
          rating: 4.8,
          description: 'Tender mutton in flavorful curry.',
          image: veg8
        },
        {
          name: 'paneer bhurji',
          price: 220,
          rating: 4.8,
          description: 'Tender mutton in flavorful curry.',
          image: veg9
        },
        {
          name: 'sabudana',
          price: 220,
          rating: 4.8,
          description: 'Tender mutton in flavorful curry.',
          image: veg10
        },
        {
          name: 'southindian',
          price: 220,
          rating: 4.8,
          description: 'Tender mutton in flavorful curry.',
          image: veg11
        },
        {
          name: 'misal pav',
          price: 220,
          rating: 4.8,
          description: 'Tender mutton in flavorful curry.',
          image: veg12
        },
        {
          name: 'beetroot paratha',
          price: 220,
          rating: 4.8,
          description: 'Tender mutton in flavorful curry.',
          image: veg13
        },
        {
          name: 'alu paratha',
          price: 220,
          rating: 4.8,
          description: 'Tender mutton in flavorful curry.',
          image: veg14
        },
        {
          name: 'palak',
          price: 220,
          rating: 4.8,
          description: 'Tender mutton in flavorful curry.',
          image: veg15
        },
        {
          name: 'soya',
          price: 220,
          rating: 4.8,
          description: 'Tender mutton in flavorful curry.',
          image: veg16
        }

      ]
    },
    nonVeg: {
      rice: [
        {
          name: 'egg biryani tiffin',
          price: 150,
          rating: 4.9,
          description: 'Flavourful chicken biryani with rich spices.',
          image: nv1
        },

        {
          name: 'chicken Biryani tiffin',
          price: 200,
          rating: 4.7,
          description: 'Aromatic biryani made with tender mutton.',
          image: nv2
        }
      ],
      sabji: [
        {
          name: 'Chicken biryani tiffin',
          price: 180,
          rating: 4.5,
          description: 'Spicy and rich chicken curry.',
          image: nv3
        },
        {
          name: 'Mutton Curry tiffin',
          price: 220,
          rating: 4.8,
          description: 'Tender mutton in flavorful curry.',
          image: nv4
        },

        {
          name: 'fish Curry tiffin',
          price: 220,
          rating: 4.8,
          description: 'Tender mutton in flavorful curry.',
          image: nv5
        },
        {
          name: ' fish fry tiffin',
          price: 220,
          rating: 4.8,
          description: 'Tender mutton in flavorful curry.',
          image: nv6
        },
        {
          name: 'egg  Curry tiffin',
          price: 220,
          rating: 4.8,
          description: 'Tender mutton in flavorful curry.',
          image: nv7
        },
        {
          name: 'egg bhurji tiffin',
          price: 220,
          rating: 4.8,
          description: 'Tender mutton in flavorful curry.',
          image: nv8
        },
        {
          name: 'chicken fry tiffin',
          price: 220,
          rating: 4.8,
          description: 'Tender mutton in flavorful curry.',
          image: nv9
        },
        {
          name: 'Mutton fry tiffin',
          price: 220,
          rating: 4.8,
          description: 'Tender mutton in flavorful curry.',
          image: nv10
        },
        {
          name: 'chicken Curry tiffin',
          price: 220,
          rating: 4.8,
          description: 'Tender mutton in flavorful curry.',
          image: nv11
        },
        {
          name: 'Mutton Curry tiffin',
          price: 220,
          rating: 4.8,
          description: 'Tender mutton in flavorful curry.',
          image: nv12
        }
      ],
    }
  };

  // Function to handle menu selection
  const handleMenuSelect = (menuType) => {
    setSelectedMenu(menuType); // 'veg' or 'nonVeg'
  };

  // Function to add items to the cart
  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  return (
    <div className="container mx-auto p-4">
      {/* Banner Section */}
      <div className="relative mb-8">
        <img
          src={banner}
          alt="Explore Mess Menu"
          className="w-full h-full shadow-md"
        />
        <div className="absolute inset-0 flex justify-center items-center">

        </div>
        <h1 className="text-4xl mt-10 items-center justify-center absolute text-eggplant ml-96  font-extrabold">!...Explore Veg And Non-Veg Mess Menu Here...!</h1>
      </div>

      {/* Veg and Non-Veg Buttons */}
      <div className="flex justify-center space-x-4 mt-32 mb-8">
        <button
          className={`py-2 px-4 rounded-lg  ${selectedMenu === 'veg' ? 'bg-green-500' : 'bg-yellow-300 border-2 border-yellow-500 text-black hover:bg-green-500'}`}
          onClick={() => handleMenuSelect('veg')}
        >
          Veg Menu 🍃
        </button>
        <button
          className={`py-2 px-4 rounded-lg text-white ${selectedMenu === 'nonVeg' ? 'bg-red-500' : 'bg-red-500 border-2 border-red-700 hover:bg-red-600'}`}
          onClick={() => handleMenuSelect('nonVeg')}
        >
          Non-Veg Menu 🍗
        </button>

      </div>

      {/* Conditional Rendering of Menus */}
      {selectedMenu && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-7">
          {Object.keys(menuData[selectedMenu]).map((category) => (
            menuData[selectedMenu][category].map((item, idx) => (
              <MenuItem key={idx} item={item} addToCart={addToCart} />
            ))
          ))}
        </div>
      )}

      {/* Cart Summary */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold">Cart Summary</h2>
        <ul className="list-disc ml-6">
          {cart.map((item, index) => (
            <li key={index}>{item.name} - ₹{item.price}</li>
          ))}
        </ul>
        <h3 className="text-xl font-bold mt-4">Total: ₹{cart.reduce((total, item) => total + item.price, 0)}</h3>
      </div>
    </div>
  );
};

// MenuItem Component
const MenuItem = ({ item, addToCart }) => {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="bg-[#f7e6e9] flex flex-col items-center border-2 border-red-200 rounded-lg p-4 shadow-md w-full transition-transform transform hover:scale-110">
      <img
        src={item.image}
        alt={item.name}
        className="w-32 h-32 object-cover rounded-lg mb-4"
      />
      <h3 className="text-lg font-semibold text-center">{item.name}</h3>
      <p className="text-gray-600 text-sm text-center mb-2">{item.description}</p>
      <p className="font-bold text-center">₹{item.price}</p>
      <p className="text-yellow-500 text-sm text-center">Rating: {item.rating}⭐</p>

      <div className="flex items-center space-x-4 mt-2">
        <input
          type="number"
          className="w-16 border border-gray-400 rounded-lg text-center"
          value={quantity}
          min={1}
          onChange={(e) => setQuantity(e.target.value)}
        />
        <button
          className="bg-eggplant text-white py-1 px-3 rounded-lg"
          onClick={() => addToCart({ ...item, quantity: parseInt(quantity) })}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ExploreNow;
