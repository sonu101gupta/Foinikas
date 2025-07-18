// components/AutoCarousel.jsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import './carousel.css';

const AutoCarousel = ({ items, count }) => {
    return (
        <div className="h-[90%] w-full md:px-4 py-8">
            <Swiper
                spaceBetween={20}
                slidesPerView={1}
                breakpoints={{
                    640: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: count },
                }}
                autoplay={{ delay: 4500, disableOnInteraction: false }}
                loop={true}
                pagination={{ clickable: true }}
                modules={[Autoplay, Pagination]}
            >
                {items.map((item) => (
                    <SwiperSlide key={item.id}>
                        <div
                            className={` rounded-[24px]  h-full overflow-hidden  bg-cover bg-center`}
                            style={{ backgroundImage: `url("${item.img}")` }}
                        >
                            <div className='h-full w-full flex flex-col justify-end items-center text-center pb-[40px]'
                                style={{ background: "linear-gradient(180deg, rgba(135, 17, 193, 0.3) 10%, rgba(100, 3, 63, 0.8) 100%)" }}
                            >

                                <div
                                    className={`h-auto w-[93%] bg-[rgba(0,0,0,0.3)] backdrop-blur-[15px] rounded-[12px]   relative flex ${count === 4 ? 'justify-start items-start' : 'justify-end items-start'
                                        } flex-col px-[20px] md:px-[20px] py-[20px] gap-[20px]`}
                                    style={{
                                        boxShadow:"2px 2px 5px #000"
                                    }}
                                >
                                    <h2
                                        className={`tertiaryTitle text-white ${count === 3
                                                ? 'w-[90%] md:w-[85%] text-left'
                                                : count === 4
                                                    ? 'w-[95%] text-left'
                                                    : 'w-[80%] text-left'
                                                
                                            }`}
                                    >
                                        {item.title}
                                    </h2>
                                    <p
                                        className={`paragraph ${count === 3
                                                ? 'w-[90%] md:w-[80%] text-left'
                                                : count === 4
                                                    ? 'w-full text-left'
                                                    : 'w-[90%] md:w-[80%] text-left'
                                            }`}
                                    >
                                        {item.content}
                                    </p>
                                </div>
                            </div>

                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default AutoCarousel;
