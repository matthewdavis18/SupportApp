import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from "next/link";
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Support App</title>
        <meta
          name="description"
          content="Tools created with React/Javascript"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Matt Davis</h1>

        <p className={styles.description}>
          As I learn React and Node.js I like to appply what Ive learned to work
          tasks. Hopefully these mini apps will improve productivity Check out
          the About page, additional detail plus next steps I want to take.
        </p>

        <div className={styles.grid}>
          <div className={styles.card}>
            <Link href="/ccpa">
              <h2> i hate taill wind CCPA quickly generate and copy heard delete commands &rarr;</h2>
            </Link>
          </div>
          <div className={styles.card}>
            <Link href="/about">
              <h2> Info about this application and things to come &rarr;</h2>
            </Link>
          </div>

          
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
