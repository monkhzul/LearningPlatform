import React from 'react'
import Head from 'next/head'
import Layout from './Layout/Layout'
import style from '../../styles/Home.module.css'
import Image from 'next/image'
import i1 from '../../images/categories/1.jpg'
import i2 from '../../images/categories/2.jpg'
import i3 from '../../images/categories/3.jpg'
import i4 from '../../images/categories/4.jpg'
import i5 from '../../images/categories/5.jpg'
import i6 from '../../images/categories/6.jpg'
import i7 from '../../images/categories/7.jpg'
import i8 from '../../images/categories/8.jpg'

export default function Home() {
    return (
        <Layout>
            <Head>
                <title>Нүүр Хуудас</title>
                <link rel="icon" href="/mcsstar.png" />
            </Head>

                <h2>Home Page</h2>

                <div className={`${style.categories} border flex`}>
                    <div className={`${style.card} h-full`}>
                        <Image 
                            src={i1}
                            layout="responsive"
                            className=""
                        />
                    </div>
                    <div className={`${style.card} h-full`}>
                        <Image 
                            src={i2}
                            layout="responsive"
                            className=""
                        />
                    </div>
                    <div className={`${style.card} h-full`}>
                        <Image 
                            src={i3}
                            layout="responsive"
                            className=""
                        />
                    </div>
                    <div className={`${style.card} h-full`}>
                        <Image 
                            src={i4}
                            layout="responsive"
                            className=""
                        />
                    </div>
                    <div className={`${style.card} h-full`}>
                        <Image 
                            src={i5}
                            layout="responsive"
                            className=""
                        />
                    </div>
                    <div className={`${style.card} h-full`}>
                        <Image 
                            src={i6}
                            layout="responsive"
                            className=""
                        />
                    </div>
                    <div className={`${style.card} h-full`}>
                        <Image 
                            src={i7}
                            layout="responsive"
                            className=""
                            height={90}
                            width={120}
                        />
                    </div>
                    <div className={`${style.card} h-full`}>
                        <Image 
                            src={i8}
                            layout="responsive"
                            className=""
                        />
                    </div>
                </div>

        </Layout>
    )
}
