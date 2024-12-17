import React, { useState } from 'react';

const RoomBookingForm = () => {
  const [roomId] = useState(() => `ROOM-${Math.floor(1000 + Math.random() * 9000)}`);

  const [formData, setFormData] = useState({
    roomName: '',
    ownerName: '',
    email: '',
    phone: '',
    address: '',
    rentAmount: '',
    image: null,
  });

  const [previewImage, setPreviewImage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prevState) => ({
        ...prevState,
        image: file,
      }));
      setPreviewImage(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', { roomId, ...formData });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F7D7DC] py-6">
      <form
        className="max-w-3xl w-full bg-[#E8B4BC] p-8 rounded-lg shadow-md mx-auto"
        onSubmit={handleSubmit}
      >
        <h2 className="text-3xl font-bold text-center text-[#3a3238] mb-6">
          Room Booking Form
        </h2>

        <div className="mb-4">
          <label className="block text-sm font-bold text-[#3a3238]">Room ID</label>
          <input
            type="text"
            value={roomId}
            disabled
            className="w-full p-3 border rounded bg-[#F7D7DC] cursor-not-allowed border-gray-300"
            style={{ borderColor: '#e8b4bc' }}
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-bold mb-2 text-[#3a3238]" htmlFor="roomName">Full Name</label>
          <input
            type="text"
            id="roomName"
            name="roomName"
            value={formData.roomName}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded border-gray-300"
            style={{ borderColor: '#e8b4bc' }}
            placeholder='Enter Your Name'
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-bold mb-2 text-[#3a3238]" htmlFor="ownerName">Owner Name</label>
          <input
            type="text"
            id="ownerName"
            name="ownerName"
            value={formData.ownerName}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded border-gray-300"
            style={{ borderColor: '#e8b4bc' }}
            placeholder='Enter Owner Name'
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-bold mb-2 text-[#3a3238]" htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded border-gray-300"
            style={{ borderColor: '#e8b4bc' }}
            placeholder='Enter Email'
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-bold mb-2 text-[#3a3238]" htmlFor="phone">Phone</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded border-gray-300"
            style={{ borderColor: '#e8b4bc' }}
            placeholder='Enter Phone number.'
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-bold mb-2 text-[#3a3238]" htmlFor="address">Address</label>
          <textarea
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded border-gray-300"
            style={{ borderColor: '#e8b4bc' }}
            placeholder='Enter Address'
          ></textarea>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-bold mb-2 text-[#3a3238]" htmlFor="rentAmount">Rent Amount</label>
          <input
            type="number"
            id="rentAmount"
            name="rentAmount"
            value={formData.rentAmount}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded border-gray-300"
            style={{ borderColor: '#e8b4bc' }}
            placeholder='Enter Rent Amount'
          />
        </div>

        {/* Image Upload */}
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2 text-[#3a3238]" htmlFor="image">Upload Room Image</label>
          <input
            type="file"
            id="image"
            name="image"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full p-3 border rounded border-gray-300"
            style={{ borderColor: '#e8b4bc' }}
          />
        </div>

        {/* Preview the uploaded image */}
        {previewImage && (
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2 text-[#3a3238]">Image Preview</label>
            <img
              src={previewImage}
              alt="Room Preview"
              className="w-full h-40 object-cover rounded border border-gray-300"
              style={{ borderColor: '#e8b4bc' }}
            />
          </div>
        )}

        <button
          type="submit"
          className="w-full h-12 bg-[#6E4555] text-white font-bold rounded-lg hover:bg-[#3A3238] hover:text-[#F7D7DC]"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default RoomBookingForm;
