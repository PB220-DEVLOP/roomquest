import React from 'react';
import { FaHome, FaUsers, FaListAlt, FaBookOpen } from 'react-icons/fa'; // Import icons
import img1 from '../../assets/ResidencyDashboard/10.png'; // Replace with your image

const Services = () => {
  return (
    <>
      <div className="bg-pink-100 h-full flex flex-col items-center justify-center py-8"> {/* Reduced padding */}
        <div className="w-full max-w-6xl">
          <h1 className="text-6xl font-bold text-[#6E4555] mb-4 text-center"> {/* Reduced heading size and margin */}
            Services Of Room Residencies
          </h1>
          <div className="relative py-8 bg-pink-100 flex justify-center items-center"> {/* Reduced padding */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"> {/* Reduced gap */}
              
              {/* Left Side - Image (Half Page) */}
              <div className="relative w-full h-full flex items-center">
                <img
                  src={img1}
                  alt="Room Concept"
                  className="w-full h-full object-cover rounded-lg shadow-lg"
                />
              </div>

              {/* Right Side - Services (Half Page) */}
              <div className="flex flex-col justify-center space-y-6"> {/* Reduced space between services */}
                <div className="grid grid-cols-2 gap-6">
                  
                  {/* Service 1 - Room Rental */}
                  <div className="bg-white p-5 rounded-lg shadow-lg"> {/* Reduced padding */}
                    <div className="text-center mb-2"> {/* Reduced margin */}
                      <FaHome className="text-4xl text-[#ea86ac] mb-2" /> 
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-[#6E4555]">Room Rental</h3> {/* Reduced margin */}
                    <p className="text-black mb-2"> {/* Reduced margin */}
                      Easily find available rooms to rent based on your preferred location, budget, and amenities.
                    </p>
                    <button className="text-[#D282A6] hover:text-[#6E4555] font-bold">MORE</button>
                  </div>

                  {/* Service 2 - Find Roommates */}
                  <div className="bg-white p-5 rounded-lg shadow-lg"> {/* Reduced padding */}
                    <div className="text-center mb-2"> {/* Reduced margin */}
                      <FaUsers className="text-4xl text-[#ea86ac] mb-2" /> {/* Icon */}
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-[#6E4555]">Find Roommates</h3> {/* Reduced margin */}
                    <p className="text-black mb-2"> {/* Reduced margin */}
                      Connect with potential roommates that match your lifestyle and preferences for shared living.
                    </p>
                    <button className="text-[#D282A6] hover:text-[#6E4555] font-bold">MORE</button>
                  </div>

                  {/* Service 3 - Room Listing */}
                  <div className="bg-white p-5 rounded-lg shadow-lg"> {/* Reduced padding */}
                    <div className="text-center mb-2"> {/* Reduced margin */}
                      <FaListAlt className="text-4xl text-[#ea86ac] mb-2" /> {/* Icon */}
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-[#6E4555]">Room Listing</h3> {/* Reduced margin */}
                    <p className="text-black mb-2"> {/* Reduced margin */}
                      List your room and reach out to potential tenants looking for a new place to stay.
                    </p>
                    <button className="text-[#D282A6] hover:text-[#6E4555] font-bold">MORE</button>
                  </div>

                  {/* Service 4 - Booking Assistance */}
                  <div className="bg-white p-5 rounded-lg shadow-lg"> {/* Reduced padding */}
                    <div className="text-center mb-2"> {/* Reduced margin */}
                      <FaBookOpen className="text-4xl text-[#ea86ac] mb-2" /> {/* Icon */}
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-[#6E4555]">Booking Assistance</h3> {/* Reduced margin */}
                    <p className="text-black mb-2"> {/* Reduced margin */}
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
    </>
  );
};

export default Services;
