import React from 'react'
import feature1 from '../../assets/home/features/virtual-room-exploration.png';
import feature2 from '../../assets/home/features/flexible-lease-option.png';
import feature3 from '../../assets/home/features/verified-listings.png';

const Features = () => {

    const features = [
        {
            title: 'Seamless Experience',
            description: 'Our platform ensures a hassle-free transition with unmatched privacy, instant move-in options, and the lowest security deposit.',
            icon: '👥',
        },
        {
            title: 'Unmatched Privacy',
            description: 'Enjoy unparalleled privacy in our thoughtfully designed accommodations, ideal for studying or working from home.',
            icon: '🔒',
        },
        {
            title: 'Instant Move-In',
            description: 'Move into your new home instantly, with a streamlined process that saves you time and hassle.',
            icon: '🚚',
        },
        {
            title: 'Lowest Deposit',
            description: 'Benefit from the lowest security deposit options, ensuring affordable living with peace of mind.',
            icon: '💵',
        },
    ];

    const stats = [
        { value: '200,000', label: 'Happy customers' },
        { value: '100,000', label: 'Houses across India' },
        { value: '9', label: 'Cities in India' },
        { value: '₹38+', label: 'Savings made on brokerage' },
    ];
    return (
        <>
            <div className="p-8 bg-pink-100 mt-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center mb-8">
                    {features.map((feature, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <div className="text-4xl mb-4">{feature.icon}</div>
                            <h3 className="font-semibold text-lg">{feature.title}</h3>
                            <p className="text-gray-500">{feature.description}</p>
                        </div>
                    ))}
                </div>
                <div className="flex flex-col md:flex-row justify-around items-center bg-[#d282a6] p-6 rounded-lg">
                    {stats.map((stat, index) => (
                        <div key={index} className="text-center mb-4 md:mb-0">
                            <h4 className="text-3xl font-bold">{stat.value}</h4>
                            <p className="text-gray-800">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="text-center py-10 bg-gray-50">
                <h1 className="text-4xl font-bold mb-4 text-pink-600">Find Your Best Accommodation</h1>
                <p className="text-lg text-pink-800 ">
                    Discover hassle-free room finding for students and employees.
                </p>
                <p className="mt-4 text-lg text-pink-800">
                    Experience the convenience of finding the perfect room tailored to your needs...
                </p>
            </div>
            <section className="grid grid-cols-1 md:grid-cols-3 gap-8 p-10 bg-pink-200">
                <div className="flex flex-col items-center text-center">
                    <img src={feature1} alt="Virtual Room Exploration" className="w-16 mb-4" />
                    <h3 className="text-xl font-semibold">Virtual Room Exploration</h3>
                    <p className="text-gray-600">Effortlessly explore rooms with detailed images and 360-degree virtual tours from home.</p>
                </div>
                <div className="flex flex-col items-center text-center">
                    <img src={feature2} alt="Flexible Lease Option" className="w-16 mb-4" />
                    <h3 className="text-xl font-semibold">Flexible Lease Option</h3>
                    <p className="text-gray-600">Find accommodations with terms that suit your needs for a hassle-free stay.</p>
                </div>
                <div className="flex flex-col items-center text-center">
                    <img src={feature3} alt="Verified Listings" className="w-16 mb-4" />
                    <h3 className="text-xl font-semibold">Verified Listings</h3>
                    <p className="text-gray-600">Rest assured with verified listings, ensuring a seamless transition.</p>
                </div>
            </section>
        </>
    )
}

export default Features
