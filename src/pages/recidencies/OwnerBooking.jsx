import React, { useState } from 'react';

const OwnerBookings = () => {
  const [bookings, setBookings] = useState([
    {
      id: 1,
      guestName: 'John Doe',
      room: 'Deluxe Suite',
      dates: '20/10/2024 - 23/10/2024',
      status: 'Pending',
      payment: '$400',
    },
    {
      id: 2,
      guestName: 'Jane Smith',
      room: 'Standard Room',
      dates: '24/10/2024 - 28/10/2024',
      status: 'Confirmed',
      payment: '$350',
    },
    {
      id: 3,
      guestName: 'Alice Johnson',
      room: 'Luxury Suite',
      dates: '10/11/2024 - 15/11/2024',
      status: 'Cancelled',
      payment: '$500',
    },
    {
      id: 4,
      guestName: 'Bob Brown',
      room: 'Presidential Suite',
      dates: '01/12/2024 - 05/12/2024',
      status: 'Pending',
      payment: '$1000',
    },
  ]);

  const handleConfirm = (id) => {
    const updatedBookings = bookings.map((booking) =>
      booking.id === id ? { ...booking, status: 'Confirmed' } : booking
    );
    setBookings(updatedBookings);
  };

  const handleCancel = (id) => {
    const updatedBookings = bookings.map((booking) =>
      booking.id === id ? { ...booking, status: 'Cancelled' } : booking
    );
    setBookings(updatedBookings);
  };

  const handleModify = (id) => {
    alert(`Modify booking for Guest ID: ${id}`);
    // You can navigate to another form for modifying bookings or open a modal for editing
  };

  return (
    <div className="min-h-screen bg-misty-rose p-8">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-eggplant">View Bookings</h1>
      </header>

      {/* Use a grid layout with 2 columns on large screens, 1 column on smaller screens */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {bookings.map((booking) => (
          <div key={booking.id} className="bg-orchid-pink shadow-lg rounded-lg p-6">
            <div className="flex justify-between items-center mb-4">
              <div>
                <h3 className="text-2xl font-semibold text-eggplant">
                  Guest: {booking.guestName}
                </h3>
                <p className="text-jet">Room: {booking.room}</p>
                <p className="text-jet">Dates: {booking.dates}</p>
                <p className="text-jet">Payment: {booking.payment}</p>
                <p
                  className={`text-lg font-semibold ${
                    booking.status === 'Confirmed'
                      ? 'text-green-600'
                      : booking.status === 'Cancelled'
                      ? 'text-red-600'
                      : 'text-thulian-pink'
                  }`}
                >
                  Status: {booking.status}
                </p>
              </div>

              {/* Confirm/Cancel and Modify Buttons */}
              <div className="space-x-4">
                {booking.status === 'Pending' && (
                  <>
                    <button
                      onClick={() => handleConfirm(booking.id)}
                      className="bg-eggplant text-white py-2 px-4 rounded-lg hover:bg-thulian-pink"
                    >
                      Confirm
                    </button>
                    <button
                      onClick={() => handleCancel(booking.id)}
                      className="bg-jet text-white py-2 px-4 rounded-lg hover:bg-thulian-pink"
                    >
                      Cancel
                    </button>
                  </>
                )}
                <button
                  onClick={() => handleModify(booking.id)}
                  className="bg-thulian-pink text-white py-2 px-4 rounded-lg hover:bg-eggplant"
                >
                  Modify
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OwnerBookings;
