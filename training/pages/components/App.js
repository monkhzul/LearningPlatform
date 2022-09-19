import React from 'react'
import Head from 'next/head'
import Content from './Content'
import Footer from './Footer'
import Header from './Header'
import { useRouter } from 'next/router'
import { BrowserRouter as Router, Switch, Route } from 'next/router'

export default function App() {
  const router = useRouter()

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <div>
        <Header />
        
        <Footer />
      </div>
    </>
  )
}
