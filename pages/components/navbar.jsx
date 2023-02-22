import React from 'react'
import { Menu, Transition } from '@headlessui/react'
import Link from 'next/link'
import MenuLink from './menuLink'
import { FaBars } from "react-icons/fa";

function Navbar() {
  return (
    <div className="text-right flex justify-between max-w-7xl mx-auto text-white px-4 sm:px-8 pt-4 pb-2 md:pt-6 md:pb-4 ">
      <Link href="/" >
        <h1 className='lg:flex text-2xl hover:cursor-pointer '>EeesshhMedia</h1>
      </Link>
      <div className='justify-between items-center gap-10 text-md lg:text-lg hidden lg:flex'>
          <Link href="/">
            <h1 className='hover:scale-105 transition duration-200 ease-in-out hover:text-gray-300 hover:cursor-pointer'>Home</h1>
          </Link>
          <Link href="/">
            <h1 className='hover:scale-105 transition duration-200 ease-in-out hover:text-gray-300 hover:cursor-pointer'>Work</h1>
          </Link>
          <Link href="/">
            <h1 className='hover:scale-105 transition duration-200 ease-in-out hover:text-gray-300 hover:cursor-pointer'>About</h1>
          </Link>


      </div>
      <Menu as="div" className="lg:hidden relative w-52">
                <Menu.Button className="inline-flex rounded-md  px-4 text-md font-medium text-white hover:bg-opacity-30
                 focus:outline-none">
                    <FaBars size={30}/>
                </Menu.Button>
            
                <Menu.Items className="absolute right-0 mt-2 w-full origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="px-1 py-1 ">
                        <MenuLink pageName="Home" link="/" ></MenuLink>
                        <MenuLink pageName="Work" link="/"></MenuLink>
                        <MenuLink pageName="About" link="/"></MenuLink>
                    </div>
                </Menu.Items>
        </Menu>


    </div>
  )
}

export default Navbar