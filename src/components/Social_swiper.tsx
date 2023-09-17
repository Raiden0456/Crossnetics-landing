import { useRef } from 'react';
import SwiperCore from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import '../styles/Social_swiper.css';

interface Social {
  header: string;
  title: string;
  button: string;
  description: string;
  testimonial: string;
  image: string;
  gradient: string[];
}

export default function SocialSwiper({ social: social }: { social: Social[] }) {
  const swiperRef = useRef<SwiperCore | null>(null);

  return (
    <div className="flex items-center justify-center"> 
        <Swiper 
          className="h-full w-screen custom-swiper"
          
          effect={'fade'}
          modules={[EffectFade, Pagination]}
          onSwiper={(swiper: any ) => { swiperRef.current = swiper; }}
        >
          {social.map((entry, index) => {
            return (
              <SwiperSlide key={index}>
                <div style={{background: `linear-gradient(to left, ${entry.gradient[0]}, ${entry.gradient[1]})`}} className="h-[50rem] md:h-[40rem] lg:h-[600px] 2lg:h-[500px] xl:h-[700px] flex items-center justify-center">
                  <div className="relative flex flex-row justify-between w-11/12 lg:w-2/3 h-2/3 mt-48  lg:my-20">
                    <div className="2lg:flex w-4/12 items-start justify-center absolute hidden  2lg:relative">
                      <img src={`/3d_images/${entry.image}`} alt="" className="w-full" loading='lazy'/>
                    </div>
                    <div className="relative flex flex-col gap-y-4 items-start justify-between h-full lg:w-7/12">
                      <div className="custom-pagination mb-6 w-full">
                          {social.map((entry, idx) => {
                            const isActive = idx === index;
                            const baseClasses = "h-11 px-3 lg:h-8 xl:h-11 rounded-2xl lg:rounded-xl xl:rounded-2xl flex justify-center items-center cursor-pointer";
                            const bgHoverClass = isActive ? "" : "hover:shadow-lg hover:bg-opacity-60 transition-shadow duration-300";
                            const bgColorClass = isActive ? "bg-white" : "bg-white bg-opacity-30";
                            const textColorClass = isActive ? "text-blue-500" : "text-white";
                            return (
                              <div key={idx} className={`${baseClasses} ${bgColorClass} ${bgHoverClass}`} onClick={() => swiperRef.current?.slideTo(idx)}>
                                <div className={`${textColorClass} text-xs lg:text-3xs xl:text-xs font-extrabold uppercase mt-[1px]`}>{entry.button}</div>
                              </div>
                            );
                          })}
                      </div>
                      <div className="relative flex flex-col gap-y-4 justify-start items-start">
                        <h1 className="text-white text-xl xl:text-2xl 2xl:text-3xl font-bold leading-tight">{entry.header}</h1>
                        <h2 className="text-white text-base xl:text-xl 2xl:text-2xl font-medium leading-tight">{entry.title}</h2>
                        <p className="text-sky-100 text-2xs xl:text-base whitespace-pre-line leading-[21px]">{entry.description}</p>
                      </div>
                      <div className="flex flex-col gap-y-2 justify-start items-start">
                        <img src="/logo.svg" alt="" className="w-8" loading='lazy'/>
                        <p className="text-sky-100 text-xs xl:text-base whitespace-pre-line">{entry.testimonial}</p>
                      </div>
                    </div>
                    <div className="lg:flex w-4/12 items-start justify-start hidden lg:relative 2lg:hidden 2lg:absolute ">
                      <img src={`/3d_images/${entry.image}`} alt="" className="w-full" loading='lazy'/>
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
