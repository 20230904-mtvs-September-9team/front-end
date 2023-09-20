// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import sample1 from '../images/sample1.jpg';
import sample2 from '../images/sample2.jpg';
import sample3 from '../images/sample3.jpg';

import './banner.css';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function Banner() {

  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={sample1} alt="이미지 설명1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={sample2} alt="이미지 설명2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={sample3} alt="이미지 설명3" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
