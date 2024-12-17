import React from 'react'
import img1 from '../../assets/UserDashboard/r1.png';
import img2 from '../../assets/UserDashboard/r2.png';
import img3 from '../../assets/UserDashboard/r3.png';
import img4 from '../../assets/UserDashboard/r4.png';
import img5 from '../../assets/UserDashboard/r5.png';
import img6 from '../../assets/UserDashboard/r6.png';
import img7 from '../../assets/UserDashboard/t1.png';
import img8 from '../../assets/UserDashboard/t2.png';
import img9 from '../../assets/UserDashboard/t3.png';
import img10 from '../../assets/UserDashboard/t4.png';
import img11 from '../../assets/UserDashboard/t5.png';
import img12 from '../../assets/UserDashboard/t6.png';

const Gallery = () => {
  return (
    <div className="bg-pink-100 h-full flex flex-col items-center justify-center py-12">
      <div className="w-full max-w-6xl">
        {/* Room Section */}
        <h1 className="text-6xl font-bold text-[#6E4555] mb-8 text-center">
          Gallery Of Room 
        </h1>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-12">
          {/* Room Image 1 */}
          <div className="gallery-item bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-110">
            <img
              src={img1}
              alt="Spacious room for rent"
              className="w-full h-64 object-cover"
              loading="lazy"
            />
            <p className="text-center text-black mt-2">Spacious room for rent</p>
          </div>

          {/* Room Image 2 */}
          <div className="gallery-item bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-110">
            <img
              src={img2}
              alt="Roommate-friendly apartment"
              className="w-full h-64 object-cover"
              loading="lazy"
            />
            <p className="text-center text-black mt-2">Roommate-friendly apartment</p>
          </div>

          {/* Room Image 3 */}
          <div className="gallery-item bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-110">
            <img
              src={img3}
              alt="Modern living space"
              className="w-full h-64 object-cover"
              loading="lazy"
            />
            <p className="text-center text-black mt-2">Modern living space</p>
          </div>

          {/* Add more room images similar to the above */}

          {/* Room Image 4 */}
          <div className="gallery-item bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-110">
            <img
              src={img4}
              alt="Affordable rooms"
              className="w-full h-64 object-cover"
              loading="lazy"
            />
            <p className="text-center text-black mt-2">Affordable rooms</p>
          </div>

          {/* Room Image 5 */}
          <div className="gallery-item bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-110">
            <img
              src={img5}
              alt="Luxury room rentals"
              className="w-full h-64 object-cover"
              loading="lazy"
            />
            <p className="text-center text-black mt-2">Luxury room rentals</p>
          </div>
          <div className="gallery-item bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-110">
            <img
              src={img6}
              alt="Luxury room rentals"
              className="w-full h-64 object-cover"
              loading="lazy"
            />
            <p className="text-center text-black mt-2">Fully-furnished rooms</p>
          </div>
        </div>

        {/* Mess Section */}
        <h1 className="text-6xl font-bold text-[#6E4555] mb-8 text-center">
          Gallery Of Mess 
        </h1>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {/* Mess Image 1 */}
          <div className="gallery-item bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-110">
            <img
              src={img7}
              alt="Healthy breakfast options"
              className="w-full h-64 object-cover"
              loading="lazy"
            />
            <p className="text-center text-black mt-2">Healthy breakfast options</p>
          </div>

          {/* Mess Image 2 */}
          <div className="gallery-item bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-110">
            <img
              src={img8}
              alt="Delicious lunch meals"
              className="w-full h-64 object-cover"
              loading="lazy"
            />
            <p className="text-center text-black mt-2">Delicious lunch meals</p>
          </div>

          {/* Mess Image 3 */}
          <div className="gallery-item bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-110">
            <img
              src={img9}
              alt="Dinner served with love"
              className="w-full h-64 object-cover"
              loading="lazy"
            />
            <p className="text-center text-black mt-2">Dinner served with love</p>
          </div>

          <div className="gallery-item bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-110">
            <img
              src={img10}
              alt="Dinner served with love"
              className="w-full h-64 object-cover"
              loading="lazy"
            />
            <p className="text-center text-black mt-2">Comfort food thalis</p>
          </div>

          <div className="gallery-item bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-110">
            <img
              src={img11}
              alt="Dinner served with love"
              className="w-full h-64 object-cover"
              loading="lazy"
            />
            <p className="text-center text-black mt-2">Affordable thali meals</p>
          </div>

          <div className="gallery-item bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-110">
            <img
              src={img12}
              alt="Dinner served with love"
              className="w-full h-64 object-cover"
              loading="lazy"
            />
            <p className="text-center text-black mt-2">Satisfying thali options</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Gallery;
