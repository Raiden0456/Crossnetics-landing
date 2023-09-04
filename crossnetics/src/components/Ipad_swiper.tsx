import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCreative, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-creative';
import 'swiper/css/pagination';

interface IpadSwiperProps {
  image_path: string[];
}

export default function IpadSwiper({ image_path }: IpadSwiperProps) {
  return (
    <div className="relative w-full h-full drop-shadow-ipad bg-[url('/ipad.png')] bg-cover">
      <div className="relative w-full h-full p-2 lg:p-3 xl:p-4">
        <div className="w-full h-full rounded-lg overflow-hidden">
          <Swiper 
            grabCursor={true}
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
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            resistance={true}
            resistanceRatio={0}
            modules={[Autoplay, EffectCreative]}
          >
            {image_path.map((path, index) => (
              <SwiperSlide key={index}><img src={path} alt="slide"/></SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
