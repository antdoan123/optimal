import Link from 'next/link'
import React from 'react'
import { AiOutlineInstagram, AiOutlineFacebook, AiOutlineArrowRight} from 'react-icons/ai'
import { FaTiktok } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="mt-20 max-w-7xl mx-auto p-4 w-full text-center lg:text-left text-white ">
        
        <div className='flex flex-col md:flex-row justify-between text-2xl md:text-3xl font-bold'>
            <h1 className='mt-10'>Transform your business today.</h1>
            <Link href="/">
                <btn className='flex items-center justify-center gap-x-2 text-[#5865F2] hover:scale-105 transition duration-200 ease-in-out hover:cursor-pointer rounded-xl py-2 px-14 bg-white mt-10 shadow-lg'>
                    <span className=' font-bold text-lg'>Get Started</span>
                    <AiOutlineArrowRight className='flex items-center justify-center' size={'24px'}></AiOutlineArrowRight>
                </btn>
            </Link>
        </div>

        <div className=" text-center p-2 border-t-2 mt-10">
            <div className=''>
                &copy; 2023 Copyright
                <a className="text-white" href="./"> EeesshhMedia </a>
                All rights reserved.
            </div>
            <div className=' text-center py-2'>
            <p>Follow Our Social Media!</p>
            <a
                href="https://www.instagram.com/kingsbartendingservices/"
                target="_blank"
                rel="noreferrer"
                className='inline-flex  hover:scale-105 duration-200 pt-2'>
            <AiOutlineInstagram size={24} ></AiOutlineInstagram>
            </a>
            <a
                href="https://www.tiktok.com/@kingsbartendingservices"
                target="_blank"
                rel="noreferrer"
                className='inline-flex  hover:scale-105 duration-200 pl-2'>
            <FaTiktok size={24}></FaTiktok>
            </a>
            <a
                href="https://www.facebook.com/kingsbartendingservices/"
                target="_blank"
                rel="noreferrer"
                className='inline-flex  hover:scale-105 duration-200 pl-2'>
            <AiOutlineFacebook size={24}></AiOutlineFacebook>
            </a>
        </div>
        </div>

  </footer>
  )
}

export default Footer