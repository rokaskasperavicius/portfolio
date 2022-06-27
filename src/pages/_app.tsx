import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import clsx from "clsx";
import Router from "next/router";
import NProgress from "nprogress";

import "nprogress/nprogress.css";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps, router }: AppProps) {
  useEffect(() => {
    // NProgress.set(0.4);
    // const handleRouteStart = () => NProgress.start();
    // const handleRouteDone = () => NProgress.done();
    // Router.events.on("routeChangeStart", handleRouteStart);
    // Router.events.on("routeChangeComplete", handleRouteDone);
    // Router.events.on("routeChangeError", handleRouteDone);
    // return () => {
    //   // Make sure to remove the event handler on unmount!
    //   Router.events.off("routeChangeStart", handleRouteStart);
    //   Router.events.off("routeChangeComplete", handleRouteDone);
    //   Router.events.off("routeChangeError", handleRouteDone);
    // };
  }, []);

  const path = router.asPath;

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="transition p-4 relative flex justify-end after:absolute after:bottom-0 after:left-0 after:h-[1px] after:bg-gray-300 test">
        <div className="flex gap-3">
          <Link href="/">
            <motion.a
              className={clsx(styles.link, {
                "font-bold": path === "/",
              })}
              animate={{ y: [-20, 0], opacity: [0, 1] }}
              transition={{ delay: 1 }}
            >
              Home
            </motion.a>
          </Link>
          <Link href="/projects">
            <motion.a
              className={clsx(styles.link, {
                "font-bold": path === "/projects",
              })}
              animate={{ y: [-20, 0], opacity: [0, 1] }}
              transition={{ delay: 1.5 }}
            >
              Projects
            </motion.a>
          </Link>
        </div>
      </header>
      <motion.div
        className="flex-1"
        key={router.route}
        initial="initial"
        animate="animate"
        transition={{
          duration: 0.5,
        }}
        variants={{
          initial: {
            x: -50,
            opacity: 0,
          },
          animate: {
            x: 0,
            opacity: 1,
          },
        }}
      >
        <Component {...pageProps} />
      </motion.div>

      <footer className={styles.footer}>
        {/* <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a> */}
        &copy; 2022. All Rights Reserved.
      </footer>
    </div>
  );
}

export default MyApp;
