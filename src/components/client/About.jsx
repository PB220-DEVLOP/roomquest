import React from 'react';
import { FaHome, FaUsers, FaBookOpen, FaUtensils } from 'react-icons/fa'; // Added FaUtensils for mess service icon
import img1 from '../../assets/UserDashboard/a1.png'; // Image for room rental
import img2 from '../../assets/UserDashboard/a2.png'; // Image for roommates
import img3 from '../../assets/UserDashboard/a3.png'; // Image for booking assistance
import img4 from '../../assets/UserDashboard/a4.png'; // Image for mess services
import img5 from '../../assets/UserDashboard/a5.png'; // Image for meal plans
import img6 from '../../assets/UserDashboard/a6.png'; // Image for diet preferences

const About = () => {
  return (
    <div className="bg-pink-100 py-12"> {/* Background and padding */}
      <div className="container mx-auto max-w-7xl px-4"> {/* Center the content */}
        <h1 className="text-6xl font-bold text-[#6E4555] mb-5 text-center">
          About Room and Mess
        </h1>
        <p className="text-lg text-black text-center max-w-6xl mx-auto mb-8">
          Room and Mess Quest is a platform designed to simplify the process of finding both accommodations and mess services. Whether you're looking for a room to rent, a roommate to share with, or mess services with meal plans, Room and Mess Quest helps you connect and find the perfect match.
        </p>

        {/* Room Services Section */}
        <h2 className="text-4xl font-bold text-[#6E4555] mb-5 text-center">Room Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          
          {/* Room Rental */}
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

          {/* Find Roommates */}
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

          {/* Booking Assistance */}
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

        {/* Mess Services Section */}
        <h2 className="text-4xl font-bold text-[#6E4555] mt-12 mb-5 text-center">Mess Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">

          {/* Mess Service */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="mb-4 text-center">
              <FaUtensils className="text-4xl text-[#ea86ac] mb-2" /> {/* Icon */}
            </div>
            <img src={img4} alt="Mess Services" className="w-full h-48 object-cover rounded-lg mb-4" />
            <h3 className="text-2xl font-bold text-[#6E4555] mb-3 text-center">Mess Service</h3>
            <p className="text-black text-center">
              Enjoy home-style, healthy meals with our mess services. Our mess partners offer a variety of meal plans that cater to your taste and dietary needs.
            </p>
          </div>

          {/* Meal Plans */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="mb-4 text-center">
              <FaUtensils className="text-4xl text-[#ea86ac] mb-2" /> {/* Icon */}
            </div>
            <img src={img5} alt="Meal Plans" className="w-full h-48 object-cover rounded-lg mb-4" />
            <h3 className="text-2xl font-bold text-[#6E4555] mb-3 text-center">Meal Plans</h3>
            <p className="text-black text-center">
              Choose from flexible meal plans that suit your schedule and dietary preferences, available for both veg and non-veg options.
            </p>
          </div>

          {/* Dietary Preferences */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="mb-4 text-center">
              <FaUtensils className="text-4xl text-[#ea86ac] mb-2" /> {/* Icon */}
            </div>
            <img src={img6} alt="Diet Preferences" className="w-full h-48 object-cover rounded-lg mb-4" />
            <h3 className="text-2xl font-bold text-[#6E4555] mb-3 text-center">Dietary Preferences</h3>
            <p className="text-black text-center">
              Whether you're vegan, vegetarian, or have specific dietary restrictions, our mess services cater to a wide range of diet preferences.
            </p>
          </div>

        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <button className="bg-[#6E4555] hover:bg-[#ea86ac] text-white font-bold py-3 px-8 rounded-lg shadow-lg">
            Explore Services Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
