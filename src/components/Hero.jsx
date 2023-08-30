import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

import "swiper/css";

const Hero = () => {
  return (
    <div className="max-w-[1200px] w-full  mx-auto pt-20">
      <h1 className="font-bold text-4xl pb-12 text-center">Nouveautés</h1>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>{Slide()}</SwiperSlide>
        <SwiperSlide>{Slide()}</SwiperSlide>
        <SwiperSlide>{Slide()}</SwiperSlide>
        <SwiperSlide>{Slide()}</SwiperSlide>
      </Swiper>
    </div>
  );
};

function Slide() {
  return (
    <div className="grid md:grid-cols-2 ">
      <div className="imgage ">
        <img
          src="/images/img1.jpg"
          width="600"
          height="600"
          className="md:mx-auto"
        />
      </div>
      <div className="info flex justify-center flex-col md:pl-12">
        <div className="date">
          <Link href={"/"}>
            <a className="text-gray-800 hover:text-gray-600"> July 3, 2022</a>
          </Link>
        </div>
        <div className="title">
          <Link href={"/"}>
            <a className="text-3xl md:text-6xl font-bold text-gray-800 hover:text-gray-600">
              Your most unhappy customers are your greatest source of learning
            </a>
          </Link>
        </div>
        <p className="text-gray-500 pt-3">
          Even the all-powerful Pointing has no control about the blind texts it
          is an almost unorthographic life One day however a small line of blind
          text by the name of Lorem Ipsum decided to leave for the far World of
          Grammar.
        </p>
      </div>
    </div>
  );
}

export default Hero;