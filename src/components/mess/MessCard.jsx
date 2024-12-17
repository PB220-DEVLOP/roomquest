import React from 'react';
import { Link } from 'react-router-dom';
 import MessNav from './MessNav';

const MessCard = ({ name, image, description, price, deliveryTime, rating }) => {
  return (

    <>
     <MessNav/> 
    
    
      {/* Mess Card with Transition */}
      <div className='bg-[#f8d2d8]'>
        <div className="flex flex-row bg-[#E8B4BC]  rounded-lg   mb-6 w-full max-w-3xl mx-auto 
                      transform transition duration-300 hover:scale-105 ">
        {/* Image Section */}
        <div className="flex-shrink-0">
          <img src={image} alt={name} className="w-48 h-48 object-cover" />
        </div>

        {/* Content Section */}
        <div className="p-4 flex flex-col justify-between w-full">
          <h2 className="text-xl font-semibold text-gray-800 text-center">{name}</h2>

          <p className="mt-2 text-sm text-gray-600 leading-relaxed text-center">
            {description}
          </p>

          <div className="mt-2 text-gray-700 text-center">
            <p className="text-sm font-semibold">Price: {price}</p>
            <p className="text-xs">Delivery Time: {deliveryTime}</p>
          </div>

          <div className="mt-2 text-center">
            <span className="text-sm font-semibold text-gray-700">
              Rating: {rating} / 5
            </span>
          </div>

          {/* Buttons Section */}
          <div className="mt-4 flex justify-center space-x-4">
            {/* Contact Now Button */}
            <Link to="/ContactUs">
              <button className="bg-[#5b3846] text-white px-3 py-1 rounded-md transition-all duration-300 ease-in-out transform hover:bg-white hover:text-black hover:scale-105">
                Contact Now
              </button>
            </Link>

            <Link to="/ExploreNow">
              <button className="bg-pink-500 text-black px-3 py-1 rounded-md transition-all duration-300 ease-in-out transform hover:bg-black hover:text-white hover:scale-105">
                Explore More
              </button>
            </Link>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default MessCard;
