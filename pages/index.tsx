import type { NextPage } from "next";
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

const Home = ({ data }: { data: any }) => {
  return (
    <main className={styles.main}>
      <div className="flex justify-around pt-8">
        <div className="flex justify-center text-2xl flex-col">
          <div>I am Rokas,</div>
          <div className="text-[#ff5208]">student front-end developer</div>
          <div>
            with <span className="text-[#ff5208]">3+ years </span> of work
            experience.
          </div>
        </div>
        <div className="rounded-3xl border-black overflow-hidden">
          <Image
            data={data.upload.responsiveImage}
            // src="/hero.jpg"
            // alt="Vercel Logo"
            // layout="fill"
            // objectFit="contain"
          />
        </div>
      </div>
    </main>
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
