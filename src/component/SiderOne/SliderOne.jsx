import React, { useEffect, useState } from "react";
import {
  Navigation,
  FreeMode,
  Thumbs,
  Pagination,
  Scrollbar,
  A11y,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "./SliderOne.css"
const SliderOne = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
const [activeSlider,setActiveSlider]=useState(0)
const imageSrc=[
  {
    img: "https://swiperjs.com/demos/images/nature-1.jpg"
  },
  {
    img: "https://swiperjs.com/demos/images/nature-3.jpg"
  },
  {
    img: "https://swiperjs.com/demos/images/nature-4.jpg"
  },
  {
    img: "https://swiperjs.com/demos/images/nature-5.jpg"
  },
  {
    img: "https://swiperjs.com/demos/images/nature-1.jpg"
  },
  {
    img: "https://swiperjs.com/demos/images/nature-1.jpg"
  },
  {
    img: "https://swiperjs.com/demos/images/nature-1.jpg"
  },
]
const handleActiveSlider=(e)=>{
  console.log(e)
  
}
  return (
    <div className="bg-yellow-100 w-[800px] !h-[300px] mx-auto ">
      <div>
        <Swiper
          style={{
            "--swiper-navigation-color": "orange",
          }}
          spaceBetween={10}
          navigation={false}
          thumbs={{
            swiper:
              thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
          }}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper2"
        >
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
          </SwiperSlide>
        </Swiper>
        <Swiper
          onSwiper={setThumbsSwiper}
          navigation={true}
          spaceBetween={10}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper"
        >
          <SwiperSlide onClick={(e)=>{handleActiveSlider("one")}}>
            <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
          </SwiperSlide>
          <SwiperSlide onClick={(e)=>{handleActiveSlider("two")}}>
            <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default SliderOne;
