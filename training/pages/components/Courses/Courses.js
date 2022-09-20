import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import Layout from '../Layout/Layout'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import course from '../../../styles/Course.module.css'
import Link from 'next/link';
import ReactPaginate from "react-paginate";

export default function Courses(props) {
    const [data, setData] = useState(props.db.products);
    const [pageNumber, setPageNumber] = useState(0);
    const perPage = 10;
    const pagesVisited = pageNumber * perPage;
    const pageCount = Math.ceil(data.length / perPage);

    const changePage = ({ selected }) => {
        setPageNumber(selected)
    }

    const display = data.slice(pagesVisited, pagesVisited + perPage)
        .map((data, i) =>
            <div className={`${course.cardBody} border`} key={i}>
                <h5 className="mx-auto">{data.title}</h5>
                <div className={`${course.cardContent}`}>
                    {data.description}
                </div>
                <div className={`${course.cardFooter}`}>
                    <Link href="/" className={`${course.cardLink} my-auto bg-gray-300 py-1 px-4`}>View Course</Link>
                </div>
            </div>
        )

    return (
        <Layout className="">
            <Head>
                <title>Courses</title>
            </Head>

            <div className="courses ">
                <h5 className="flex justify-center my-2 text-[#2e3977]">Сургалтууд</h5>
            </div>

        <div className={`${course.courseContent} flex p-3 my-5`}>
            <div className={`border p-1 ${course.category}`}>
               <fieldset className="flex flex-row flex-wrap overflow-auto">
               <legend>Choose your interests</legend>
                {data.map((data) => 
               <>
                 <input type="checkbox" id="coding" name="interest" value="coding" />
                 <label for="coding">{data.title}</label>
               </>
               )}
             </fieldset>
            </div>
            <div className="">
            <div className={`${course.cards}`}>
                {display}
            </div>
            <ReactPaginate
                previousLabel={"Previous"}
                nextLabel={"Next"}
                pageCount={pageCount}
                onPageChange={changePage}
                containerClassName={"paginationBttns"}
                previousLinkClassName={"previousBttn"}
                nextLinkClassName={"nextBttn"}
                disabledClassName={"paginationDisabled"}
                activeClassName={"paginationActive"}
            />
            </div>
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
