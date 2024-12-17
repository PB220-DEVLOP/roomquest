import React from 'react';

const Reviews = () => {
    const reviews = [
        {
            id: 1,
            title: 'RoomQuest is a game-changer!',
            description:
                'RoomQuest offers a wide range of accommodation options, user-friendly booking, safe transactions, and dedicated customer support for a hassle-free experience.',
            image: 'path/to/review1.jpg', // Replace with the correct image path
            name: 'Yash Mishra',
            profession: 'FullStack Developer',
        },
        {
            id: 2,
            title: 'RoomQuest made my search for accommodation a breeze!',
            description:
                "RoomQuest's wide array of options, user-friendly interface, secure transactions, and excellent customer support make it the top choice for accommodation seekers.",
            image: 'path/to/review2.jpg',
            name: 'Shubham Mahatme',
            profession: 'Salesforce Developer',
        },
        {
            id: 3,
            title: 'Mindblowing workflow',
            description:
                'Aesthetically, the well-designed components are beautiful and will undoubtedly level up your next application.',
            image: 'path/to/review3.jpg',
            name: 'Parag Dahat',
            profession: 'FullStack Developer',
        },
        {
            id: 4,
            title: 'Efficient Collaborating',
            description:
                'You have many examples that can be used to create a fast prototype for your team.',
            image: 'path/to/review4.jpg',
            name: 'Tejashree Mahajan',
            profession: 'Mechanical Engineer',
        },
    ];

    return (
        <>
            {/* reviews starts */}
            <h1 className="text-center mb-7 mt-10 font-bold text-3xl  text-pink-600">Reviews!!</h1>
            <div>
                {/* Add new review cards dynamically */}
                <div className="grid mb-8 border border-gray-200 rounded-lg shadow-sm md:mb-12 md:grid-cols-2 bg-[#fcf8f7] p-2">
                    {reviews.map((review) => (
                        <figure
                            className="flex flex-col items-center justify-center p-6 text-center  border border-gray-300 rounded-lg m-4 bg-[#f0c5d8]"

                            key={review.id}
                        >
                            <blockquote className="w-full mx-auto mb-4 text-pink-700 lg:mb-8  text-center">
                                <h3 className="text-lg font-semibold text-gray-900">
                                    {review.title}
                                </h3>
                                <p className="my-4">{review.description}</p>
                            </blockquote>
                            <figcaption className="flex items-center justify-center">
                                <img
                                    className="rounded-full w-9 h-9"
                                    src={review.image}
                                    alt="profile picture"
                                />
                                <div className="space-y-0.5 font-medium dark:text-gray-950 text-left rtl:text-right ms-3">
                                    <div>{review.name}</div>
                                    <div className="text-sm text-gray-800 ">
                                        {review.profession}
                                    </div>
                                </div>
                            </figcaption>
                        </figure>
                    ))}
                </div>
            </div>
            {/* reviews ends */}
        </>
    );
};

export default Reviews;
