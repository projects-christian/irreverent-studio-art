"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import Image from "next/image";
import "@/components/shared/slider/slider.scss";

const Slider = () => {
    const images = [
        "/images/slider-slide-1.jpg",
        "/images/slider-slide-2.jpg",
        "/images/slider-slide-3.jpg",
        "/images/slider-slide-4.jpg",
        "/images/slider-slide-1.jpg",
    ];

    return (
        <div className="section-slider">
            <Swiper
                className="slider-first-screen"
                modules={[Autoplay]}
                loop={true}
                speed={4000}
                slidesPerView={2}
                spaceBetween={0}
                freeMode={true}
                autoplay={{
                    delay: 0,
                    disableOnInteraction: false,
                }}
                breakpoints={{
                    767: {
                        slidesPerView: 3,
                        spaceBetween: 0,
                    },
                    959: {
                        slidesPerView: 4,
                        spaceBetween: 0,
                    },
                }}
                observer={true}
                observeParents={true}
            >
                {images.map((_, i) => (
                    <SwiperSlide key={i}>
                        <div className="section-slider-item">
                            <Image
                                src="/images/slider-slide-3.jpg"
                                alt={`Slide ${i}`}
                                width={310}
                                height={310}
                                priority
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Slider;
