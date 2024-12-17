import React from 'react';
import { FaUtensils, FaUsers, FaBookOpen } from 'react-icons/fa'; // Icons for mess services
import img1 from '../../assets/MessDashboard/m2.png'; // Image for mess services
import img2 from '../../assets/MessDashboard/m1.png'; // Image for finding mess
import img3 from '../../assets/MessDashboard/m3.png'; // Image for booking assistance

const About = () => {
  return (
    <div className="bg-pink-100 py-12"> {/* Background and padding */}
      <div className="container mx-auto max-w-7xl px-4"> {/* Center the content */}
        <h1 className="text-6xl font-bold text-[#6E4555] mb-5 text-center">
          About Mess Service
        </h1>
        <p className="text-lg text-black text-center max-w-6xl mx-auto mb-8">
          Mess Quest is a platform designed to make finding a mess service, connecting with meal providers, or listing your mess services simple and hassle-free. Whether you're a student, a professional, or a homeowner, Mess Quest helps you enjoy healthy meals with ease.
        </p>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          
          {/* Feature 1 - Mess Services */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="mb-4 text-center">
              <FaUtensils className="text-4xl text-[#ea86ac] mb-2" /> {/* Icon */}
            </div>
            <img src={img1} alt="Mess Services" className="w-full h-48 object-cover rounded-lg mb-4" />
            <h3 className="text-2xl font-bold text-[#6E4555] mb-3 text-center">Mess Services</h3>
            <p className="text-black text-center">
              Discover local mess services that offer healthy, affordable meals delivered right to your door or available for pickup.
            </p>
          </div>

          {/* Feature 2 - Find Mess Providers */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="mb-4 text-center">
              <FaUsers className="text-4xl text-[#ea86ac] mb-2" /> {/* Icon */}
            </div>
            <img src={img2} alt="Find Mess Providers" className="w-full h-48 object-cover rounded-lg mb-4" />
            <h3 className="text-2xl font-bold text-[#6E4555] mb-3 text-center">Find Mess Providers</h3>
            <p className="text-black text-center">
              Connect with mess providers near your location and choose the best meal plan that fits your needs and dietary preferences.
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
              Get help with booking mess services. Our team provides support for a seamless experience in finding and managing your meals.
            </p>
          </div>
          
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <button className="bg-[#6E4555] hover:bg-[#ea86ac] text-white font-bold py-3 px-8 rounded-lg shadow-lg">
            Explore Mess Services Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
