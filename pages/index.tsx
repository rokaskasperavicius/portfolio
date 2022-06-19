import type { NextPage } from "next";
import { Image } from "react-datocms";
import styles from "../styles/Home.module.css";
import { motion, useAnimation } from "framer-motion";
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
  "MYSql",
  "Java",
  "F#",
  "C#",
  "Python",
];
// Motivated, Experienced, Productive, Helpful
//

//  animation: word $speed infinite ease-in-out;

//   @for $i from 0 to $wordCount {
//     &:nth-child(#{$i + 1}) {
//       animation-delay: ($speed / ($wordCount + 1) * $i) - $speed;
//     }
//   }

//   @keyframes word {
//     0%,
//     5%,
//     100% {
//       filter: blur(0px);
//       opacity: 1;
//     }
//     20%,
//     80% {
//       filter: blur(1em);
//       opacity: 0;
//     }
//   }

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

  const [coords, setCoords] = useState([]);
  const [middle, setMiddle] = useState(0);

  const leftControl = useAnimation();
  const rightControl = useAnimation();

  useEffect(() => {
    if (view === "work") {
      rightControl.start(() => ({
        opacity: 0,
        x: 400,
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
        x: -400,
      }));
    }
    const a = document.getElementById("test")?.getBoundingClientRect();
    const b = document.getElementById("a")?.getBoundingClientRect();

    const topBottom = a ? a.top - 40 : 0;
    setMiddle(topBottom);
    const top = topBottom - 70;

    const left = (b ? b.left : 0) - 50;

    const test = [];

    function getRandomInt(max: number) {
      return Math.floor(Math.random() * max);
    }

    const yIndex = Math.floor(top / 50);
    const xIndex = Math.floor(left / 80);

    exp.forEach((e) => {
      let x = -1;
      let y = -1;

      do {
        x = getRandomInt(xIndex);
        y = getRandomInt(yIndex);
      } while (test.filter((a) => a.x === x && a.y === y).length > 0);

      test.push({ x, y });
    });
    setCoords(test);

    console.log();
  }, [view, leftControl, rightControl]);

  return (
    <main>
      <div className="h-[calc(100vh-57px)] flex flex-col justify-center">
        <div className="flex justify-around">
          <div className="flex justify-between text-3xl flex-col">
            <div className="text-xs">
              {coords.length > 0 &&
                middle !== 0 &&
                exp.map((e, index) => {
                  console.log(coords);
                  return (
                    <>
                      <motion.span
                        key={e}
                        className="absolute text-gray-200 z-[-1]"
                        animate={{ y: [0, 10, 0] }}
                        transition={{ repeat: Infinity, duration: 5 }}
                        style={{
                          top: coords[index].y * 50 + middle,
                          left: coords[index].x * 60 + 70,
                        }}
                      >
                        {e}
                      </motion.span>
                    </>
                  );
                })}

              {/* <motion.span
                className="absolute top-2/3 left-2/3 text-gray-200 z-[-1]"
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 6 }}
              >
                Next.js
              </motion.span>
              <motion.span
                className="absolute top-1/2 left-2/3 text-gray-200 z-[-1]"
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 6, delay: 1 }}
              >
                Node.js
              </motion.span>
              <motion.span
                className="absolute top-2/3 left-1/2 text-gray-200 z-[-1]"
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 6, delay: 0.5 }}
              >
                Express.js
              </motion.span>
              <motion.span
                className="absolute top-1/4 left-1/2 text-gray-200 z-[-1]"
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 5, delay: 1 }}
              >
                PostgreSQL
              </motion.span>
              <motion.span
                className="absolute top-1/2 left-1/4 text-gray-200 z-[-1]"
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 5, delay: 1 }}
              >
                Java
              </motion.span> */}
            </div>
            <div id="test">
              <div className="flex gap-[10px]">
                <div>I am Rokas - </div>
                <div className="relative">
                  <div className="absolute top-0 left-0 word">motivated</div>
                  <div className="absolute top-0 left-0 word1">productive</div>
                  <div className="absolute top-0 left-0 word2">experienced</div>
                  <div className="absolute top-0 left-0 word3">helpful</div>
                </div>
              </div>
              <div className="text-[#ff5208]">student front-end developer</div>
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
                    className="cursor-pointer"
                    height={40}
                    width={40}
                    src={GithubIcon}
                  />
                </a>
              </motion.div>
              <motion.div
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
              </motion.div>
            </div>
          </div>
          <div id="a" className="rounded-3xl border-black overflow-hidden">
            <Image data={data.upload.responsiveImage} />
          </div>
        </div>
      </div>
      <div>
        <AnimatePresence
          position="left"
          className="w-2/3 border border-black rounded-2xl p-5 shadow-right-full"
        >
          <>
            <h2 className="text-2xl">About me</h2>
            <p className="mt-4">
              My full name is Rokas Kasperavicius. I am 21 year old lithuanian
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
              <li>MYSql</li>
              <li>Java</li>
              <li>F#</li>
              <li>C#</li>
              <li>Python</li>
            </ul>
          </>
        </AnimatePresence>
        <AnimatePresence
          position="right"
          className="ml-auto mt-8 w-2/3 rounded-2xl border border-black p-5 shadow-right-full"
        >
          <>
            <h2 className="text-2xl flex justify-between items-center">
              <div>My experience</div>
              {/* <div className="relative flex-grow after:absolute after:w-2/3 after:h-[1px] after:bg-black after:top-1/2 after:left-1/2 after:-translate-x-1/2" /> */}
              <div className="flex">
                <div
                  className={clsx(
                    "cursor-pointer pr-2 pl-3 pt-[5px] rounded-tl-2xl rounded-bl-2xl",
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
                    "cursor-pointer pl-2 pr-3 pt-[5px] ml-[-1px] rounded-tr-2xl rounded-br-2xl",
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
            <div className="relative h-[300px] overflow-y-scroll mt-4">
              <motion.p className="absolute" animate={leftControl}>
                WORK Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Etiam ac purus id turpis rutrum posuere. Duis finibus purus ac
                semper tincidunt. Suspendisse potenti. Pellentesque posuere,
                massa at mattis pellentesque, eros lectus ultrices metus, eget
                luctus felis massa id velit. Orci varius natoque penatibus et
                magnis dis parturient montes, nascetur ridiculus mus. Quisque
                ultricies justo a lectus dictum consectetur. Suspendisse
                elementum nisi sit amet mi hendrerit interdum. Cras lobortis
                tellus porttitor, interdum orci vel, efficitur libero. Phasellus
                in diam nisi. Integer vitae ligula mattis, posuere velit nec,
                tincidunt eros.
              </motion.p>
              <motion.p className="absolute" animate={rightControl}>
                EDUCATIONAL Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Ut vitae orci viverra, porta velit quis, tempus elit. In
                lobortis ullamcorper velit, nec tristique eros fringilla ac.
                Phasellus consequat luctus nibh. Proin id nisl velit. Phasellus
                lacinia volutpat euismod. Aliquam sed vulputate lorem. Donec
                sollicitudin, orci vel varius sagittis, quam lacus interdum sem,
                id scelerisque massa enim eu lorem. Fusce maximus nisi odio, ac
                mollis orci aliquam vel. Suspendisse potenti. Mauris quis
                accumsan est. Nam pulvinar vel quam non efficitur. Etiam at
                fringilla lorem. Aenean ipsum augue, iaculis sit amet odio et,
                scelerisque suscipit dolor. Fusce vestibulum volutpat accumsan.
                Proin nibh orci, facilisis ut vestibulum ut, ornare non leo.
              </motion.p>
            </div>
          </>
        </AnimatePresence>
      </div>
      <div>
        <h2 className="text-2xl mt-16 text-center">Whats next?</h2>
        <div className="text-xl mt-8 flex justify-center gap-20">
          <div className="relative after:absolute after:h-full after:top-0 after:right-[-40px] after:rotate-12 after:w-[1px] after:bg-gray-300">
            <p>
              Have any <span className="text-[#ff5208]">questions</span>? Don't
              be scared to say Hi 👋
            </p>
            <Link href="/email">
              <a className="flex gap-3 cursor-pointer">
                <p className="underline">Read more</p>{" "}
                <NextImage src={RightArrowIcon} />
              </a>
            </Link>
          </div>
          <div>
            <p className="mt-24">
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

export async function getStaticProps() {
  const data = await request({
    query: HOMEPAGE_QUERY,
    variables: { limit: 10 },
  } as Props);
  return {
    props: { data },
  };
}

export default Home;
