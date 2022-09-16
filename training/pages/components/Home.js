import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import user from '../../images/svg/user.svg'

export default function Home() {
  return (
    <div>
        <Head>
            <title>Home</title>
        </Head>

        <header className='flex justify-end p-5'>
            <div className='user flex mr-5'>
                {/* <div id="dropdownDividerButton" data-dropdown-toggle="dropdownDivider" class="text-white bg-blue-300 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
                    <p>UserName</p>
                    <Image 
                        src={user}
                        width={80}
                        height={30}
                        className="p-1"
                    />
                </div>

                <div id="dropdownDivider" class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                    <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDividerButton">
                    <li>
                        <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                    </li>
                    <li>
                        <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                    </li>
                    <li>
                        <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                    </li>
                    </ul>
                    <div class="py-1">
                    <a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Separated link</a>
                    </div>
                </div> */}
                {/* <div class="dropdown inline-block relative">
                    <button class="bg-gray-300 font-semibold py-2 px-4 rounded inline-flex items-center">
                        <span class="mr-1">UserName</span>
                        <Image src={user} width={50} height={30} />
                    </button>
                    <ul class="dropdown-menu absolute hidden text-gray-700 pt-2 ">
                        <li class=""><a class="rounded-t bg-gray-50 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">One</a></li>
                        <li class=""><a class="bg-gray-50 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">Two</a></li>
                        <li class=""><a class="rounded-b bg-gray-50 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">Three is the magic number</a></li>
                    </ul>
                </div> */}

<div className="max-w-lg mx-auto">
    
    <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center" type="button" data-dropdown-toggle="dropdown">Dropdown button </button>

    <div className="hidden bg-white text-base z-50 list-none divide-y divide-gray-100 rounded shadow my-4" id="dropdown">
        <div className="px-4 py-3">
        <span className="block text-sm">Bonnie Green</span>
        <span className="block text-sm font-medium text-gray-900 truncate">name@flowbite.com</span>
        </div>
        <ul className="py-1" aria-labelledby="dropdown">
        <li>
            <a href="#" className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2">Dashboard</a>
        </li>
        <li>
            <a href="#" className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2">Settings</a>
        </li>
        <li>
            <a href="#" className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2">Earnings</a>
        </li>
        <li>
            <a href="#" className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2">Sign out</a>
        </li>
        </ul>
    </div>
</div>


            </div>
        </header>

        {/* <footer className={''}>
            <Link href="/" className=''>
                <a className='bg-gray-200'>Гарах</a>
            </Link>
        </footer> */}
    </div>
  )
}
