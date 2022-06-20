import type { NextPage } from "next";
import { Image, ResponsiveImageType } from "react-datocms";
import styles from "../styles/Home.module.css";
import { motion, useAnimation, useDragControls } from "framer-motion";
import NextImage from "next/image";
import clsx from "clsx";
import Link from "next/link";

import { GraphQLClient } from "graphql-request";
import { useEffect, useState } from "react";
import LinkedInIcon from "../assets/linkedin.svg";
import FacebookIcon from "../assets/facebook.svg";
import InstagramIcon from "../assets/instagram.svg";
import GithubIcon from "../assets/github.svg";
import RightArrowIcon from "../assets/arrow-right.svg";
import DKIcon from "../assets/dk.svg";
import LTIcon from "../assets/lt.svg";

import { useInView } from "react-intersection-observer";

import { AnimatePresence } from "../components/AnimatePresence";

type Props = {
  query: any;
  variables: any;
  preview: any;
};

const exp = [
  "React.js",
  "Typescript",
  "Next.js",
  "Node.js",
  "Express.js",
  "PostgreSQL",
  "SQLite",
  "Java",
  "F#",
  "C#",
  "Python",
  "C++",
  "DatoCMS",
  "Postico",
];

type ExpOption = {
  x: number;
  y: number;
};

function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min + 1)) + min;
}

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

