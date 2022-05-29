import type { NextPage } from "next";
import { useEffect } from "react";
import { Image } from "react-datocms";
import styles from "../styles/Home.module.css";

import { GraphQLClient } from "graphql-request";

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

const Home = ({ data, y }: { data: any; y: any }) => {
  useEffect(() => {
    var myDiv = document.getElementById("myId");
    var test = document.getElementById("test");

    if (myDiv && test) {
      myDiv.setAttribute("style", `opacity: ${1 - y / 384}`);
      test.setAttribute("style", `opacity: ${y / 384}`);
    }
  }, [y]);

  return (
    <>
      <main className={`h-[200vh]`}>
        <div
          id="myId"
          className="flex justify-around pt-8 absolute top-[57px] z-[-1] left-[50%] w-full -translate-x-1/2"
        >
          <div className="flex justify-center text-2xl flex-col">
            <div>I am Rokas,</div>
            <div className="text-[#ff5208]">student front-end developer</div>
            <div>
              with <span className="text-[#ff5208]">3+ years </span> of work
              experience.
            </div>
          </div>
          <Image
            className="rounded-[5px] border-2 border-black "
            data={data.upload.responsiveImage}
            // src="/hero.jpg"
            // alt="Vercel Logo"
            // layout="fill"
            // objectFit="contain"
          />
        </div>
        <div
          id="test"
          className="flex gap-[70px] pl-[20px] justify-around pt-8 absolute top-[57px] h-[531px] items-center z-[-1] left-[50%] w-full -translate-x-1/2"
        >
          <div className="flex justify-center text-xl flex-col">
            &lt;p&gt;I am Rokas,&lt;/p&gt;
            <br />
            &lt;p className="color-orange"&gt;student front-end
            developer&lt;/p&gt;
            <br />
            &lt;p&gt;with &lt;span&gt; className="color-orange"&gt; 3+ years
            &lt;/span&gt; of work experience.&lt;/p&gt;
          </div>
          <div className="text-xl">
            &lt;img
            <br />
            &nbsp;alt="Portrait photo"
            <br />
            &nbsp;className="hero-image"
            <br />
            /&gt;
          </div>
        </div>
      </main>
    </>
  );
};

const HOMEPAGE_QUERY = `query MyQuery {
  upload {
    responsiveImage(imgixParams: { fit: crop, w: 400, h: 500, auto: format }) {
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
