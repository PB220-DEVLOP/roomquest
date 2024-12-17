import React, { useState } from 'react';
import img1 from '../../assets/RoomMates/img1.png'
import img2 from '../../assets/RoomMates/img2.png'
import img3 from '../../assets/RoomMates/img3.png'
import img4 from '../../assets/RoomMates/img4.png'
import img5 from '../../assets/RoomMates/img5.png'
import img6 from '../../assets/RoomMates/img6.png'
import img7 from '../../assets/RoomMates/img7.png'
import img8 from '../../assets/RoomMates/img8.jpg'
import img9 from '../../assets/RoomMates/1.png'


const RoomMates = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filter, setFilter] = useState('');
    const [sortAge, setSortAge] = useState('');
    const [ageRange, setAgeRange] = useState('');
    const [expanded, setExpanded] = useState(null);

    const roomsData = [
        {
            image: img1,
            location: 'Sitabuldi, Nagpur',
            type: '2BHK',
            desc: 'Well-maintained, fully furnished. 2 rooms available.',
            vacancy: 2,
            price: 12000,
            smoking: 'No smoking',
            pets: 'No pets',
            light: 'Good natural light',
        },
        {
            image: img2,
            location: 'Ramdas Peth, Nagpur',
            type: '3BHK',
            desc: 'Clean, modern. 3 rooms available.',
            vacancy: 3,
            price: 18000,
            smoking: 'No smoking',
            pets: 'Pet-friendly',
            light: 'Excellent natural light',
        },
        {
            image: img3,
            location: 'Medical Square, Nagpur',
            type: '2BHK',
            desc: 'Tidy living space, non-smoking. 4 rooms available.',
            vacancy: 4,
            price: 20000,
            smoking: 'No smoking',
            pets: 'No pets',
            light: 'Moderate natural light',
        },
        {
            image: img4,
            location: 'Padole Square, Nagpur',
            type: '3BHK',
            desc: 'Cozy setting, no smoking. 5 rooms available.',
            vacancy: 5,
            price: 24000,
            smoking: 'No smoking',
            pets: 'No pets',
            light: 'Excellent natural light',
        },
        {
            image: img5,
            location: 'Dhantoli, Nagpur',
            type: '1BHK',
            desc: 'Comfortable, smoke-free. 2 rooms available.',
            vacancy: 2,
            price: 12000,
            smoking: 'No smoking',
            pets: 'No pets',
            light: 'Good natural light',
        },
        {
            image: img6,
            location: 'Trimurti Nagar, Nagpur',
            type: '2BHK',
            desc: 'Modern, well-ventilated. 2 rooms available.',
            vacancy: 2,
            price: 15000,
            smoking: 'No smoking',
            pets: 'Pet-friendly',
            light: 'Excellent natural light',
        },
        {
            image: img7,
            location: 'Civil Lines, Nagpur',
            type: '3BHK',
            desc: 'Luxurious, smoke-free. 3 rooms available.',
            vacancy: 3,
            price: 30000,
            smoking: 'smoking',
            pets: 'No pets',
            light: 'Excellent natural light',
        },
        {
            image: img8,
            location: 'Jaripatka, Nagpur',
            type: '1BHK',
            desc: 'Affordable, cozy. 1 room available.',
            vacancy: 1,
            price: 8000,
            smoking: 'No smoking',
            pets: 'No pets',
            light: 'Moderate natural light',
        },
        {
            image: img9,
            location: 'Jaripatka, Nagpur',
            type: '1BHK',
            desc: 'Affordable, cozy. 1 room available.',
            vacancy: 1,
            price: 8000,
            smoking: 'No smoking',
            pets: 'No pets',
            light: 'Moderate natural light',
        },
    ];

    const roommates = [
        {
            id: 1,
            name: 'John Doe',
            age: 24,
            gender: 'Male',
            preferences: 'Non-smoker, No pets',
            roomDetails: roomsData[0],
        },
        {
            id: 2,
            name: 'Jane Smith',
            age: 21,
            gender: 'Female',
            preferences: 'Vegetarian, Pet-friendly',
            roomDetails: roomsData[1],
        },
        {
            id: 3,
            name: 'Sanjana Mankar',
            age: 23,
            gender: 'Female',
            preferences: 'Vegetarian, No-smoking',
            roomDetails: roomsData[2],
        },
        {
            id: 4,
            name: 'Priyanshi Lute',
            age: 15,
            gender: 'Female',
            preferences: 'Vegetarian, No-alcoholic',
            roomDetails: roomsData[3],
        },
        {
            id: 5,
            name: 'Tanvi Talhan',
            age: 22,
            gender: 'Female',
            preferences: 'Vegetarian, No-smoking',
            roomDetails: roomsData[4],
        },
        {
            id: 6,
            name: 'Anil Patel',
            age: 25,
            gender: 'Male',
            preferences: 'Non-smoker, Pet-friendly',
            roomDetails: roomsData[5],
        },
        {
            id: 7,
            name: 'Priya Desai',
            age: 26,
            gender: 'Female',
            preferences: 'Vegetarian, No pets',
            roomDetails: roomsData[6],
        },
        {
            id: 8,
            name: 'Ravi Shukla',
            age: 24,
            gender: 'Male',
            preferences: 'Non-smoker, No pets',
            roomDetails: roomsData[7],
        },
        {
            id: 9,
            name: 'Piyush Falke',
            age: 26,
            gender: 'Male',
            preferences: 'Vegetarian, Pet-friendly',
            roomDetails: roomsData[8],
        },
    ];

    const filteredRoommates = roommates
    .filter(roommate =>
        roommate.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (filter === '' || roommate.gender === filter)
    )
    .sort((a, b) => {
        if (sortAge === 'asc') {
            return a.age - b.age;
        } else if (sortAge === 'desc') {
            return b.age - a.age;
        }
        return 0;
    })
    .filter(roommate => {
        if (ageRange === '18-25') {
            return roommate.age >= 18 && roommate.age <= 25;
        } else if (ageRange === '26-35') {
            return roommate.age >= 26 && roommate.age <= 35;
        } else if (ageRange === '36+') {
            return roommate.age >= 36;
        }
        return true; // If no age range is selected, return all roommates
    });


    return (
        <div className="bg-pink-100 min-h-screen flex flex-col h-full w-full">
            <h1 className="text-dark-grayish-brown text-4xl font-bold text-center mt-6">Find Your Roommate</h1>

            <div className="flex justify-center mb-6 mt-4">
                <input
                    type="text"
                    placeholder="Search by name..."
                    className="p-2 border border-gray-300 bg-[#E8B4BC] rounded-l-md focus:outline-none focus:ring-2 focus:ring-[#F5E3E0]"
                    value={searchTerm}
                    onChange={e => setSearchTerm(e.target.value)}
                />
                <select
                    className="p-2 border border-gray-300 bg-[#E8B4BC] rounded-r-md focus:outline-none focus:ring-2 focus:ring-[#F5E3E0]"
                    value={filter}
                    onChange={e => setFilter(e.target.value)}
                >
                    <option value="">All</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select>
                <select
                    className="p-2 border border-gray-300 bg-[#E8B4BC] rounded-md focus:outline-none focus:ring-2 focus:ring-[#F5E3E0] ml-4"
                    value={sortAge}
                    onChange={e => setSortAge(e.target.value)}
                >
                    <option value="">Sort by Age</option>
                    <option value="asc">Ascending</option>
                    <option value="desc">Descending</option>
                </select>
                <select
                    className="p-2 border border-gray-300 bg-[#E8B4BC] rounded-md focus:outline-none focus:ring-2 focus:ring-[#F5E3E0] ml-4"
                    value={ageRange}  // Added dropdown for age range
                    onChange={e => setAgeRange(e.target.value)}
                >
                    <option value="">Select Age Range</option>
                    <option value="18-25">18-25</option>
                    <option value="26-35">26-35</option>
                    <option value="36+">36+</option>
                </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 rounded-lg ml-4 mr-4 mb-10">
                {filteredRoommates.map(roommate => (
                    <div key={roommate.id} className="bg-[#F5E3E0] rounded-xl p-4 flex flex-col items-center">
                        <img
                            src={roommate.roomDetails.image}
                            alt={roommate.name}
                            className="w-32 h-32 object-cover rounded-full mb-4"
                        />
                        <h2 className="text-xl text-black font-bold">{roommate.name}</h2>
                        <p className="text-gray-900 font-semibold">Age: {roommate.age}</p>
                        <p className="text-gray-900 font-semibold">{roommate.gender}</p>
                        <p className="text-gray-900 font-semibold">{roommate.preferences}</p>
                        <button
                            onClick={() => setExpanded(expanded === roommate.id ? null : roommate.id)}
                            className="bg-[#6E4555] hover:bg-[#ea86ac] text-white font-bold py-2 px-4 rounded mt-2"
                        >
                            {expanded === roommate.id ? 'Hide Details' : 'Show Details'}
                        </button>
                        {expanded === roommate.id && (
                            <div className="mt-4 text-center">
                                <h3 className="text-lg font-bold">Room Details</h3>
                                <p className="text-gray-900 font-semibold">{roommate.roomDetails.location}</p>
                                <p className="text-gray-900 font-semibold">{roommate.roomDetails.type}</p>
                                <p className="text-gray-900">{roommate.roomDetails.desc}</p>
                                <p className="text-gray-900 font-semibold">Rent: ₹{roommate.roomDetails.price}</p>
                                <p className="text-gray-900">{roommate.roomDetails.smoking}</p>
                                <p className="text-gray-900">{roommate.roomDetails.pets}</p>
                                <p className="text-gray-900">{roommate.roomDetails.light}</p>
                                <p className="text-gray-900 font-semibold">Rooms Available: {roommate.roomDetails.vacancy}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RoomMates;
