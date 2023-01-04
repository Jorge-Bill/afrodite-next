import React from 'react';
import config from '../config/index.json';
import { AiFillStar } from 'react-icons/ai';
import { Swiper, SwiperSlide } from "swiper/react";
import Divider from './Divider';

import "swiper/css";

const Feedbacks = () => {
    const { company, feedbacks } = config;
    const { logo, name: companyName } = company;

    return (
        <section className="bg-white" id="feedback">
            <div className="max-w-screen-xl px-4 py-8 mx-auto lg:py-16 lg:px-6">
                <h6 className="text-center text-4xl font-bold tracking-tight sm:text-5xl mb-2">
                    Feedbacks
                </h6>
                <Divider />
                <Swiper 
                        slidesPerView={1}
                        spaceBetween={32}
                        centeredSlides={true}
                        loop={true}
                        modules={[]}
                        breakpoints={{
                            576: {
                                slidesPerView: 1,
                            },
                            1024: {
                                slidesPerView: 1,
                            },
                        }}
                        autoplay={{
                            delay: 2000,
                        }}
                        className="mySwiper max-w-screen-md mx-auto" 
                        >
                        {feedbacks.map((feedback) => (
                            <SwiperSlide key={Math.random()}>
                                <blockquote className="border-4 border-indigo-600 border-opacity-50 rounded-lg p-8 shadow-xl bg-purple-50">
                                    <div className="flex items-center">
                                        <img
                                        src={logo} 
                                        alt={companyName}
                                        className="h-16 w-16 rounded-full object-cover"
                                        />
                                        <div className="ml-4">
                                            <div className="flex start gap-0.5 text-yellow-500">
                                                <AiFillStar />
                                                <AiFillStar />
                                                <AiFillStar />
                                                <AiFillStar />
                                                <AiFillStar />
                                            </div>
                                            <p className="mt-1 text-sm font-medium text-purple-700">{feedback.name}</p>
                                        </div>
                                    </div>
                                    <p className="font-medium mt-4 dark:text-white text-gray-500">
                                        {String(feedback.review)} 
                                    </p>
                                </blockquote>
                            </SwiperSlide>
                        ))}
                    </Swiper>
            </div>
        </section>
    );
};
export default Feedbacks;
