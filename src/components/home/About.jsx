import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import vector from "../../assets/home/vector1.png";
import banner from "../../assets/common/banner.jpg"
import Btn from "../../assets/home/home.png";

const About = () => {

    const [isContentVisible, setIsContentVisible] = useState(false);
    const navigate = useNavigate();
    const toggleContentVisibility = (event) => {
        event.preventDefault();
        setIsContentVisible(!isContentVisible);
    };
    return (
        <>
            {/*  */}
            <a href="#" className="flex flex-col items-center bg-[#edcfdd]  shadow md:flex-row md:w-[100%]"
            >
                <div className="flex flex-col justify-between p-4 leading-normal md:ml-8">
                    <h5 className="mb-2 text-6xl font-bold tracking-tight text-pink-600">
                        Noteworthy technology acquisitions 2021
                    </h5>
                    <p className="mb-3 font-normal text-[#6e4555]  dark:text-gray-700 text-2xl">
                        Here are the biggest enterprise technology acquisitions of 2021 so
                        far, in reverse chronological order.
                    </p>
                    <button
                        className="bg-[#d282a6] text-black w-fit m-auto rounded-full p-3"
                        onClick={toggleContentVisibility}
                    >
                        Explore Now!!
                    </button>
                    {isContentVisible && (
                        <div className="w-[100%] border-neutral-400 shadow-2xl p-4  text-pink-600 border-2 mt-8 flex justify-between">
                            <div>
                                <img src={Btn} alt="" className="w-[90%]" />
                            </div>
                            <div>
                                RoomQuest is not just a platform; it's your trusted companion in
                                finding the perfect home away from home. Our mission is to
                                revolutionize the way you search for accommodation, offering a
                                seamless experience tailored to your needs. With RoomQuest,
                                you're not just renting room; you're embarking on a journey of
                                hassle-free living,supported by cutting-edge technology and
                                dedicated customer service.
                                <button
                                    className="bg-[#d282a6] text-black w-fit m-auto rounded-full p-3 mt-3 justify-end "
                                    onClick={() => navigate("#")}
                                >
                                    More
                                </button>
                            </div>
                        </div>
                    )}
                </div>

                <img
                    className="object-cover w-full md:w-[500px] md:ml-14  h-96 md:h-auto md:rounded-none"
                    src={vector}
                    alt=""
                />
            </a>
            {/*  */}
            <div className='px-20 pb-8'>
                <img
                    src={banner}
                    className="md:h-[550px] w-screen mt-14 rounded-2xl"
                />

            </div>
            {/* .. */}
        </>
    )
}

export default About
