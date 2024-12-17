import React, { useState } from 'react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Message Sent by ${formData.name}`);
  };

  // Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className='bg-pink-100 min-h-screen flex justify-center items-center'>
      <div className="container mx-auto p-6 max-w-md bg-gray-100 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
        <h2 className="text-2xl font-semibold text-center mb-8">Contact Now</h2>
        
        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          
          {/* Name Input */}
          <div className="flex flex-col">
            <label htmlFor="name" className="mb-1 text-sm font-medium">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-pink-500 transition-all duration-300"
              placeholder="Enter your name"
              required
            />
          </div>

          {/* Email Input */}
          <div className="flex flex-col">
            <label htmlFor="email" className="mb-1 text-sm font-medium">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-pink-500 transition-all duration-300"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Phone Number Input */}
          <div className="flex flex-col">
            <label htmlFor="phone" className="mb-1 text-sm font-medium">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-pink-500 transition-all duration-300"
              placeholder="Enter your phone number"
              pattern="[0-9]{10}"  
              required
            />
          </div>

          {/* Message Input */}
          <div className="flex flex-col">
            <label htmlFor="message" className="mb-1 text-sm font-medium">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-pink-500 transition-all duration-300"
              placeholder="Enter your message"
              rows="4"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-[#361a25] text-white py-2 rounded-lg transition-all duration-300 ease-in-out hover:bg-white hover:text-black hover:scale-105"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
