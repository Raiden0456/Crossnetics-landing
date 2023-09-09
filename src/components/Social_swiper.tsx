import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import '../styles/Social_swiper.css' 

interface Social {
  title: string;
  description: string;
  testimonial: string;
  image: string;
  gradient: string[];
}

export default function SocialSwiper({ social: social }: { social: Social[] }) {

  const swiperRef = useRef(null);

  const pagination = {
    type: "custom" as const,
    renderCustom: (_: any, current: any) => {
      return social.map((entry, index) => {
        const isActive = index + 1 === current;
        const baseClasses = "h-11 px-3 lg:h-8 xl:h-11 rounded-2xl lg:rounded-xl xl:rounded-2xl flex justify-center items-center cursor-pointer";
        const bgHoverClass = isActive ? "" : "hover:shadow-lg hover:bg-opacity-60 transition-shadow duration-300";
        const bgColorClass = isActive ? "bg-white" : "bg-white bg-opacity-30";
        const textColorClass = isActive ? "text-blue-500" : "text-white";
        return `
          <div class="${baseClasses} ${bgColorClass} ${bgHoverClass}" onClick="document.querySelector('.custom-swiper').swiper.slideTo(${index})">
            <div class="${textColorClass} text-xs lg:text-3xs xl:text-xs font-extrabold uppercase">${entry.title.split(' ')[0]}</div>
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
            onSwiper={(swiper: any ) => { swiperRef.current = swiper; }}
          >
          {social.map((entry, index) => {
            
            return (
              <SwiperSlide key={index}>
                <div style={{background: `linear-gradient(to left, ${entry.gradient[0]}, ${entry.gradient[1]})`}} className="h-fit min-h-[50rem] md:min-h-[40rem] lg:min-h-[650px] 2lg:min-h-[550px] xl:min-h-[700px] flex items-center justify-center">
                  <div className="relative flex flex-row justify-between w-11/12 lg:w-2/3 h-full mt-48 md:mt-0 2lg:mt-10 xl:mt-5">
                    <div className="2lg:flex w-4/12 items-center absolute hidden  2lg:relative">
                      <img src={`/3d_images/${entry.image}`} alt="3d-image" className="w-full" loading='lazy'/>
                    </div>
                    <div className="relative flex flex-col gap-y-10 md:gap-y-12 items-start justify-center lg:w-7/12">
                      <div className="relative flex flex-col gap-y-4 justify-start items-start">
                        <h1 className="text-white text-2xl xl:text-3xl 2xl:text-4xl font-bold capitalize">{entry.title}</h1>
                        <p className="text-white text-lg xl:text-xl 2xl:text-2xl font-medium whitespace-pre-line leading-tight">{entry.description}</p>
                      </div>
                      <div className="flex flex-col gap-y-2 justify-start items-start">
                        <img src="/logo.svg" alt="logo" className="w-10" loading='lazy'/>
                        <p className="text-sky-100 text-2xs xl:text-sm whitespace-pre-line">{entry.testimonial}</p>
                      </div>
                    </div>
                    <div className="lg:flex w-4/12 items-center hidden lg:relative 2lg:hidden 2lg:absolute">
                      <img src={`/3d_images/${entry.image}`} alt="3d-image" className="w-full" loading='lazy'/>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
      </Swiper>
    </div>
  );
}
