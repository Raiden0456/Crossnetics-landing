import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCreative, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-creative';
import 'swiper/css/pagination';

export default function IpadSwiper() {
  return (
    <div class="absolute top-5 left-6 w-11/12 h-11/12 drop-shadow-ipad bg-[url('/ipad.png')] bg-cover">
      <div class="relative w-full h-full p-2 lg:p-3 xl:p-4">
        <div class="w-full h-full rounded-lg overflow-hidden">
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
            <SwiperSlide><img src='/slide.png' /></SwiperSlide>
            <SwiperSlide><img src='/slide.png' /></SwiperSlide>
            <SwiperSlide><img src='/slide.png' /></SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}
