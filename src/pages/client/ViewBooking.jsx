import React from 'react';

const BookingHistory = () => {
  return (
    <div className="min-h-screen bg-misty-rose p-8">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-eggplant mt-10">Booking History</h1>
      </header>

      <div className="flex justify-center gap-10">
        {/* Past Bookings */}
        <div className="bg-orchid-pink rounded-lg p-6 w-1/3">
          <h2 className="text-center text-2xl font-semibold text-eggplant mb-4">Past Bookings</h2>
          <div className="bg-thulian-pink p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-jet mb-2">Room: Deluxe Suite</h3>
            <p className="text-jet">Dates: 12/05/2024 - 15/05/2024</p>
            <p className="text-jet">Payment: $350</p>
            <p className="text-jet">Status: Completed</p>
          </div>
        </div>

        {/* Current Bookings */}
        <div className="bg-orchid-pink rounded-lg p-6 w-1/3">
          <h2 className="text-center text-2xl font-semibold text-eggplant mb-4">Current Bookings</h2>
          <div className="bg-thulian-pink p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-jet mb-2">Room: Standard Room</h3>
            <p className="text-jet">Dates: 18/10/2024 - 21/10/2024</p>
            <p className="text-jet">Payment: $200</p>
            <p className="text-jet">Status: Confirmed</p>
          </div>
          
        </div>
        <div className="bg-orchid-pink rounded-lg p-6 w-1/3">
          <h2 className="text-center text-2xl font-semibold text-eggplant mb-4">Current Bookings</h2>
          <div className="bg-thulian-pink p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-jet mb-2">Room: Standard Room</h3>
            <p className="text-jet">Dates: 18/10/2024 - 21/10/2024</p>
            <p className="text-jet">Payment: $200</p>
            <p className="text-jet">Status: Confirmed</p>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default BookingHistory;
