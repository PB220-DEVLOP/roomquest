import React, { useState } from "react";

const AddRoommateForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "Male",
    smoker: "No",
    pets: "No",
    location: "",
    type: "1BHK",
    description: "",
    rent: "",
    roomsAvailable: "",
    image: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      image: e.target.files[0],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit form logic (API call, etc.)
    console.log(formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F7D7DC] py-6">
      <form
        className="max-w-3xl w-full bg-[#E8B4BC] p-8 rounded-lg shadow-md mx-auto mt-12"
        onSubmit={handleSubmit}
      >
        <h2 className="text-3xl font-bold text-center text-[#3a3238] mb-6">Add Roommate</h2>

        {/* Name */}
        <div className="mb-4">
          <label className="block text-[#3A3238] font-bold mb-2">Full Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full p-2 rounded-lg bg-[#F7D7DC] text-[#3A3238] border border-gray-300"
            placeholder="Enter your name"
            required
          />
        </div>

        {/* Age */}
        <div className="mb-4">
          <label className="block text-[#3A3238] font-bold mb-2">Age</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleInputChange}
            className="w-full p-2 rounded-lg bg-[#F7D7DC] text-[#3A3238] border border-gray-300"
            placeholder="Enter your age"
            required
          />
        </div>

        {/* Gender */}
        <div className="mb-4">
          <label className="block text-[#3A3238] font-bold mb-2">Gender</label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleInputChange}
            className="w-full p-2 rounded-lg bg-[#F7D7DC] text-[#3A3238] border border-gray-300"
            required
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {/* Smoker */}
        <div className="mb-4">
          <label className="block text-[#3A3238] font-bold mb-2">Smoker</label>
          <select
            name="smoker"
            value={formData.smoker}
            onChange={handleInputChange}
            className="w-full p-2 rounded-lg bg-[#F7D7DC] text-[#3A3238] border border-gray-300"
            required
          >
            <option value="No">No</option>
            <option value="Yes">Yes</option>
          </select>
        </div>

        {/* Pets */}
        <div className="mb-4">
          <label className="block text-[#3A3238] font-bold mb-2">Pets</label>
          <select
            name="pets"
            value={formData.pets}
            onChange={handleInputChange}
            className="w-full p-2 rounded-lg bg-[#F7D7DC] text-[#3A3238] border border-gray-300"
            required
          >
            <option value="No">No</option>
            <option value="Yes">Yes</option>
          </select>
        </div>

        {/* Location */}
        <div className="mb-4">
          <label className="block text-[#3A3238] font-bold mb-2">Location</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleInputChange}
            className="w-full p-2 rounded-lg bg-[#F7D7DC] text-[#3A3238] border border-gray-300"
            placeholder="Enter room location (e.g. Jaripatka, Nagpur)"
            required
          />
        </div>

        {/* Type */}
        <div className="mb-4">
          <label className="block text-[#3A3238] font-bold mb-2">Room Type</label>
          <select
            name="type"
            value={formData.type}
            onChange={handleInputChange}
            className="w-full p-2 rounded-lg bg-[#F7D7DC] text-[#3A3238] border border-gray-300"
            required
          >
            <option value="1BHK">1BHK</option>
            <option value="2BHK">2BHK</option>
            <option value="3BHK">3BHK</option>
          </select>
        </div>

        {/* Rent */}
        <div className="mb-4">
          <label className="block text-[#3A3238] font-bold mb-2">Rent (₹/month)</label>
          <input
            type="number"
            name="rent"
            value={formData.rent}
            onChange={handleInputChange}
            className="w-full p-2 rounded-lg bg-[#F7D7DC] text-[#3A3238] border border-gray-300"
            placeholder="Enter rent price"
            required
          />
        </div>

        {/* Rooms Available */}
        <div className="mb-4">
          <label className="block text-[#3A3238] font-bold mb-2">Rooms Available</label>
          <input
            type="number"
            name="roomsAvailable"
            value={formData.roomsAvailable}
            onChange={handleInputChange}
            className="w-full p-2 rounded-lg bg-[#F7D7DC] text-[#3A3238] border border-gray-300"
            placeholder="Enter the number of rooms available"
            required
          />
        </div>

        {/* Description */}
        <div className="mb-4">
          <label className="block text-[#3A3238] font-bold mb-2">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            className="w-full p-2 rounded-lg bg-[#F7D7DC] text-[#3A3238] border border-gray-300"
            placeholder="Enter room description (e.g. cozy, affordable)"
            required
          />
        </div>

        {/* Image */}
        <div className="mb-4">
          <label className="block text-[#3A3238] font-bold mb-2">Upload Your Image</label>
          <input
            type="file"
            name="image"
            onChange={handleFileChange}
            className="w-full p-2 rounded-lg bg-[#F7D7DC] text-[#3A3238] border border-gray-300"
            accept="image/*"
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-[#6E4555] text-white font-bold p-3 rounded-lg hover:bg-[#3A3238] hover:text-[#F7D7DC]"
        >
          Add Roommate
        </button>
      </form>
    </div>
  );
};

export default AddRoommateForm;
