import { Menu, Transition } from '@headlessui/react'
import Link from 'next/link';

const MenuLink = ({ pageName, link }) => {
  return (
    <Menu>
        <Menu.Item>
        {({ active }) => (
            <Link href={`${link}`}>
            <button className={`${active ? 'bg-violet-500 text-white' : 'text-gray-900'} group flex w-full items-center rounded-md px-2 py-2 text-sm hover:bg-violet-500 hover:text-white`}>
                {pageName}
            </button>
            </Link>
        )}
        </Menu.Item>
    </Menu>
  );
}

export default MenuLink;
