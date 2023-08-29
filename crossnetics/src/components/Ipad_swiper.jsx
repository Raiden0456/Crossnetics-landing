import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCreative, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-creative';
import 'swiper/css/pagination';

export default function IpadSwiper() {
  return (
    <div class="absolute top-5 left-6 w-11/12 h-11/12 drop-shadow-ipad rounded-lg overflow-hidden">
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
        pagination={true}
        modules={[EffectCreative, Pagination]}
        className="ipadSwiper"
        >
        <SwiperSlide><img src='/slide.png' /></SwiperSlide>
        <SwiperSlide><img src='/slide.png' /></SwiperSlide>
        <SwiperSlide><img src='/slide.png' /></SwiperSlide>
      </Swiper>
    </div>
  );
}