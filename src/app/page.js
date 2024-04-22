"use client";
import styles from "./page.module.css";
import Link from "next/link";
import { useEffect, useState } from "react";
import { numberWithCommas } from "./lib/utils";
import Seo from "./components/Seo";

export default function Home() {
  const [counter, setCounter] = useState(329725481);
  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((counter) => counter + 1);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Seo
        pageTitle="Population.io"
        pageDescription="Generated through Nisum tech"
      />

      <div className={styles.container}>
        <main className={styles.main}>
          <h1 className={styles.title}>
            Welcome to <Link href="/">Population.io</Link>
          </h1>
          <p className={styles.description}>
            {numberWithCommas(counter)} HUMANS RECORDED
          </p>
          <div className={styles.grid}>
            <Link href="/population" className={styles.card}>
              <h2>Population Data &rarr;</h2>
              <p>Find in-depth information about Population around world.</p>
            </Link>
            <Link href="/" className={styles.card}>
              <h2>Lorem &rarr;</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </Link>
          </div>
          <p className={styles.description}>
            Built with <span style={{ color: "red" }}>&hearts;</span> Next.js |
            React | Material-UI
          </p>
        </main>
      </div>
    </>
  );
}
