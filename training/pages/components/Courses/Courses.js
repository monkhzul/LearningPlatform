import React, { useState } from 'react'
import Head from 'next/head'
import Layout from '../Layout/Layout'
import Button from 'react-bootstrap/Button';
import course from '../../../styles/Course.module.css'
import Link from 'next/link';
import ReactPaginate from "react-paginate";
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

export default function Courses(props) {
    const [data, setData] = useState(props.db.products);
    const [pageNumber, setPageNumber] = useState(0);
    const perPage = 8;
    const pagesVisited = pageNumber * perPage;
    const pageCount = Math.ceil(data.length / perPage);

    const [modalShow, setModalShow] = useState(false);

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
                <title>Сургалтууд</title>
                <link rel="icon" href="/mcsstar.png" />
            </Head>

            <div className={`${course.courseContent} flex p-3`}>
                <div className={`border rounded-md p-1 ${course.category}`}>
                    <fieldset className="flex flex-row flex-wrap overflow-auto">
                        <legend className="text-[#2e3977] flex justify-center text-lg">Choose category</legend>
                        {data.map((data, i) =>
                            <div className="w-full pl-5 sm:w-1/2 md:w-1/3 xl:w-full" key={i}>
                                <input type="checkbox" id="coding" name="interest" value="coding" />
                                <label for="coding" className="mx-2">{data.title}</label>
                            </div>
                        )}
                    </fieldset>
                </div>
                <div className={`flex flex-col ${course.Courses}`}>
                    <div className="courses">
                        <h5 className="flex justify-center text-[#2e3977] my-3">Сургалтууд</h5>
                    </div>
                    <div className='my-3'>
                        <div className='bg-[#2e3977] text-white w-1/3 md:w-1/6 text-center py-2 ml-[5%] rounded-md cursor-pointer' onClick={() => setModalShow(true)}>
                            Сургалт нэмэх
                        </div>
                            <AddCourseModal
                                show={modalShow}
                                onHide={() => setModalShow(false)}
                            />
                    </div>
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

function AddCourseModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Сургалт нэмэх
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className='p-5'>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Сургалтын нэр</Form.Label>
                <Form.Control type="text" placeholder="Enter email" />
                <Form.Text className="text-muted">
                We will never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="text" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <div className=''>
                <p className='bg-[#2e3977] text-white w-1/3 text-center py-2 rounded-lg m-auto'>Нэмэх</p>
            </div>
            </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide} className="bg-slate-300">Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }