import type { NextPage } from "next";
import { useEffect } from "react";
import styles from "../styles/Home.module.css";
import { Image, ResponsiveImageType } from "react-datocms";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

import Geocoding1 from "../assets/geocoding_1.png";
import Geocoding2 from "../assets/geocoding_2.png";
import Geocoding3 from "../assets/geocoding_3.png";
import Geocoding4 from "../assets/geocoding_4.png";
import Test from "../assets/test.png";

import { AnimatePresence } from "../components/AnimatePresence";
// Import Swiper styles
import "swiper/css";
// import "swiper/css/bundle";
import "swiper/css/navigation";
import "swiper/css/pagination";
import clsx from "clsx";
import { motion, useAnimation } from "framer-motion";
import { GraphQLClient } from "graphql-request";
import { GetProductsQuery } from "../test";

const Home = ({ data }: { data: any }) => {
  const control = useAnimation();
  const { allProjects } = data;
  console.log(allProjects);

  useEffect(() => {
    // fetch("https://graphql.datocms.com", {
    //   method: "post",
    //   headers: new Headers({
    //     Authorization: "Bearer e6b16c02f5e202b9db0cbba2f2de82",
    //   }),
    //   body: JSON.stringify({
    //     query: "{ allProjects { title } }",
    //   }),
    // });

    fetch("https://graphql.datocms.com/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer e6b16c02f5e202b9db0cbba2f2de82`,
      },
      body: JSON.stringify({
        query: "{ allProjects { title } }",
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <main className={clsx(styles.main, "max-w-7xl m-auto")}>
      <h1 className="mt-8 sm:mt-16 text-2xl">
        My recent <span className="text-[#ff5208]">projects</span>
      </h1>
      <p className="mt-2 mb-8 lg:w-1/2 sm:w-2/3 w-full">
        Throughout my programming career I have experimented with a lot of
        different front-end technologies for both university and hobby projects.
      </p>
      {allProjects.map((project: any, index: number) => (
        <AnimatePresence key={index} position="left" delay={0.3}>
          <motion.div
            animate={control}
            className="flex lg:flex-row flex-col sm:gap-8 gap-2 sm:border sm:border-black sm:rounded-2xl sm:shadow-right-full sm:p-5 sm:hover:bg-gray-50"
          >
            <motion.a
              className="cursor-pointer"
              target="_blank"
              href="https://geocoding-digital-systems.herokuapp.com/"
              onTapStart={() => control.start({ scale: 0.98 })}
              onTap={() => control.start({ scale: 1 })}
            >
              <h2 className="text-xl">{project.title}</h2>
              <p className="mt-2">{project.subtitle}</p>
            </motion.a>
            <Swiper
              navigation={true}
              loop={true}
              mousewheel={true}
              modules={[Navigation, Pagination, Keyboard]}
              keyboard={{
                enabled: true,
              }}
              className="lg:w-2/3 w-full flex-shrink-0"
              pagination={{
                dynamicBullets: true,
                clickable: true,
              }}
            >
              {project.images.map((image: any, index: any) => (
                <SwiperSlide key={index}>
                  <Image data={image.responsiveImage} />
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        </AnimatePresence>
      ))}

      {/* <AnimatePresence position="right" className="mt-8">
        <motion.div
          animate={control}
          className="flex lg:flex-row flex-col sm:gap-8 gap-2 sm:border sm:border-black sm:rounded-2xl sm:shadow-right-full sm:p-5 sm:hover:bg-gray-50"
        >
          <motion.a
            className="cursor-pointer"
            target="_blank"
            href="https://geocoding-digital-systems.herokuapp.com/"
            onTapStart={() => control.start({ scale: 0.98 })}
            onTap={() => control.start({ scale: 1 })}
          >
            <h2 className="text-xl">Geocoding website</h2>
            <p className="mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel
              nisl lorem. Nunc et vulputate lorem. Quisque malesuada convallis
              lectus, id pretium odio lacinia quis. Nulla mauris sapien, aliquet
              vitae vestibulum quis, malesuada eget turpis. Curabitur bibendum
              sapien a viverra consequat. Nullam dapibus molestie magna, quis
              laoreet risus efficitur ut. Nam tristique sagittis nunc quis
              sollicitudin.
            </p>
          </motion.a>
          <Swiper
            navigation={true}
            loop={true}
            mousewheel={true}
            modules={[Navigation, Pagination, Mousewheel, Keyboard]}
            keyboard={{
              enabled: true,
            }}
            className="lg:w-2/3 w-full flex-shrink-0"
            pagination={{
              dynamicBullets: true,
              clickable: true,
            }}
          >
            <SwiperSlide>
              <Image alt="geocoding" src={Geocoding1} />
            </SwiperSlide>
            <SwiperSlide>
              <Image alt="geocoding" src={Geocoding2} />
            </SwiperSlide>
            <SwiperSlide>
              <Image alt="geocoding" src={Geocoding3} />
            </SwiperSlide>
            <SwiperSlide>
              <Image alt="geocoding" src={Geocoding4} />
            </SwiperSlide>
          </Swiper>
        </motion.div>
      </AnimatePresence> */}
    </main>
  );
};

type Props = {
  query: any;
  variables: any;
  preview: any;
};

export function request({ query, variables, preview }: Props) {
  const endpoint = preview
    ? `https://graphql.datocms.com/preview`
    : `https://graphql.datocms.com/`;
  const client = new GraphQLClient(endpoint, {
    headers: {
      authorization: `Bearer ${process.env.NEXT_DATOCMS_API_TOKEN}`,
    },
  });
  return client.request(query, variables);
}

export const getStaticProps = async () => {
  const data = await request({
    query: GetProductsQuery,
    variables: { limit: 10 },
  } as Props);
  return {
    props: { data },
  };
};

export default Home;
