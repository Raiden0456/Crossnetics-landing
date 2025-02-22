import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCreative, Autoplay } from 'swiper/modules';
import SwiperCore from 'swiper';

import 'swiper/css';
import 'swiper/css/effect-creative';
import 'swiper/css/pagination';
import '../styles/Ipad_pagination.css';

interface IpadSwiperProps {
  slides: any[];
  pagi_active: boolean;
}

export default function IpadSwiper({ slides, pagi_active = true }: IpadSwiperProps) {
  const swiperRef = useRef<SwiperCore | null>(null);
  const [activeIndex, setActiveIndex] = useState(0); // State to keep track of the active slide
  const pagi_active_class = pagi_active ? "" : "hidden";

  const handleSlideClick = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };


  return (
    <div className="relative w-full h-full drop-shadow-ipad bg-[url('/src/images/ipad.png')] bg-cover">
      <div className="relative w-full h-full p-2 sm:p-4 lg:p-3 2lg:p-4 -ml-[1px] rounded-sm md:rounded-lg">
        <div className="w-full h-full rounded-xl overflow-hidden">
          <Swiper
            grabCursor={true}
            rewind={true}
            effect={'creative'}
            creativeEffect={{
              prev: {
                shadow: true,
                translate: ['-20%', 0, -1],
              },
              next: {
                translate: ['100%', 0, 0],
              },
            }}
            resistance={true}
            resistanceRatio={0}
            modules={[Autoplay, EffectCreative]}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            onSlideChange={(swiper) => {
              setActiveIndex(swiper.activeIndex % slides.length);
            }}
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index} onClick={handleSlideClick}>
                <img src={slide.src} alt="" loading='eager' />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className={`${pagi_active_class} absolute left-0 right-0 -bottom-10 flex items-center justify-center`}>
            {slides.map((_, index) => {
              const baseClasses = "bg-white w-2 h-2 rounded-full transition-all duration-300 transform mx-1";
              const activeClass = index === activeIndex ? "w-6" : "";
              return <div key={index} className={`${baseClasses} ${activeClass}`}></div>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
