import React from 'react'
import SideNav from './SideNav'

export default function AddUser() {
  return (
    <div className='h-screen flex flex-row justify-start'>
                <SideNav />
                <div className='w-full p-3'>
                    <h3>AddUser</h3>
                </div>
            </div>
  )
}
