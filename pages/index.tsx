import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>3Delicious</title>
        <meta name="description" content="3Delicious" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
    </div>
  );
};

export default Home;
