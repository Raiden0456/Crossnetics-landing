import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import './Social_swiper.css'; 

export default function SocialSwiper({ social }) {
  const swiperRef = useRef(null);

  const pagination = {
    type: "custom",
    renderCustom: (_, current) => {
      return social.map((entry, index) => {
        const isActive = index + 1 === current;
        const baseClasses = "w-28 h-11 px-7.5 py-2.5 rounded-2xl flex justify-center items-center cursor-pointer";
        const bgHoverClass = isActive ? "" : "hover:shadow-lg hover:bg-opacity-60 transition-shadow duration-300";
        const bgColorClass = isActive ? "bg-white" : "bg-white bg-opacity-30";
        const textColorClass = isActive ? "text-blue-500" : "text-white";
        return `
          <div class="${baseClasses} ${bgColorClass} ${bgHoverClass}" onClick="document.querySelector('.custom-swiper').swiper.slideTo(${index})">
            <div class="${textColorClass} text-xs font-extrabold uppercase">${entry.title.split(' ')[0]}</div>
          </div>`;
      }).join("");
    }
  }

  return (
    <div className="flex items-center justify-center">
      <Swiper 
            className="h-full w-screen custom-swiper"
            pagination={pagination}
            effect={'fade'}
            modules={[EffectFade, Pagination]}
            onSwiper={(swiper) => { swiperRef.current = swiper; }}
          >
            {social.map((entry, index) => (
              <SwiperSlide key={index}>
                <div style={{background: `linear-gradient(to left, ${entry.gradient[0]}, ${entry.gradient[1]})`}} className="h-fit min-h-[60rem] sm:min-h-[677px] flex items-center justify-center">
                  <div className="relative flex justify-between w-2/3 h-full mt-48 md:mt-0">
                    <div className="flex w-4/12 items-center absolute invisible xl:visible xl:relative">
                      <img src={`/3d_images/${entry.image}`} alt="" className="w-full" />
                    </div>
                    <div className="relative flex flex-col gap-y-10 md:gap-y-12 xl:gap-y-20 items-start justify-center lg:w-7/12">
                      <div className="relative flex flex-col gap-y-4 justify-start items-start">
                        <h1 className="text-white text-2xl xl:text-3xl 2xl:text-4xl font-bold uppercase">{entry.title}</h1>
                        <p className="text-white text-xl xl:text-1.5xl 2xl:text-2xl font-medium whitespace-pre-line leading-tight">{entry.description}</p>
                      </div>
                      <div className="flex flex-col gap-y-2 justify-start items-start">
                        <img src="/logo.svg" alt="" className="w-10" />
                        <p className="text-sky-100 text-sm font-normal leading-[18.20px] whitespace-pre-line">{entry.testimonial}</p>
                      </div>
                    </div>
                    <div className="flex w-4/12 items-center absolute invisible lg:visible lg:relative xl:invisible xl:absolute">
                      <img src={`/3d_images/${entry.image}`} alt="" className="w-full" />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
      </Swiper>
    </div>
  );
}
