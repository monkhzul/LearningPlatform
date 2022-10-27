import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import Layout from '../Layout/Layout'
import course from '../../../styles/Course.module.css'
import Link from 'next/link';
import ReactPaginate from "react-paginate";
import { useRouter } from 'next/router'

export default function Courses(props) {
    const router = useRouter();
    const [data, setData] = useState(props.db.products);
    const [pageNumber, setPageNumber] = useState(0);
    const perPage = 8;
    const pagesVisited = pageNumber * perPage;

    const changePage = ({ selected }) => {
        setPageNumber(selected)
    }

        const [checkCategory, setcheckCategory] = useState([])
        const [filteredData, setFilteredData] = useState([])

        function filterData(filters) {
            const filtered = []
            filters.forEach(filterValue => {
                filtered.push(...data.filter(val => val.title.includes(filterValue)));
            });
            setFilteredData(filtered)
        }

        const handleChange = (e) => {
            const value = e.target.value
            const checked = e.target.checked

            if (checked) {
                setcheckCategory([
                    ...checkCategory, value
                ])
            } else {
                setcheckCategory(checkCategory.filter((e) => (
                    e !== value
                )))
            }
            
                // filterData(checkCategory.length == 0 ? checkCategory[0] : checkCategory)
                console.log(checkCategory)
        }

        const pageCount = Math.ceil(filteredData.length === 0 ? data.length / perPage : checkCategory.length / perPage);

        console.log(filteredData)
    

    return (
        <Layout className="">
            <Head>
                <title>Сургалтууд</title>
                <link rel="icon" href="/images/getsitelogo.png" />
            </Head>

            <div className={`${course.courseContent} flex p-3`}>
                <div className={`border rounded-md p-1 ${course.category}`}>
                    <fieldset className="flex flex-row flex-wrap overflow-auto">
                        <legend className="text-[#2e3977] flex justify-center text-lg">Choose category</legend>
                        {data.map((data, i) =>
                            <form className="w-full pl-5 sm:w-1/2 md:w-1/3 xl:w-full" key={i} id="check">
                                <input type="checkbox" name="category" className='checkbox' value={data.title} onChange={handleChange}/>
                                <label for="coding" className="mx-2">{data.title}</label>
                            </form>
                        )}
                    </fieldset>
                </div>
                <div className={`flex flex-col ${course.Courses}`}>
                    <div className={`${course.courseCards}`}>
                        <div className="">
                            <h5 className="flex justify-center text-[#2e3977] my-3">Сургалтууд</h5>
                        </div>
                        <div className={`${course.cards}`}>
                            {
                                checkCategory.length === 0 ? data.slice(pagesVisited, pagesVisited + perPage)
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
                                : filteredData.slice(pagesVisited, pagesVisited + perPage)
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
                            }
                        </div>
                    </div>
                    <div className=''>
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
