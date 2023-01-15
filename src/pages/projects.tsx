import type { NextPage, GetStaticProps } from 'next'
import NextImage from 'next/image'
import { useEffect } from 'react'
import styles from '../styles/Home.module.css'
import { Image, ResponsiveImageType } from 'react-datocms'

import React, { useRef, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper'

import Geocoding1 from '../assets/geocoding_1.png'
import Geocoding2 from '../assets/geocoding_2.png'
import Geocoding3 from '../assets/geocoding_3.png'
import Geocoding4 from '../assets/geocoding_4.png'
import Test from '../assets/test.png'

import { AnimatePresence } from '../components/AnimatePresence'
// Import Swiper styles
import 'swiper/css'
// import "swiper/css/bundle";
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import clsx from 'clsx'
import { motion, useAnimation } from 'framer-motion'
import { GraphQLClient } from 'graphql-request'
import { GetProductsQuery } from '../test'
import RightArrowIcon from '../assets/arrow-right.svg'
import ExternalIcon from '../assets/external.svg'

const Home = ({ data }: { data: any }) => {
  const control = useAnimation()
  const { allProjects } = data

  // useEffect(() => {
  //   // fetch("https://graphql.datocms.com", {
  //   //   method: "post",
  //   //   headers: new Headers({
  //   //     Authorization: "Bearer e6b16c02f5e202b9db0cbba2f2de82",
  //   //   }),
  //   //   body: JSON.stringify({
  //   //     query: "{ allProjects { title } }",
  //   //   }),
  //   // });

  //   fetch("https://graphql.datocms.com/", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Accept: "application/json",
  //       Authorization: `Bearer e6b16c02f5e202b9db0cbba2f2de82`,
  //     },
  //     body: JSON.stringify({
  //       query: "{ allProjects { title } }",
  //     }),
  //   })
  //     .then((res) => res.json())
  //     .then((res) => {
  //       console.log(res.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);
  // console.log(allProjects);

  const Block = ({ text }: { text: string }) => (
    <span className='bg-primary text-white px-2 py-1 min-w-[80px] flex items-center justify-center rounded-md'>
      {text}
    </span>
  )

  return (
    <main className={clsx(styles.main)}>
      <h1 className='mt-8 sm:mt-16 text-2xl'>
        Recent <span className='text-primary'>projects</span>
      </h1>
      <p className='mt-2 mb-8 lg:w-1/2 sm:w-2/3 w-full'>
        Throughout my programming career I have experimented with a lot of
        different front-end technologies for both university and hobby projects.
      </p>
      <div className='sm:space-y-16 space-y-12'>
        {allProjects.map((project: any, index: number) => (
          // <AnimatePresence key={index} position={"bottom"} delay={0.3}>
          <motion.div
            key={index}
            animate={control}
            className='flex justify-between lg:flex-row-reverse flex-col sm:gap-8 gap-2'
          >
            {/* <motion.a
                className="cursor-pointer"
                target="_blank"
                href="https://geocoding-digital-systems.herokuapp.com/"
                onTapStart={() => control.start({ scale: 0.98 })}
                onTap={() => control.start({ scale: 1 })}
              > */}
            <div className='flex flex-col justify-between gap-6 w-full'>
              <div>
                <div className='flex justify-between gap-4 items-start'>
                  <h2 className='text-xl'>{project.title}</h2>
                  <motion.div
                    whileHover={{
                      scale: 1.1,
                    }}
                    className='mt-[2px] flex-shrink-0'
                  >
                    <a
                      href={project.link[0].url}
                      target='_blank'
                      rel='noreferrer'
                      className='flex'
                    >
                      <NextImage src={ExternalIcon} width={20} height={20} />
                    </a>
                  </motion.div>
                </div>
                <p className='mt-2 max-h-[335px] overflow-y-scroll'>
                  {project.subtitle}
                </p>
              </div>
              <div className='flex gap-4'>
                <Block text='React.js' />
                <Block text='Javascript' />
                <Block text='AI' />
              </div>
            </div>
            {/* </motion.a> */}
            <div className='lg:w-2/3 relative w-full border-2 border-gray-300 bg-gray-300 border-solid shadow-3xl rounded-2xl'>
              <div className='rounded-2xl py-5 px-6 bg-black'>
                <Swiper
                  navigation={true}
                  loop={true}
                  mousewheel={true}
                  modules={[Navigation, Pagination, Keyboard]}
                  keyboard={{
                    enabled: true,
                  }}
                  pagination={{
                    dynamicBullets: true,
                    clickable: true,
                  }}
                  className='w-full rounded-lg'
                >
                  {project.images.map((image: any, index: any) => (
                    <SwiperSlide key={index}>
                      <Image data={image.responsiveImage} />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </motion.div>
          // </AnimatePresence>
        ))}
      </div>
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
  )
}

const AnimatedLink = ({ url }: { url: string }) => {
  const control = useAnimation()

  return (
    <div className='flex gap-3'>
      <motion.a
        href={url}
        target='_blank'
        onHoverStart={() => control.start({ x: 10 })}
        onHoverEnd={() => control.start({ x: 0 })}
        className='underline cursor-pointer'
      >
        Visit the website
      </motion.a>
      <motion.div animate={control} className='flex'>
        <NextImage src={RightArrowIcon} />
      </motion.div>
    </div>
  )
}

type Props = {
  query: any
  variables: any
  preview: any
}

export function request({ query, variables, preview }: Props) {
  const endpoint = preview
    ? `https://graphql.datocms.com/preview`
    : `https://graphql.datocms.com/`
  const client = new GraphQLClient(endpoint, {
    headers: {
      authorization: `Bearer ${process.env.NEXT_DATOCMS_API_TOKEN}`,
    },
  })
  return client.request(query, variables)
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const data = await request({
    query: GetProductsQuery,
    variables: { limit: 10, locale },
  } as Props)
  return {
    props: { data },
  }
}

export default Home
