import type { NextPage } from "next";
import { Image } from "react-datocms";
import styles from "../styles/Home.module.css";
import { motion } from "framer-motion";
import NextImage from "next/image";

import { GraphQLClient } from "graphql-request";
import { useEffect } from "react";
import LinkedInIcon from "../assets/linkedin.svg";
import FacebookIcon from "../assets/facebook.svg";
import InstagramIcon from "../assets/instagram.svg";
console.log(LinkedInIcon);
type Props = {
  query: any;
  variables: any;
  preview: any;
};

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

const exp = [
  {
    name: "React.js",
    top: "React.js",
  },
];

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
  return (
    <main>
      <div className="h-[calc(100vh-57px)] relative flex flex-col justify-center">
        <div className="flex justify-around">
          <div className="flex justify-between text-3xl flex-col">
            <div />
            <div>
              <div className="flex gap-[10px]">
                <div>I am Rokas - </div>
                <div className="relative">
                  <div className="absolute top-0 left-0 word">motivated</div>
                  <div className="absolute top-0 left-0 word1">productive</div>
                  <div className="absolute top-0 left-0 word2">experienced</div>
                  <div className="absolute top-0 left-0 word3">helpful</div>
                  {/* <div
                className="absolute top-0 left-0 animate-blur animation-delay-4000"
                // animate={{ blur: 10 }}
                // transition={{ delay: 2 }}
              >
                My
              </div>
              <div
                className="absolute top-0 left-0 animate-blur animation-delay-4000"
                // animate={{ blur: 10 }}
                // transition={{ delay: 2 }}
              >
                name
              </div>
              <div
                className="absolute top-0 left-0 animate-blur animation-delay-4000"
                // animate={{ blur: 10 }}
                // transition={{ delay: 2 }}
              >
                Rokas
              </div> */}
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
          <div className="rounded-3xl border-black overflow-hidden">
            <Image data={data.upload.responsiveImage} />
          </div>
        </div>
        <span
          className="absolute top-[100px] left-[100px] text-gray-200 z-[-1]"
          // animate={{ y: [0, 10, 0] }}
          // transition={{ repeat: Infinity, duration: 5 }}
        >
          React.js
        </span>
        <motion.span
          className="absolute top-[100px] left-[250px] text-gray-200 z-[-1]"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 6 }}
        >
          Next.js
        </motion.span>
        <motion.span
          className="absolute top-[300px] left-[150px] text-gray-200 z-[-1]"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 6, delay: 1 }}
        >
          Node.js
        </motion.span>
        <motion.span
          className="absolute top-[250px] left-[400px] text-gray-200 z-[-1]"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 6, delay: 0.5 }}
        >
          Express.js
        </motion.span>
        <motion.span
          className="absolute top-[400px] left-[200px] text-gray-200 z-[-1]"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 5, delay: 1 }}
        >
          PostgreSQL
        </motion.span>
      </div>
      <div>
        <h2 className="text-4xl">My carrer path</h2>
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
