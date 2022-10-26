import React, { useState, useEffect } from 'react'
import Layout from '../Layout/Layout'
import SideNav from './SideNav'
import Head from 'next/head'
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Select from 'react-select';
import DatePicker from "react-datepicker";
import admin from '../../../styles/Admin.module.css';


export default function AddUser() {
    const date = new Date();
    var firstDay = new Date(date.getFullYear(), date.getMonth(), date.getDate());
    const [chooseDate, setChooseDate] = useState(firstDay);
  return (
    <Layout>
      <Head>
        <title>
          Сургалт нэмэх
        </title>
      </Head>
      <div className='flex flex-col sm:flex-row justify-start h-screen'>
          <SideNav />
              <div className='w-full px-5 md:px-28 flex flex-col items-center'>
                  <h3 className='my-10'>Сургалт нэмэх</h3>
                  <Form className='flex flex-col sm:flex-row w-full'>
                        <Form.Group className="mb-3 w-full sm:w-1/2 p-1" controlId="formBasicEmail">
                            <Form.Label>Сургалтын нэр</Form.Label>
                            <Form.Control type="text" placeholder="Сургалтын нэр" />
                        </Form.Group>

                        <Form.Group className="mb-3 w-full sm:w-1/2 p-1" controlId="formBasicPassword">
                            <Form.Label>Сургалтын төрөл</Form.Label>
                            <Form.Control type="text" placeholder="Сургалтын төрөл" />
                        </Form.Group>
                    </Form>
                    <Form className='flex flex-col sm:flex-row w-full'>
                        <Form.Group className="mb-3 w-full sm:w-1/2 p-1" controlId="formBasicEmail">
                            <Form.Label>Сургалтын үргэлжлэх хугацаа</Form.Label>
                            <Form.Control type="text" placeholder="Сургалтын үргэлжлэх хугацаа" />
                        </Form.Group>

                        <Form.Group className="mb-3 w-full sm:w-1/2 p-1" controlId="formBasicPassword">
                            <Form.Label>Сургалтын түвшин (level)</Form.Label>
                            <Select
                                className='select w-full'
                                placeholder="Харьяалагдах хэлтэс..."
                            />
                        </Form.Group>
                    </Form>
                    <Form className='flex flex-col sm:flex-row w-full'>
                        <Form.Group className="mb-3 w-full sm:w-1/2 p-1" controlId="formBasicEmail">
                            <Form.Label>Training Type</Form.Label>
                            <Select
                                className='select w-full'
                                placeholder="Training Type"
                            />
                        </Form.Group>

                        <Form.Group className="mb-3 w-full sm:w-1/2 p-1" controlId="formBasicPassword">
                            <Form.Label>Course Session Dates</Form.Label>
                            <Select
                                className='select w-full'
                                placeholder="Course Session Dates"
                            />
                        </Form.Group>
                    </Form>
                    <Form className='flex flex-col sm:flex-row w-full'>
                        <div className='w-full sm:w-1/2'>
                          <div className='w-full flex flex-col'>
                            <Form.Label>Бичлэг оруулах</Form.Label>
                            <input type={"file"} className="border rounded-md" />
                          </div>
                        </div>
                        <Form.Group className="mb-3 w-full sm:w-1/2 p-1 flex flex-col mx-auto" controlId="formBasicPassword">
                            <Form.Label>Эхлэх хугацаа</Form.Label>
                            <DatePicker
                                className={`border rounded-md text-sm ${admin.datepicker}`}
                                selected={chooseDate}
                                showMonthDropdown={true}
                                onChange={(date) => { setChooseDate(date) }}
                                placeholder=""
                            />
                        </Form.Group>
                    </Form>
                    <div className='my-4'>
                        <p className='bg-[#2e3977] text-white text-center py-2 px-5 rounded-lg m-auto'>Нэмэх</p>
                    </div>
              </div>
      </div>
    </Layout>
  )
}
