"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import Image from "next/image";
import Link from "next/link";
import "@/components/shared/slider-two/slider-two.scss";
import { Product } from "@/types";
import { useEffect } from "react";

const SliderTwo = ({ data, limit }: {
    data: Product[];
    limit?: number;
}) => {
    const images = [
        // "/images/slider/lamp-manikin.jpg",
        // "/images/slider/table-mickey.jpg",
        // "/images/slider/chair-black-dice.jpg",
        // "/images/slider/table-black-balls.jpg",
        // "/images/slider/cutler-deadpool.jpg",
        "/images/products/fortuny-1.jpg",
        "/images/products/fortuny-1.jpg",
        "/images/products/fortuny-1.jpg",
        "/images/products/fortuny-1.jpg",
        "/images/products/fortuny-1.jpg",
    ];

    useEffect(() => {
        setTimeout(() => {
            window.dispatchEvent(new Event("resize"));
        }, 300);
    }, []);
    
    const limitedData = limit ? data.slice(0, limit) : data;
    if (!data || data.length === 0) return null;

    return (
        <section className="section-slider-two mb-8">
            <div className="relative">
                <Swiper
                    key={JSON.stringify(limitedData.map((item) => item.id)).replaceAll('"', '')}
                    className="slider-first-screen"
                    modules={[Autoplay]}
                    loop={true}
                    speed={7000}
                    slidesPerView={2}
                    spaceBetween={0}
                    freeMode={true}
                    autoplay={{
                        delay: 2000,
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
                    {limitedData.map((item, i) => (
                        <SwiperSlide key={item.id ?? i}>
                            
                            {item.images?.[0] && (
                            <Link href={`/product/${item.slug}`}>
                                <div className="section-slider-two-item relative w-full h-[220px] sm:h-[500px] overflow-hidden">
                                    <Image
                                        src={item.images[0]}
                                        alt={`Slide ${i}`}
                                        width={310}
                                        height={310}
                                        className="w-full h-full object-cover"
                                        priority
                                    />
                                    <div className="absolute bottom-8 w-full text-left text-white py-4 px-14">
                                        <p className="text-sm tracking-wide">{item.brand}</p>
                                        <h3 className="text-xl font-semibold uppercase">{item.name}</h3>
                                        {/* <span className="text-base font-medium">{product.price}</span> */}
                                    </div>
                                </div>
                                </Link>
                            )}
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default SliderTwo;
