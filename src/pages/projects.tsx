import type { NextPage } from "next";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";

import Geocoding1 from "../assets/geocoding_1.png";

// Import Swiper styles
import "swiper/css";
// import "swiper/css/bundle";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Home: NextPage = () => {
  return (
    <main className={styles.main}>
      <div className="flex justify-around pt-8 test">
        (W.I.P) Welcome to the project.tsx
      </div>
      <>
        <Swiper
          navigation={true}
          loop={true}
          modules={[Navigation, Pagination]}
          className="w-[640px]"
          pagination={{
            dynamicBullets: true,
          }}
        >
          <SwiperSlide>
            <div className="w-[640px]">
              <Image
                alt="geocoding"
                src={Geocoding1}
                layout="responsive"
                // objectFit="cover"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-[640px]">
              <Image
                alt="geocoding"
                src={Geocoding1}
                layout="responsive"
                // objectFit="cover"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-[640px]">
              <Image
                alt="geocoding"
                src={Geocoding1}
                layout="responsive"
                // objectFit="cover"
              />
            </div>
          </SwiperSlide>
          {/* <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
          <SwiperSlide>Slide 6</SwiperSlide>
          <SwiperSlide>Slide 7</SwiperSlide>
          <SwiperSlide>Slide 8</SwiperSlide>
          <SwiperSlide>Slide 9</SwiperSlide> */}
        </Swiper>
      </>
    </main>
  );
};

export default Home;
