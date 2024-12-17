import React from 'react';

const AboutUs = () => {
  const teamMembers = [
    {
      name: 'Tanvi Talhan',
      role: 'FRONTEND DEVELOPER',
      description: 'Tanvi specializes in developing the UI components of the Room-Quest project, creating responsive designs with React and Tailwind CSS.',
      image: 'https://via.placeholder.com/150', // Replace with real image URL
    },
    {
      name: 'Sanjana Mankar',
      role: 'UI/UX DEVELOPER',
      description: 'Sanjana is responsible for designing intuitive user interfaces and improving the user experience for Room-Quest.',
      image: 'https://via.placeholder.com/150', // Replace with real image URL
    },
    {
      name: 'Piyush Falke',
      role: 'BACKEND DEVELOPER',
      description: 'Piyush manages the backend operations for Room-Quest, ensuring smooth server-side functionality.',
      image: 'https://via.placeholder.com/150', // Replace with real image URL
    },
    {
      name: 'Akash',
      role: 'FULL STACK INTERN',
      description: 'Akash assists in both frontend and backend development, learning and contributing to various parts of the project.',
      image: 'https://via.placeholder.com/150', // Replace with real image URL
    },
    {
      name: 'Akshya',
      role: 'FULL STACK INTERN ',
      description: 'Akshya collaborates on both frontend and backend tasks, contributing to full stack development.',
      image: 'https://via.placeholder.com/150', // Replace with real image URL
    },
  ];

  return (
    <div className="min-h-screen py-10 px-6" style={{ backgroundColor: 'hsla(9, 51%, 92%, 1)' }}> 
      <h1 className="text-center text-4xl font-bold mb-8 mt-8 text-eggplant">
        Meet Our Team
      </h1>

      {/* Grid layout for team members */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
        {/* First row - Developers */}
        {teamMembers.slice(0, 3).map((member, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center w-full h-full" style={{ backgroundColor: 'hsla(351, 53%, 81%, 1)' }}>
            <img
              src={member.image}
              alt={member.name}
              className="mx-auto mb-4 w-32 h-32 rounded-full object-cover"
            />
            <h3 className="text-xl font-bold" style={{ color: 'hsla(315, 7%, 21%, 1)' }}>{member.name}</h3>
            <p className="font-medium mb-2" style={{ color: 'hsla(337, 23%, 35%, 1)' }}>{member.role}</p>
            <p className="text-black">{member.description}</p>
          </div>
        ))}
      </div>

      {/* Second row - Interns */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mt-10">
        {teamMembers.slice(3).map((member, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center w-full h-full" style={{ backgroundColor: 'hsla(333, 47%, 67%, 1)' }}>
            <img
              src={member.image}
              alt={member.name}
              className="mx-auto mb-4 w-32 h-32 rounded-full object-cover"
            />
            <h3 className="text-xl font-bold" style={{ color: 'hsla(315, 7%, 21%, 1)' }}>{member.name}</h3>
            <p className="font-medium mb-2" style={{ color: 'hsla(337, 23%, 35%, 1)' }}>{member.role}</p>
            <p className="text-black">{member.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
