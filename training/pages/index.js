import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Login from './components/Login'
import Footer from './components/Layout/Footer'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Learning Platform</title>
        <meta name="mcs" content="Generated by create next app" />
        <link rel="icon" href="/mcsstar.png" />
        <link rel="stylesheet" href="https://unpkg.com/flowbite@1.5.3/dist/flowbite.min.css" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <p href="https://nextjs.org" className=''>LMS</p>
        </h1>

        <div className={styles.grid}>
          <Login />
        </div>
      </main>

      <Footer />
      <script src="https://unpkg.com/@themesberg/flowbite@latest/dist/flowbite.bundle.js"></script>
    </div>
  )
}