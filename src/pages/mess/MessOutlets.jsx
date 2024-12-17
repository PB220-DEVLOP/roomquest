

import React from 'react';
import MessCard from '../../components/mess/MessCard';
import image1 from '../../assets/cardimages/card.jpg';
import image2 from '../../assets/cardimages/card2.jpeg';
import image3 from '../../assets/cardimages/card3.jpeg';
import image4 from '../../assets/cardimages/card4.webp';
import image5 from '../../assets/cardimages/card6.webp';
import image6 from '../../assets/cardimages/card7.jpeg';
import image7 from '../../assets/cardimages/card8.jpeg';
import image8 from '../../assets/cardimages/card9.jpeg';
import image9 from '../../assets/cardimages/card10.jpeg';
import image10 from '../../assets/cardimages/card11.jpg';

const messData = [
  {
    id: 1,
    name: 'Tasty Tiffins',
    image: image1,
    description: `Delicious and hygienic tiffins delivered to your doorstep. Freshly prepared daily with a rotating menu to keep your meals exciting.`,
    price: '₹150/meal',
    deliveryTime: '30-40 min',
    rating: 4.5,
    reviews: 120,
  },
  {
    id: 2,
    name: 'Healthy Meals',
    image: image2,
    description: `Nutritious and balanced meals for a healthy lifestyle. We use organic ingredients sourced from local farms.`,
    price: '₹200/meal',
    deliveryTime: '25-35 min',
    rating: 4.7,
    reviews: 98,
  },
  {
    id: 3,
    name: 'Shree Mess',
    image: image3,
    description: `Experience the authentic taste of home-cooked meals away from home. Our menu includes traditional dishes prepared with love and care.`,
    price: '₹180/meal',
    deliveryTime: '35-45 min',
    rating: 4.6,
    reviews: 150,
  },
  {
    id: 4,
    name: 'Quick Bite',
    image: image4,
    description: `Quick and tasty meals for your busy schedule. Perfectly portioned and ready to go, saving you time and effort.`,
    price: '₹130/meal',
    deliveryTime: '20-30 min',
    rating: 4.3,
    reviews: 80,
  },
  {
    id: 5,
    name: 'Budget Bites',
    image: image5,
    description: `Affordable and filling meals for students and professionals. We offer generous portions without breaking the bank.`,
    price: '₹100/meal',
    deliveryTime: '40-50 min',
    rating: 4.2,
    reviews: 65,
  },
  {
    id: 6,
    name: 'Spice Kitchen',
    image: image6,
    description: `A burst of flavors in every bite with our spicy and flavorful dishes. We specialize in bringing authentic regional spices to your plate.`,
    price: '₹170/meal',
    deliveryTime: '30-40 min',
    rating: 4.8,
    reviews: 110,
  },
  {
    id: 7,
    name: 'Veggie Delight',
    image: image7,
    description: `Delicious vegetarian meals with a variety of options. Our menu is crafted to satisfy both vegetarians and non-vegetarians alike.`,
    price: '₹160/meal',
    deliveryTime: '30-40 min',
    rating: 4.4,
    reviews: 90,
  },
  {
    id: 8,
    name: 'Protein Pack',
    image: image8,
    description: `High-protein meals for fitness enthusiasts. We offer balanced meals with the right amount of protein to fuel your workouts.`,
    price: '₹250/meal',
    deliveryTime: '25-35 min',
    rating: 4.9,
    reviews: 75,
  },
  {
    id: 9,
    name: 'Traditional Tastes',
    image: image9,
    description: `Authentic traditional meals from various regions of India. Experience the rich cultural heritage through our curated dishes.`,
    price: '₹180/meal',
    deliveryTime: '30-45 min',
    rating: 4.7,
    reviews: 85,
  },
  {
    id: 10,
    name: 'Luxury Lunches',
    image: image10,
    description: `Premium meals with gourmet ingredients for a luxurious dining experience. Indulge in our chef-crafted dishes that bring fine dining to your doorstep.`,
    price: '₹300/meal',
    deliveryTime: '35-45 min',
    rating: 4.9,
    reviews: 60,
  },
  {
    id: 11,
    name: 'Rainbow Mess',
    image: image10,
    description: `Premium meals with gourmet ingredients for a luxurious dining experience. Indulge in our chef-crafted dishes that bring fine dining to your doorstep.`,
    price: '₹300/meal',
    deliveryTime: '35-45 min',
    rating: 4.9,
    reviews: 60,
  },
  {
    id: 12,
    name: 'Tiffin Wala ',
    image: image10,
    description: `Premium meals with gourmet ingredients for a luxurious dining experience. Indulge in our chef-crafted dishes that bring fine dining to your doorstep.`,
    price: '₹300/meal',
    deliveryTime: '35-45 min',
    rating: 4.9,
    reviews: 60,
  },
];

const MessOutlets = () => {
  return (
  
    <div className="min-h-screen bg-gray-100 p-10">
      <h1 className="text-3xl font-bold text-center mb-4 mt-12" >Mess Outlets</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-3">

        {messData.map((mess) => (
          <MessCard
            key={mess.id}
            name={mess.name}
            image={mess.image}
            description={mess.description}
            price={mess.price}
            deliveryTime={mess.deliveryTime}
            rating={mess.rating}
            reviews={mess.reviews}
          />
        ))}
      </div>
    </div>
  );
};

export default MessOutlets;
