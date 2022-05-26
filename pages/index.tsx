import type { NextPage } from "next";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
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
        <div className="relative w-[401px] h-[500px] rounded-3xl border-black overflow-hidden">
          <Image
            src="/hero.jpg"
            alt="Vercel Logo"
            layout="fill"
            objectFit="contain"
          />
        </div>
      </div>
    </main>
  );
};

export default Home;
