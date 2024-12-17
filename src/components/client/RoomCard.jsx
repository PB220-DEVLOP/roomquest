import React from "react";
import { useNavigate } from "react-router-dom";

const RoomCard = ({ image, location, type, desc, vacancy, price }) => {
  const navigate = useNavigate();

  const handleBookNow = () => {
    // Navigate to booking page, passing room details
    navigate("/book-rooms", {
      state: { room: { image, location, type, desc, vacancy, price } },
    });
  };

  return (
    <div className="flex bg-light-pink shadow-md rounded-lg overflow-hidden mb-4">
      <div className="w-1/3">
        <img src={image} alt={location} className="room-image w-full h-full object-cover" />
      </div>
      <div className="w-2/3 p-4">
        <h2 className="text-[#3A3238] text-xl font-semibold mb-2">
          {location} - {type}
        </h2>
        <p className="text-dark-grayish-brown mb-2">{desc}</p>
        <p className="text-dark-grayish-brown mb-2 mt-4">Vacancy: {vacancy}</p>
        <p className="text-dark-grayish-brown font-bold mb-4">Price: ₹{price}/month</p>
        <div className="flex space-x-4 mt-10">
          <button
            className="bg-[#6E4555] text-white px-4 py-2 rounded-md hover:bg-[#3A3238] hover:text-[#F7D7DC] w-full"
            onClick={handleBookNow} // Navigate to the booking page
          >
            Book Now
          </button>
          <button
            className="bg-[#6E4555] text-white px-4 py-2 rounded-md hover:bg-[#3A3238] hover:text-[#F7D7DC] w-full flex items-center justify-center"
            onClick={() => window.location.href = 'tel:7620722964'}
          >
            Contact
          </button>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;