const Home = ({ data }: { data: any }) => {
  const [view, setView] = useState<"work" | "education">("work");

  const [expOptions, setExpOptions] = useState<ExpOption[]>([]);
  const [expOptionsCorner, setExpOptionsCorner] = useState<ExpOption>();

  const leftControl = useAnimation();
  const rightControl = useAnimation();

  useEffect(() => {
    if (view === "work") {
      rightControl.start(() => ({
        opacity: 0,
        x: 800, // 400
      }));

      leftControl.start(() => ({
        opacity: 1,
        x: 0,
      }));
    } else {
      rightControl.start(() => ({
        opacity: 1,
        x: 0,
      }));

      leftControl.start(() => ({
        opacity: 0,
        x: -800,
      }));
    }
  }, [view, leftControl, rightControl]);

  useEffect(() => {
    if (window.innerWidth >= 640) {
      // Constants
      const yPadding = 200;
      const headerHeight = 56;
      const expWidth = 75;
      const expHeight = 50;
      const mappedExperience: ExpOption[] = [];

      // Elements
      const heroText = document.getElementById("hero-text");
      const heroImage = document.getElementById("hero-image");

      if (heroText && heroImage) {
        const textRect = heroText.getBoundingClientRect();
        const imageRect = heroImage.getBoundingClientRect();

        const xBound = imageRect.left - textRect.left - expWidth * 2;
        const left = 0;

        const yBound = heroText.clientHeight + yPadding;
        const top = textRect.top - headerHeight - yPadding / 2;

        const xCount = Math.ceil(xBound / expWidth);
        const yCount = Math.ceil(yBound / expHeight);

        if (xCount * yCount < exp.length) {
          return;
        }

        exp.forEach((e) => {
          let x = -1;
          let y = -1;

          do {
            x = getRandomInt(0, xCount);
            y = getRandomInt(0, yCount);
          } while (
            mappedExperience.filter(
              (mapExp: ExpOption) => mapExp.x === x && mapExp.y === y
            ).length > 0
          );

          mappedExperience.push({ x, y });
        });

        setExpOptions(mappedExperience);
        setExpOptionsCorner({ x: left, y: top });
      }
    } else {
      // Constants
      // const yPadding = 200;
      const headerHeight = 56;
      const expWidth = 75;
      const expHeight = 50 + 20;
      const mappedExperience: ExpOption[] = [];

      // Elements
      // const heroText = document.getElementById("hero-text");
      // const heroImage = document.getElementById("hero-image");

      // if (heroText && heroImage) {
      // const textRect = heroText.getBoundingClientRect();
      // const imageRect = heroImage.getBoundingClientRect();

      const xBound = window.innerWidth - expWidth;
      const left = 0;

      console.log(xBound);

      const yBound = window.innerHeight - expHeight - 300;
      const top = expHeight;

      const xCount = Math.floor(xBound / expWidth);
      const yCount = Math.floor(yBound / expHeight);

      if (xCount * yCount < exp.length) {
        return;
      }

      exp.forEach((e) => {
        let x = -1;
        let y = -1;

        do {
          x = getRandomInt(0, xCount);
          y = getRandomInt(0, yCount);
        } while (
          mappedExperience.filter(
            (mapExp: ExpOption) => mapExp.x === x && mapExp.y === y
          ).length > 0
        );

        mappedExperience.push({ x, y });
      });

      setExpOptions(mappedExperience);
      setExpOptionsCorner({ x: left, y: top });
    }
    // }
  }, []);
  console.log(expOptions);

  return (
    <main className="relative max-w-7xl m-auto">
      <div className="text-xs">
        {expOptions.length > 0 &&
          expOptionsCorner &&
          exp.map((e, index) => {
            const num = getRandomInt(0, 3);
            return (
              <>
                <motion.span
                  key={e}
                  className={clsx("absolute text-gray-200 z-[-1]", {
                    "text-[10px]": num === 0,
                    "text-xs": num === 1,
                    "text-sm": num === 2,
                  })}
                  // animate={{ y: [0, 20, 0] }}
                  // transition={{
                  //   repeat: Infinity,
                  //   duration: getRandomInt(5, 7), // 4, 7
                  //   delay: getRandomInt(0, 3),
                  // }}
                  style={{
                    top: (expOptions[index] as any).y * 50 + expOptionsCorner.y,
                    left:
                      (expOptions[index] as any).x * 75 + expOptionsCorner.x,
                  }}
                >
                  {e}
                </motion.span>
              </>
            );
          })}
      </div>

      <div className="h-[calc(100vh-56px)] flex flex-col justify-center">
        <div className="flex flex-col-reverse lg:flex-row items-center lg:items-stretch justify-around lg:gap-6 gap-14 mt-[-80px] sm:mt-8 lg:mt-0">
          <div className="flex justify-between text-2xl sm:text-3xl flex-col sm:flex-row lg:flex-col gap-10 lg:gap-0 items-start sm:items-end lg:items-start">
            <div className="hidden lg:block"></div>
            <div id="hero-text">
              <div className="flex gap-[10px]">
                <div>I am Rokas - </div>
                <div className="relative">
                  <div className="absolute top-0 left-0 word">motivated</div>
                  <div className="absolute top-0 left-0 word1">productive</div>
                  <div className="absolute top-0 left-0 word2">experienced</div>
                  <div className="absolute top-0 left-0 word3">confident</div>
                  <div className="absolute top-0 left-0 word4">consistent</div>
                  <div className="absolute top-0 left-0 word5 w-[200px]">
                    open-minded
                  </div>
                </div>
              </div>
              <div className="text-[#ff5208]">front-end developer</div>
              <div>
                with <span className="text-[#ff5208]">3+ years </span> of work
                experience.
              </div>
            </div>
            <div className="flex gap-4">
              <motion.div
                whileHover={{
                  scale: 1.2,
                }}
              >
                <a
                  href="https://www.linkedin.com/in/rokas-kasperavi%C4%8Dius-a70458158/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex"
                >
                  <NextImage
                    title="LinkedIn"
                    alt="LinkedIn Icon"
                    className="cursor-pointer"
                    height={40}
                    width={40}
                    src={LinkedInIcon}
                  />
                </a>
              </motion.div>
              <motion.div
                whileHover={{
                  scale: 1.2,
                }}
              >
                <a
                  href="https://github.com/rokaskasperavicius"
                  target="_blank"
                  rel="noreferrer"
                  className="flex"
                >
                  <NextImage
                    title="Github"
                    alt="Github Icon"
                    className="cursor-pointer"
                    height={40}
                    width={40}
                    src={GithubIcon}
                  />
                </a>
              </motion.div>
              {/* <motion.div
                whileHover={{
                  scale: 1.2,
                }}
              >
                <a
                  href="https://www.facebook.com/Rokas192"
                  target="_blank"
                  rel="noreferrer"
                  className="flex"
                >
                  <NextImage
                    className="cursor-pointer"
                    height={40}
                    width={40}
                    src={FacebookIcon}
                  />
                </a>
              </motion.div>
              <motion.div
                whileHover={{
                  scale: 1.2,
                }}
              >
                <a
                  href="https://www.instagram.com/kasperavicius_rokas/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex"
                >
                  <NextImage
                    className="cursor-pointer"
                    height={40}
                    width={40}
                    src={InstagramIcon}
                  />
                </a>
              </motion.div> */}
            </div>
          </div>
          <div id="hero-image" className="hidden sm:block">
            <Image
              usePlaceholder={false}
              data={data.upload.responsiveImage}
              pictureClassName="rounded-3xl"
            />
          </div>
        </div>
      </div>
      <div>
        <AnimatePresence
          position="left"
          className="lg:w-2/3 sm:border sm:border-black sm:rounded-2xl sm:p-5 sm:shadow-right-full"
        >
          <>
            <h2 className="sm:text-2xl text-xl">About me</h2>
            <p className="sm:mt-4 mt-2">
              My full name is Rokas Kasperavicius. I am 21 year old Lithuanian
              who is currently studying Computer Science & Mathematics Bachelor
              at{" "}
              <a
                href="https://ruc.dk/"
                target="_blank"
                rel="noreferrer"
                className="underline"
              >
                Roskilde University
              </a>{" "}
              in Denmark. Parallel to doing the studies I have been working as a
              part-time front-end developer at{" "}
              <a
                href="https://adaptagency.com/"
                target="_blank"
                rel="noreferrer"
                className="underline"
              >
                Adaptagency
              </a>{" "}
              for over a year.
            </p>
            <p className="mt-2">Technologies I am experienced with:</p>

            <ul className="list-disc list-inside inline-grid gap-x-8 grid-cols-[auto_auto] mt-2">
              <li>React.js</li>
              <li>Typescript</li>
              <li>Next.js</li>
              <li>HTML / CSS / Javascript</li>
              <li>Node.js</li>
              <li>Express.js</li>
              <li>PostgreSQL</li>
              <li>SQLite</li>
              <li>Java</li>
              <li>F#</li>
              <li>C#</li>
              <li>Python</li>
              <li>C++</li>
              <li>DatoCMS</li>
              <li>Postico</li>
            </ul>
          </>
        </AnimatePresence>
        <AnimatePresence
          position="right"
          className="ml-auto mt-12 sm:mt-8 lg:w-2/3 sm:rounded-2xl sm:border sm:border-black sm:p-5 sm:shadow-right-full"
        >
          <>
            <h2 className="flex justify-between items-center">
              <div className="sm:text-2xl text-xl">My experience</div>
              <div className="flex sm:text-xl">
                <div
                  className={clsx(
                    "cursor-pointer pr-2 pl-3 pt-[5px] sm:rounded-l-xl rounded-l-md",
                    {
                      "text-white bg-black": view === "work",
                    }
                  )}
                  onClick={() => setView("work")}
                >
                  Work
                </div>
                <div
                  className={clsx(
                    "cursor-pointer pl-2 pr-3 pt-[5px] ml-[-1px] sm:rounded-r-xl rounded-r-md",
                    {
                      "text-white bg-black": view === "education",
                    }
                  )}
                  onClick={() => setView("education")}
                >
                  Education
                </div>
              </div>
            </h2>
            <div className="relative h-[550px] sm:h-[400px] overflow-y-scroll overflow-x-hidden mt-4">
              <motion.div
                className="absolute w-full flex flex-col gap-y-8"
                animate={leftControl}
                transition={{ type: "tween", ease: "easeInOut" }}
                drag="x"
                dragSnapToOrigin={true}
                dragConstraints={{ left: -500, right: 0 }}
                onDragEnd={(event, info) => {
                  if (
                    info.offset.x * info.velocity.x > 10000 &&
                    info.offset.x < 0
                  ) {
                    setView("education");
                  }
                }}
              >
                <div>
                  <h4 className="w-full flex gap-4 justify-between sm:text-xl text-lg">
                    <span className="flex flex-grow basis-0">
                      2020 - Present
                    </span>
                    <div className="flex flex-grow gap-4 sm:gap-3 justify-end items-start">
                      <p className="text-right">
                        Front-end part-time developer @{" "}
                        <a
                          href="https://adaptagency.com/"
                          target="_blank"
                          rel="noreferrer"
                          className="underline"
                        >
                          Adaptagency
                        </a>
                      </p>
                      <div className="flex-shrink-0 flex mt-1">
                        <NextImage src={DKIcon} width={32} height={24} />
                      </div>
                    </div>
                  </h4>
                  <p className="mt-2">
                    (W.I.P) Working with variaty of clients. Using Next.js,
                    React.js, Vue.js, DatoCMS and tailwindcss.
                  </p>
                </div>

                <div>
                  <h4 className="w-full flex justify-between sm:text-xl text-lg">
                    <span>2019 - 2020</span>
                    <div className="flex flex-grow gap-4 sm:gap-3 justify-end items-start">
                      <p className="text-right">
                        Front-end part-time developer @{" "}
                        <a
                          href="https://adaptagency.com/"
                          target="_blank"
                          rel="noreferrer"
                          className="underline"
                        >
                          Adaptagency
                        </a>
                      </p>
                      <div className="flex-shrink-0 flex mt-1">
                        <NextImage src={LTIcon} width={32} height={24} />
                      </div>
                    </div>
                  </h4>
                  <p className="mt-2">
                    (W.I.P) Working with variaty of clients. Using React.js,
                    Redux.
                  </p>
                </div>

                <div>
                  <h4 className="w-full flex justify-between sm:text-xl text-lg">
                    <span>2018, 2019 Summer</span>
                    <span className="text-right">
                      Front-end internships @{" "}
                      <a
                        href="https://adaptagency.com/"
                        target="_blank"
                        rel="noreferrer"
                        className="underline"
                      >
                        Adaptagency
                      </a>
                    </span>
                  </h4>
                  <p className="mt-2">
                    During 2018 Summer I had a 3 month internship in Kaunas,
                    Lithuania. I succeeded in learning React.js, SCSS, Redux,
                    REST-ful API&#39;s and many other front-end tools. Moreover,
                    I experienced working for different clients, applying Agile
                    development methods, organizing my time and solving problems
                    with other colleagues.
                  </p>
                  <p className="mt-2">
                    In 2019 I had another 3 month internship in Copenhagen,
                    Denmark. I expanded my knowledge about above-mentioned
                    technologies and gained experience in working with variety
                    of projects.
                  </p>
                </div>
              </motion.div>
              <motion.div
                className="absolute"
                animate={rightControl}
                transition={{ type: "tween", ease: "easeInOut" }}
                drag="x"
                dragDirectionLock
                dragSnapToOrigin={true}
                dragConstraints={{ left: 0, right: 500 }}
                onDragEnd={(event, info) => {
                  if (
                    info.offset.x * info.velocity.x > 10000 &&
                    info.offset.x > 0
                  ) {
                    setView("work");
                  }
                }}
              >
                <div>
                  <h4 className="w-full flex gap-4 justify-between sm:text-xl text-lg">
                    <span className="flex flex-grow basis-[140px]">
                      2020 - 2023
                    </span>
                    <div className="flex flex-grow gap-4 sm:gap-3 justify-end items-start">
                      <p className="text-right">
                        Computer Science & Mathematics @{" "}
                        <a
                          href="https://ruc.dk/"
                          target="_blank"
                          rel="noreferrer"
                          className="underline"
                        >
                          Roskilde University
                        </a>
                      </p>
                      <div className="flex-shrink-0 flex mt-1">
                        <NextImage src={DKIcon} width={32} height={24} />
                      </div>
                    </div>
                  </h4>
                  <p className="mt-2">
                    Learned Python and applied my knowledge in the field of Data
                    Science. Became proficient in Java while creating a project
                    in full-stack development course. Moreover, I acquired
                    knowledge about JavaFX, agile development, OOP, database
                    management and applying different algorithms (Prims,
                    Kruskal, Dijkstra and A*).
                  </p>
                  <p className="mt-2">
                    During my studies I wrote multiple projects and learned
                    about Neural Network image recognition, Mathematical
                    Modelling of various diseases. Moreover, I created a
                    full-stack website using React.js, Node.js and implemented
                    multiple restful api&#39;s including SMTP.
                  </p>
                </div>
              </motion.div>
            </div>
          </>
        </AnimatePresence>
      </div>
      <div>
        <h2 className="sm:text-2xl text-xl mt-12 sm:mt-16 text-center">
          Whats next?
        </h2>
        <div className="text-lg sm:text-xl sm:mt-8 mt-4 flex justify-center gap-20 flex-col sm:flex-row">
          <div className="relative after:absolute sm:after:h-full sm:after:top-0 sm:after:right-[-40px] sm:after:rotate-12 sm:after:w-[1px] after:bg-gray-300 after:w-2/3 after:h-[1px] after:bottom-[-40px] after:left-1/2 sm:after:left-auto after:-translate-x-1/2 before:content-['or'] before:bg-white before:w-10 before:absolute before:bottom-[-54px] before:z-[1] before:left-1/2 before:-translate-x-1/2 before:text-center sm:before:hidden">
            <p>
              Check my recent <span className="text-[#ff5208]">projects</span>{" "}
              💻
            </p>
            <Link href="/projects">
              <a className="flex gap-3 cursor-pointer">
                <p className="underline">Read more</p>{" "}
                <NextImage src={RightArrowIcon} />
              </a>
            </Link>
          </div>
          <div>
            <p className="mt-0 sm:mt-24">
              I would love to hear about your{" "}
              <span className="text-[#ff5208]">ideas</span> and{" "}
              <span className="text-[#ff5208]">projects</span>. Let&#39;s talk
              👋
            </p>
            <Link href="/email">
              <a className="flex gap-3 cursor-pointer">
                <p className="underline">Write to me</p>{" "}
                <NextImage src={RightArrowIcon} />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

const HOMEPAGE_QUERY = `query MyQuery {
  upload {
    responsiveImage(imgixParams: { fit: crop, w: 500, h: 600, auto: format }) {
        srcSet
        webpSrcSet
        sizes
        src
        width
        height
        aspectRatio
        alt
        title
        base64
      }
  }
}`;

export const getStaticProps = async () => {
  const data = await request({
    query: HOMEPAGE_QUERY,
    variables: { limit: 10 },
  } as Props);
  return {
    props: { data },
  };
};

export default Home;
