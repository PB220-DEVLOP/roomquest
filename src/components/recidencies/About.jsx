import React from 'react';
import { FaHome, FaUsers, FaBookOpen } from 'react-icons/fa'; // Icons for services
import img1 from '../../assets/ResidencyDashboard/ab-1.png'; // Image for room rental
import img2 from '../../assets/ResidencyDashboard/ab-2.png'; // Image for roommates
import img3 from '../../assets/ResidencyDashboard/ab-3.png'; // Image for booking assistance

const About = () => {
  return (
    <div className="bg-pink-100 py-12"> {/* Background and padding */}
      <div className="container mx-auto max-w-7xl px-4"> {/* Center the content */}
        <h1 className="text-6xl font-bold text-[#6E4555] mb-5 text-center">
          About Room Quest
        </h1>
        <p className="text-lg text-black  text-center max-w-6xl mx-auto mb-8">
          Room Quest is a platform designed to make finding a room, a roommate, or listing your room for rent simple and hassle-free. Whether you're a student, a professional, or a homeowner, Room Quest has the tools you need to connect with others and find the perfect place or person.
        </p>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          
          {/* Feature 1 - Room Rental */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="mb-4 text-center">
              <FaHome className="text-4xl text-[#ea86ac] mb-2" /> {/* Icon */}
            </div>
            <img src={img1} alt="Room Rental" className="w-full h-48 object-cover rounded-lg mb-4" />
            <h3 className="text-2xl font-bold text-[#6E4555] mb-3 text-center">Room Rental</h3>
            <p className="text-black text-center">
              Find available rooms to rent based on your location, budget, and preferences. Explore various listings and book your ideal room with ease.
            </p>
          </div>

          {/* Feature 2 - Find Roommates */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="mb-4 text-center">
              <FaUsers className="text-4xl text-[#ea86ac] mb-2" /> {/* Icon */}
            </div>
            <img src={img2} alt="Find Roommates" className="w-full h-48 object-cover rounded-lg mb-4" />
            <h3 className="text-2xl font-bold text-[#6E4555] mb-3 text-center">Find Roommates</h3>
            <p className="text-black text-center">
              Connect with people who are looking for roommates. Find the perfect match based on lifestyle, budget, and preferences.
            </p>
          </div>

          {/* Feature 3 - Booking Assistance */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="mb-4 text-center">
              <FaBookOpen className="text-4xl text-[#ea86ac] mb-2" /> {/* Icon */}
            </div>
            <img src={img3} alt="Booking Assistance" className="w-full h-48 object-cover rounded-lg mb-4" />
            <h3 className="text-2xl font-bold text-[#6E4555] mb-3 text-center">Booking Assistance</h3>
            <p className="text-black text-center">
              Need help with booking? Our team provides comprehensive support to ensure a smooth and stress-free room booking process.
            </p>
          </div>
          
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <button className="bg-[#6E4555] hover:bg-[#ea86ac] text-white font-bold py-3 px-8 rounded-lg shadow-lg">
            Explore Rooms Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
