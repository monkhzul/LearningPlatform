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
          Хэрэглэгч нэмэх
        </title>
      </Head>
      <div className='flex flex-col sm:flex-row justify-start h-screen'>
          <SideNav />
              <div className='w-full px-5 md:px-28 flex flex-col items-center'>
                  <h3 className='my-10'>Хэрэглэгч нэмэх</h3>
                  <Form className='flex flex-col sm:flex-row w-full'>
                        <Form.Group className="mb-3 w-full sm:w-1/2 p-1" controlId="formBasicEmail">
                            <Form.Label>Овог</Form.Label>
                            <Form.Control type="text" placeholder="Овог" />
                        </Form.Group>

                        <Form.Group className="mb-3 w-full sm:w-1/2 p-1" controlId="formBasicPassword">
                            <Form.Label>Нэр</Form.Label>
                            <Form.Control type="text" placeholder="Нэр" />
                        </Form.Group>
                    </Form>
                    <Form className='flex flex-col sm:flex-row w-full'>
                        <Form.Group className="mb-3 w-full sm:w-1/2 p-1" controlId="formBasicEmail">
                            <Form.Label>ERP_Code</Form.Label>
                            <Form.Control type="text" placeholder="ERP_Code" />
                        </Form.Group>

                        <Form.Group className="mb-3 w-full sm:w-1/2 p-1" controlId="formBasicPassword">
                            <Form.Label>Харьяалагдах хэлтэс</Form.Label>
                            <Select
                                className='select w-full'
                                placeholder="Харьяалагдах хэлтэс..."
                            />
                        </Form.Group>
                    </Form>
                    <Form className='flex flex-col sm:flex-row w-full'>
                        <Form.Group className="mb-3 w-full sm:w-1/2 p-1" controlId="formBasicEmail">
                            <Form.Label>Албан тушаал</Form.Label>
                            <Form.Control type="text" placeholder="Албан тушаал" />
                        </Form.Group>

                        <Form.Group className="mb-3 w-full sm:w-1/2 p-1" controlId="formBasicPassword">
                            <Form.Label>Зэрэглэл</Form.Label>
                            <Select
                                className='select w-full'
                                placeholder="Зэрэглэл..."
                            />
                        </Form.Group>
                    </Form>
                    <Form className='flex flex-col sm:flex-row w-full'>
                        <Form.Group className="mb-3 w-full sm:w-1/2 p-1" controlId="formBasicEmail">
                            <Form.Label>Шууд удирдлага</Form.Label>
                            <Select
                                className='select w-full'
                                placeholder="Шууд удирдлага..."
                            />
                        </Form.Group>

                        <Form.Group className="mb-3 w-full sm:w-1/2 p-1 flex flex-col" controlId="formBasicPassword">
                            <Form.Label>Ажилд орсон огноо</Form.Label>
                            <DatePicker
                                className={`border rounded-md text-sm ${admin.datepicker}`}
                                selected={chooseDate}
                                showMonthDropdown={true}
                                onChange={(date) => { setChooseDate(date) }}
                                placeholder=""
                            />
                        </Form.Group>
                    </Form>
                    <div className='mb-5'>
                        <p className='bg-[#2e3977] text-white text-center py-2 px-5 rounded-lg m-auto'>Нэмэх</p>
                    </div>
              </div>
      </div>
    </Layout>
  )
}
