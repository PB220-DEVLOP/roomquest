import React, { useState } from "react";
import UserNav from "../../components/client/UserNav";

const BookRooms = ({ room = {}, onClose }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [moveInDate, setMoveInDate] = useState("");
  const [occupants, setOccupants] = useState(1);
  const [requests, setRequests] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to the backend
    alert(`Booking confirmed for ${room.location} - ${room.type}`);
    onClose(); // Close the modal after submission
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-[#F7D7DC] py-6">
        <form
          className="max-w-3xl w-full bg-[#E8B4BC] p-8 rounded-lg shadow-md mx-auto mt-16"
          onSubmit={handleSubmit}
        >

          <h2 className="text-3xl font-bold text-center text-[#3a3238] mb-6">
            Book A Room
          </h2>
          <div className="mb-4">
            <label className="block text-6e4555">Full Name</label>
            <input
              type="text"
              className="w-full border rounded-md px-4 py-2 mt-2 bg-e8b4bc text-6e4555"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter Name"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-6e4555">Email</label>
            <input
              type="email"
              className="w-full border rounded-md px-4 py-2 mt-2 bg-e8b4bc text-6e4555"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Email"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-6e4555">Phone Number</label>
            <input
              type="tel"
              className="w-full border rounded-md px-4 py-2 mt-2 bg-e8b4bc text-6e4555"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Enter Phone Number"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-6e4555">Move-in Date</label>
            <input
              type="date"
              className="w-full border rounded-md px-4 py-2 mt-2 bg-e8b4bc text-6e4555"
              value={moveInDate}
              onChange={(e) => setMoveInDate(e.target.value)}
              placeholder="Enter Date"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-6e4555">Number of Occupants</label>
            <input
              type="number"
              className="w-full border rounded-md px-4 py-2 mt-2 bg-e8b4bc text-6e4555"
              value={occupants}
              onChange={(e) => setOccupants(e.target.value)}
              placeholder="Enter No. of Occupants"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-6e4555">Special Requests</label>
            <textarea
              className="w-full border rounded-md px-4 py-2 mt-2 bg-e8b4bc text-6e4555"
              value={requests}
              onChange={(e) => setRequests(e.target.value)}
            />
          </div>
          <div className="flex justify-between items-center">
            <button
              type="submit"
              className="bg-[#6E4555] text-white px-6 py-2 rounded-md hover:bg-[#3A3238] hover:text-[#F7D7DC]"
            >
              Confirm Booking
            </button>
            <button
              type="button"
              className="bg-[#6E4555] text-white px-6 py-2 rounded-md hover:bg-[#3A3238] hover:text-[#F7D7DC]"
              onClick={onClose}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default BookRooms;
