/*
 * @Author: kingford
 * @Date: 2023-03-19 00:22:05
 * @LastEditTime: 2023-03-19 01:34:04
 */
import styles from "@/styles/home.module.scss";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Next Template</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>main</main>
    </>
  );
}