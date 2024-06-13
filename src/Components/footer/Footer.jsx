import React from 'react'
import { FaPhone } from "react-icons/fa6";
import { BiSolidEnvelope } from "react-icons/bi";

const Footer = () => {
  return (
    <div className='container '>
        <div className='mt-[50px] flex gap-[600px] items-center'>
            <h1 className=' text-red font-bold text-[32px] leading-[46px]'>Logo PlaceHolder</h1>
            <p className=' text-red font-bold text-[32px] leading-[46px]'>Contact</p>
        </div>
        <div className='mt-[20px] flex gap-[400px] items-center'>
            <p className=' w-[488px] text-neutral text-[20px] leading-[27px]'>Learn to deploy your Laravel applications on<br/> Amazon's AWS with our comprehensive, easy-<br/>to-follow guide.</p>
            <div className=' flex flex-col gap-5'>
                <div className=' flex gap-4 items-center'>
                <BiSolidEnvelope className='text-red w-5 h-5' />
                    <p className=' text-neutral text-[20px] leading-[27px]'>email@domain.com</p>
                </div>
                <div className=' flex gap-4 items-center'>
                <FaPhone  className='text-red w-5 h-5' />
                <p  className=' text-neutral text-[20px] leading-[27px]'>+999 99 999 9999</p>
                 
                </div>
            </div>
        </div>
        <p  className='text-[16px] text-center font-medium leading-[20px] mt-[80px] text-neutral'>© 2024 Laravel Deplyment</p>
    </div>
  )
}

export default Footer