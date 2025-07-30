import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation } from 'swiper/modules';
import ProjectCard from '../ProjectCard';
import CAROUSEL_CONSTANTS from './Carousel.constants';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import { useState } from 'react';

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <Swiper
      modules={[EffectCoverflow, Navigation]}
      effect="coverflow"
      centeredSlides={true}
      slidesPerView="auto"
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      navigation={true}
      className=""
      onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
    >
      {CAROUSEL_CONSTANTS.map((card, index) => (
        <SwiperSlide
          key={index}
          className="flex w-full max-w-xs justify-center"
        >
          <div className="w-full">
            <ProjectCard {...card} isActive={activeIndex === index} />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
