import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/scrollbar";

const TextOne = () => (
  <SwiperSlide>
    <p className='text-center text-sm font-medium'>
      Love Alpine JS? Check out this new course ‼️
      <a className='underline' href='/alpinejs'>
        {" "}
        Learn More &rarr;{" "}
      </a>
    </p>
  </SwiperSlide>
);

const TextTwo = () => (
  <SwiperSlide>
    <p className='text-center text-sm font-medium'>
      This is text number 2️⃣
      <a className='underline' href='/alpinejs'>
        {" "}
        Learn More &rarr;{" "}
      </a>
    </p>
  </SwiperSlide>
);

const TextThree = () => (
  <SwiperSlide>
    <p className='text-center text-sm font-medium'>
      This is the 3rd.
      <a className='underline' href='/alpinejs'>
        {" "}
        Learn More &rarr;{" "}
      </a>
    </p>
  </SwiperSlide>
);

const Announcement = () => {
  return (
    <div className='bg-indigo-600 px-4 py-3 text-white'>
      {/* <TextOne /> */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={1}
        autoplay={{ delay: 3500 }}
        navigation
        pagination
        loop
        speed={800}
      >
        {TextOne()}
        {TextTwo()}
        {TextThree()}
      </Swiper>
    </div>
  );
};

export default Announcement;
