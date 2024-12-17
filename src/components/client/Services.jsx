import React from 'react';
import { FaHome, FaUsers, FaListAlt, FaBookOpen, FaUtensils, FaConciergeBell } from 'react-icons/fa';
import img1 from '../../assets/UserDashboard/s1.png'; // Replace with your room image
import img2 from '../../assets/UserDashboard/s2.png'; // Replace with your mess image

const Services = () => {
  return (
    <>
      {/* Room Services Section */}
      <div className="bg-pink-100 h-full flex flex-col items-center justify-center py-8">
        <div className="w-full max-w-6xl">
          <h1 className="text-6xl font-bold text-[#6E4555] mb-4 text-center">Room Services</h1>
          <div className="relative py-8 bg-pink-100 flex justify-center items-center">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">

              {/* Left Side - Room Image */}
              <div className="relative w-full h-full flex items-center">
                <img
                  src={img1}
                  alt="Room Concept"
                  className="w-full h-full object-cover rounded-lg shadow-lg"
                />
              </div>

              {/* Right Side - Room Services */}
              <div className="flex flex-col justify-center space-y-6">
                <div className="grid grid-cols-2 gap-6">

                  {/* Service 1 - Room Rental */}
                  <div className="bg-white p-5 rounded-lg shadow-lg">
                    <div className="text-center mb-2">
                      <FaHome className="text-4xl text-[#ea86ac] mb-2" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-[#6E4555]">Room Rental</h3>
                    <p className="text-black mb-2">
                      Easily find available rooms to rent based on your preferred location, budget, and amenities.
                    </p>
                    <button className="text-[#D282A6] hover:text-[#6E4555] font-bold">MORE</button>
                  </div>

                  {/* Service 2 - Find Roommates */}
                  <div className="bg-white p-5 rounded-lg shadow-lg">
                    <div className="text-center mb-2">
                      <FaUsers className="text-4xl text-[#ea86ac] mb-2" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-[#6E4555]">Find Roommates</h3>
                    <p className="text-black mb-2">
                      Connect with potential roommates that match your lifestyle and preferences for shared living.
                    </p>
                    <button className="text-[#D282A6] hover:text-[#6E4555] font-bold">MORE</button>
                  </div>

                  {/* Service 3 - Room Listing */}
                  <div className="bg-white p-5 rounded-lg shadow-lg">
                    <div className="text-center mb-2">
                      <FaListAlt className="text-4xl text-[#ea86ac] mb-2" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-[#6E4555]">Room Listing</h3>
                    <p className="text-black mb-2">
                      List your room and reach out to potential tenants looking for a new place to stay.
                    </p>
                    <button className="text-[#D282A6] hover:text-[#6E4555] font-bold">MORE</button>
                  </div>

                  {/* Service 4 - Booking Assistance */}
                  <div className="bg-white p-5 rounded-lg shadow-lg">
                    <div className="text-center mb-2">
                      <FaBookOpen className="text-4xl text-[#ea86ac] mb-2" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-[#6E4555]">Booking Assistance</h3>
                    <p className="text-black mb-2">
                      Get help with the entire booking process and find rooms without the hassle.
                    </p>
                    <button className="text-[#D282A6] hover:text-[#6E4555] font-bold">MORE</button>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mess Services Section */}
      <div className="bg-pink-100 h-full flex flex-col items-center justify-center py-8">
        <div className="w-full max-w-6xl">
          <h1 className="text-6xl font-bold text-[#6E4555] mb-4 text-center">Mess Services</h1>
          <div className="relative py-8 bg-pink-100 flex justify-center items-center">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">

              {/* Left Side - Mess Image */}
              <div className="relative w-full h-full flex items-center">
                <img
                  src={img2}
                  alt="Mess Concept"
                  className="w-full h-full object-cover rounded-lg shadow-lg"
                />
              </div>

              {/* Right Side - Mess Services */}
              <div className="flex flex-col justify-center space-y-6">
                <div className="grid grid-cols-2 gap-6">

                  {/* Service 1 - Room & Mess Service */}
                  <div className="bg-white p-5 rounded-lg shadow-lg">
                    <div className="text-center mb-2">
                      <FaUtensils className="text-4xl text-[#ea86ac] mb-2" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-[#6E4555]">Room & Mess Service</h3>
                    <p className="text-black mb-2">
                      Enjoy comfortable living with our combined room and mess services, offering daily meals alongside accommodation.
                    </p>
                    <button className="text-[#D282A6] hover:text-[#6E4555] font-bold">MORE</button>
                  </div>

                  {/* Service 2 - Mess Subscription */}
                  <div className="bg-white p-5 rounded-lg shadow-lg">
                    <div className="text-center mb-2">
                      <FaConciergeBell className="text-4xl text-[#ea86ac] mb-2" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-[#6E4555]">Mess Subscription</h3>
                    <p className="text-black mb-2">
                      Subscribe to our mess plans for daily fresh meals at affordable rates, designed for convenience.
                    </p>
                    <button className="text-[#D282A6] hover:text-[#6E4555] font-bold">MORE</button>
                  </div>

                  {/* Service 3 - Customized Meal Plans */}
                  <div className="bg-white p-5 rounded-lg shadow-lg">
                    <div className="text-center mb-2">
                      <FaConciergeBell className="text-4xl text-[#ea86ac] mb-2" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-[#6E4555]">Customized Meal Plans</h3>
                    <p className="text-black mb-2">
                      Tailor your meal preferences with our customizable meal plans, perfect for those with dietary restrictions or special needs.
                    </p>
                    <button className="text-[#D282A6] hover:text-[#6E4555] font-bold">MORE</button>
                  </div>

                  {/* Service 4 - Weekend Special Meals */}
                  <div className="bg-white p-5 rounded-lg shadow-lg">
                    <div className="text-center mb-2">
                      <FaUtensils className="text-4xl text-[#ea86ac] mb-2" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-[#6E4555]">Weekend Special Meals</h3>
                    <p className="text-black mb-2">
                      Enjoy our weekend special meals, featuring unique dishes and desserts every Saturday and Sunday to make your weekends delightful.
                    </p>
                    <button className="text-[#D282A6] hover:text-[#6E4555] font-bold">MORE</button>
                  </div>


                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
