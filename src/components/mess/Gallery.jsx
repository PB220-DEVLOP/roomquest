import React from 'react'
import img1 from '../../assets/MessDashboard/1.png';
import img2 from '../../assets/MessDashboard/2.png';
import img3 from '../../assets/MessDashboard/3.png';
import img4 from '../../assets/MessDashboard/4.png';
import img5 from '../../assets/MessDashboard/5.png';
import img6 from '../../assets/MessDashboard/6.png';
import img7 from '../../assets/MessDashboard/7.png';
import img8 from '../../assets/MessDashboard/8.png';
import img9 from '../../assets/MessDashboard/9.png';

const Gallery = () => {
  return (
    <div className="bg-pink-100 h-full flex flex-col items-center justify-center py-12">
      <div className="w-full max-w-6xl">
        <h1 className="text-6xl font-bold text-[#6E4555] mb-8 text-center">
          Mess Outlets Thalis
        </h1>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {/* Image 1 */}
          <div className="gallery-item bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-110">
            <img
              src={img1}
              alt="Spacious room for rent"
              className="w-full h-64 object-cover"
              loading="lazy"
            />
            <p className="text-center text-black mt-2">Delicious thalis daily</p>
          </div>

          {/* Image 2 */}
          <div className="gallery-item bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-110">
            <img
              src={img2}
              alt="Roommate-friendly apartment"
              className="w-full h-64 object-cover"
              loading="lazy"
            />
            <p className="text-center text-black mt-2">Tasty meals, always</p>
          </div>

          {/* Image 3 */}
          <div className="gallery-item bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-110">
            <img
              src={img3}
              alt="Modern living space"
              className="w-full h-64 object-cover"
              loading="lazy"
            />
            <p className="text-center text-black mt-2">Wholesome thali servings.</p>
          </div>

          {/* Image 4 */}
          <div className="gallery-item bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-110">
            <img
              src={img4}
              alt="Affordable rooms"
              className="w-full h-64 object-cover"
              loading="lazy"
            />
            <p className="text-center text-black mt-2">Fresh flavors, daily</p>
          </div>

          {/* Image 5 */}
          <div className="gallery-item bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-110">
            <img
              src={img5}
              alt="Luxury room rentals"
              className="w-full h-64 object-cover"
              loading="lazy"
            />
            <p className="text-center text-black mt-2">Thalis for every taste</p>
          </div>

          {/* Image 6 */}
          <div className="gallery-item bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-110">
            <img
              src={img6}
              alt="Student accommodation"
              className="w-full h-64 object-cover"
              loading="lazy"
            />
            <p className="text-center text-black mt-2">Comfort food thalis</p>
          </div>

          {/* Image 7 */}
          <div className="gallery-item bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-110">
            <img
              src={img7}
              alt="Shared living spaces"
              className="w-full h-64 object-cover"
              loading="lazy"
            />
            <p className="text-center text-black mt-2">Healthy thalis here</p>
          </div>
          <div className="gallery-item bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-110">
            <img
              src={img8}
              alt="Shared living spaces"
              className="w-full h-64 object-cover"
              loading="lazy"
            />
            <p className="text-center text-black mt-2">Affordable thali meals</p>
          </div>
          <div className="gallery-item bg-white shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:scale-110">
            <img
              src={img9}
              alt="Shared living spaces"
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
