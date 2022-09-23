import React, { useState } from 'react'
import Head from 'next/head'
import Layout from './Layout/Layout'
import style from '../../styles/Home.module.css'
import Image from 'next/image'

export default function Home(props) {
    const [data, setData] = useState(props.db.products);
    
    return (
        <Layout>
            <Head>
                <title>Нүүр Хуудас</title>
                <link rel="icon" href="/mcsstar.png" />
            </Head>

                <h2 className='text-center my-3'>Home Page</h2>

                <div className={`${style.categories} flex`}>
                    {data.map((data, i) =>
                        <div className={`${style.card} h-20 flex justify-center items-center`} key={i}>
                            <p className='text-center'>{data.title}</p>
                        </div>
                    )}
                </div>

        </Layout>
    )
}

export const getServerSideProps = async (context) => {

    const res = await fetch('https://dummyjson.com/products')
    const db = await res.json()

    return {
        props: {
            db
        }
    }
}