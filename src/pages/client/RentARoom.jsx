import React, { useState } from "react";
import RoomCard from "../../components/client/RoomCard";
import BookingForm from "./BookRooms";
import img1 from "../../assets/RentARoom/house1.jpg";
import img2 from "../../assets/RentARoom/house2.jpg";
import img3 from "../../assets/RentARoom/house3.jpg";
import img4 from "../../assets/RentARoom/house4.jpg";
import img5 from "../../assets/RentARoom/house5.jpg";
import img6 from "../../assets/RentARoom/house6.jpg";
import img7 from "../../assets/RentARoom/house7.jpg";
import img8 from "../../assets/RentARoom/house8.jpg";
import img9 from "../../assets/RentARoom/house9.jpg";
import img10 from "../../assets/RentARoom/house10.jpg";

const roomsData = [
    {
        image: img1, // Use the imported image here
        location: "Sitabuldi, Nagpur",
        type: "2BHK",
        desc: "This flat is well-maintained, smoke-free, and comes fully furnished for your convenience",
        vacancy: 2,
        price: 12000,
    },
    {
        image: img2, // Use the second imported image here
        location: "Ramdas Peth, Nagpur",
        type: "3BHK",
        desc: "Enjoy a clean, smoke-free environment with modern furnishings provided.",
        vacancy: 3,
        price: 18000,
    },
    {
        image: img3, // Placeholder image
        location: "Medical Square, Nagpur",
        desc: "The flat offers a tidy living space, is strictly non-smoking, and includes essential furniture.",
        type: "2BHK",
        vacancy: 4,
        price: 20000,
    },
    {
        image: img4, // Placeholder image
        location: "Padole Square, Nagpur",
        type: "3BHK",
        desc: "Experience a clean and cozy setting with furniture included; smoking is not permitted.",
        vacancy: 5,
        price: 24000,
    },
    {
        image: img5, // Placeholder image
        location: "Dhantoli, Nagpur",
        type: "1BHK",
        desc: "This flat features a clean and comfortable space, furnished with necessary items, and is a non-smoking area.",
        vacancy: 2,
        price: 12000,
    },
    {
        image: img6, // Placeholder image
        location: "Sadar, Nagpur",
        type: "1BHK",
        desc: "Enjoy a well-kept, smoke-free flat with basic furniture provided for your comfort.",
        vacancy: 2,
        price: 10000,
    },
    {
        image: img7, // Placeholder image
        location: "Civil Lines, Nagpur",
        type: "2BHK",
        desc: "The flat is clean and furnished, with a strict no-smoking policy in place.",
        vacancy: 4,
        price: 20000,
    },
    {
        image: img8, // Placeholder image
        location: "Khamla, Nagpur",
        type: "1BHK",
        desc: "This flat offers a clean, smoke-free environment and comes with all the required furnishings.",
        vacancy: 1,
        price: 4000,
    },
    {
        image: img9, // Placeholder image
        location: "Hingna, Nagpur",
        type: "2BHK",
        desc: "The flat is well-maintained, furnished, and maintains a no-smoking policy for a pleasant living experience.",
        vacancy: 3,
        price: 12000,
    },
    {
        image: img10, // Placeholder image
        location: "Pachpaoli, Nagpur",
        type: "1BHK",
        desc: "A clean and tidy flat that includes furniture and adheres to a no-smoking rule.",
        vacancy: 4,
        price: 10000,
    },
    // Add more rooms here...
];

const RentARoom = () => {
    const [location, setLocation] = useState("");
    const [type, setType] = useState("All");
    const [filteredRooms, setFilteredRooms] = useState(roomsData);
    const [showBookingForm, setShowBookingForm] = useState(false);
    const [selectedRoom, setSelectedRoom] = useState(null);

    const handleSearch = () => {
        const filtered = roomsData.filter(
            (room) =>
                (location ? room.location.toLowerCase().includes(location.toLowerCase()) : true) &&
                (type !== "All" ? room.type === type : true)
        );
        setFilteredRooms(filtered);
    };

    const handleBook = (room) => {
        setSelectedRoom(room);
        setShowBookingForm(true);
    };

    return (
        <div className="bg-pink-100 min-h-screen flex flex-col h-full w-full">
            <header className="w-full relative">
                {/* Search functionality */}
                <div className="absolute inset-x-0 bottom-0 mx-auto my-auto p-6 rounded-lg w-10/12 mt-12 bg-light-pink">
                    <div className="flex flex-wrap justify-between space-y-4 sm:space-y-0">
                        <div className="w-full sm:w-auto flex items-center space-x-2">
                            <label className="text-black">Location</label>
                            <input
                                type="text"
                                className="rounded-md px-4 py-2 bg-[#D282A6] text-black"
                                placeholder="search here"
                                value={location}
                                onChange={(e) => setLocation(e.target.value)}
                            />
                        </div>
                        <div className="w-full sm:w-auto flex items-center space-x-2">
                            <label className="text-black">Property Type</label>
                            <select
                                className="border rounded-md px-4 py-2 bg-[#D282A6] text-white"
                                value={type}
                                onChange={(e) => setType(e.target.value)}
                            >
                                <option value="All">All</option>
                                <option value="1BHK">1BHK</option>
                                <option value="2BHK">2BHK</option>
                                <option value="3BHK">3BHK</option>
                            </select>
                        </div>
                        <button className="bg-[#6E4555] text-white px-6 py-2 rounded-md hover:bg-[#3A3238] hover:text-[#F7D7DC]" onClick={handleSearch}>
                            Search
                        </button>
                    </div>
                </div>

                {/* Title and subtitle */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex justify-center items-center mb-8">
                    <div className="text-center">
                        <h1 className="text-dark-grayish-brown text-4xl font-bold mt-6">Rent Your Perfect Room</h1>
                        <p className="text-dark-grayish-brown font-medium mt-5 mb-8">
                            Discover and book the ideal room that suits your needs within minutes.
                        </p>
                    </div>
                </div>
            </header>


            <main className="flex-grow py-8 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {filteredRooms.map((room, index) => (
                        <RoomCard
                            key={index}
                            image={room.image}
                            location={room.location}
                            type={room.type}
                            desc={room.desc}
                            vacancy={room.vacancy}
                            price={room.price}
                            onBook={() => handleBook(room)}
                        />
                    ))}
                </div>
            </main>

            {showBookingForm && selectedRoom && (
                <BookingForm room={selectedRoom} onClose={() => setShowBookingForm(false)} />
            )}
        </div>
    );
};

export default RentARoom;
