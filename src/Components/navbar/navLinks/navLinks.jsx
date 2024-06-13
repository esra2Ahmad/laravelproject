'use client'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NavLink = ({item}) => {
    const pathName= usePathname();
  return (
    <div >
        <Link href={item.path}  className={` text-[24px]  leading-[32.4px]  font-semibold text-center ${pathName===item.path ? " text-red" : "text-neutral" }`}>
          {item.title}
        </Link>
    </div>
  )
}

export default NavLink