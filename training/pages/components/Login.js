import React from 'react'
import login from '../../styles/Login.module.css'
import { useRouter } from 'next/router'

export default function Login() {
    const router = useRouter();
    function Login() {
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        router.push('/components/Home')
    }
  return (
    <div className='w-full md:w-1/2 xl:w-1/3'>
        <form action="" >
            <h1 className='text-gray-100 font-semibold mx-auto text-center mb-8 text-xl'>Нэвтрэх хэсэг</h1>
            <input type="text" name="" id="username" placeholder='Username'/>
            <input type="password" name="" id="password" placeholder='Password'/>
            <div className='w-full text-center flex justify-center'>
                <div className='button' onClick={Login}>Нэвтрэх</div>
            </div>
        </form>
    </div>
  )
}
