import React from 'react';
import { Menu, Transition } from '@headlessui/react'
import Link from 'next/link'

function MenuLink(props) {
    return(
            <Menu.Item>
                {({ active }) => (
                <Link href={`${props.link}`}>
                    <button className={`${active ? 'bg-violet-500 text-white' : 'text-gray-900'} group flex w-full items-center rounded-md px-2 py-2 text-sm hover:bg-violet-500 hover:text-white`}>
                        {props.pageName}
                    </button>
                </Link>
                )}
            </Menu.Item>
    )
}

export default MenuLink;