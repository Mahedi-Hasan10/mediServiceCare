'use client'

import { RiSearchLine, RiBellLine } from 'react-icons/ri'
import Image from 'next/image'

export default function Header({ isSidebarExpanded }) {
  return (
    <>
    <div className=""></div>
    <header className={`fixed right-0 top-0 z-30 flex h-16 items-center justify-between bg-white px-6 transition-all duration-300 ${
      isSidebarExpanded ? 'left-64' : 'left-20'
    }`}>
      <div className="relative">
        <RiSearchLine className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="Search"
          className="h-10 w-64 rounded-lg bg-gray-50 pl-10 pr-4 text-sm focus:outline-none"
        />
      </div>
      
      <div className="flex items-center gap-4">
        <button className="rounded-full p-2 hover:bg-gray-100">
          <RiBellLine className="h-5 w-5 text-gray-500" />
        </button>
        <div className="flex items-center gap-2">
          <Image
            src="/placeholder.svg?height=32&width=32"
            alt="Profile"
            width={32}
            height={32}
            className="rounded-full"
          />
          <span className="text-sm font-medium">Sarah Brown</span>
        </div>
      </div>
    </header>
    </>
  )
}

