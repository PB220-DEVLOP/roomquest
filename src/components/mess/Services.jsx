import React from 'react';
import { FaUtensils, FaConciergeBell, FaListAlt, FaRegClipboard } from 'react-icons/fa'; // Updated icons
import img1 from '../../assets/MessDashboard/img2.png'; // Replace with your image for mess outlets

const Services = () => {
  return (
    <>
      <div className="bg-pink-100 h-full flex flex-col items-center justify-center py-8"> {/* Reduced padding */}
        <div className="w-full max-w-6xl">
          <h1 className="text-6xl font-bold text-[#6E4555] mb-4 text-center"> {/* Reduced heading size and margin */}
            Mess Services Of Room Quest
          </h1>
          <div className="relative py-8 bg-pink-100 flex justify-center items-center"> {/* Reduced padding */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"> {/* Reduced gap */}
              
              {/* Left Side - Image (Half Page) */}
              <div className="relative w-full h-full flex items-center">
                <img
                  src={img1}
                  alt="Mess Concept"
                  className="w-full h-full object-cover rounded-lg shadow-lg"
                />
              </div>

              {/* Right Side - Mess Services (Half Page) */}
              <div className="flex flex-col justify-center space-y-6"> {/* Reduced space between services */}
                <div className="grid grid-cols-2 gap-6">
                  
                  {/* Service 1 - Meal Plans */}
                  <div className="bg-white p-5 rounded-lg shadow-lg"> {/* Reduced padding */}
                    <div className="text-center mb-2"> {/* Reduced margin */}
                      <FaUtensils className="text-4xl text-[#ea86ac] mb-2" /> 
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-[#6E4555]">Meal Plans</h3> {/* Reduced margin */}
                    <p className="text-black mb-2"> {/* Reduced margin */}
                      Choose from a variety of meal plans that fit your diet and schedule, offering daily thali options.
                    </p>
                    <button className="text-[#D282A6] hover:text-[#6E4555] font-bold">MORE</button>
                  </div>

                  {/* Service 2 - Mess Registration */}
                  <div className="bg-white p-5 rounded-lg shadow-lg"> {/* Reduced padding */}
                    <div className="text-center mb-2"> {/* Reduced margin */}
                      <FaConciergeBell className="text-4xl text-[#ea86ac] mb-2" /> {/* Icon */}
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-[#6E4555]">Mess Registration</h3> {/* Reduced margin */}
                    <p className="text-black mb-2"> {/* Reduced margin */}
                      Register with local mess outlets for regular meals, ensuring fresh and timely service.
                    </p>
                    <button className="text-[#D282A6] hover:text-[#6E4555] font-bold">MORE</button>
                  </div>

                  {/* Service 3 - Thali Options */}
                  <div className="bg-white p-5 rounded-lg shadow-lg"> {/* Reduced padding */}
                    <div className="text-center mb-2"> {/* Reduced margin */}
                      <FaListAlt className="text-4xl text-[#ea86ac] mb-2" /> {/* Icon */}
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-[#6E4555]">Thali Options</h3> {/* Reduced margin */}
                    <p className="text-black mb-2"> {/* Reduced margin */}
                      Explore a range of thali options, from traditional Indian meals to healthy balanced diets.
                    </p>
                    <button className="text-[#D282A6] hover:text-[#6E4555] font-bold">MORE</button>
                  </div>

                  {/* Service 4 - Meal Booking Assistance */}
                  <div className="bg-white p-5 rounded-lg shadow-lg"> {/* Reduced padding */}
                    <div className="text-center mb-2"> {/* Reduced margin */}
                      <FaRegClipboard className="text-4xl text-[#ea86ac] mb-2" /> {/* Icon */}
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-[#6E4555]">Meal Booking Assistance</h3> {/* Reduced margin */}
                    <p className="text-black mb-2"> {/* Reduced margin */}
                      Get help with booking meal plans or mess services to fit your schedule and dietary preferences.
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
