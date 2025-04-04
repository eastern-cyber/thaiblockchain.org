'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'

const links = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <nav className="bg-gray-800 shadow-md p-4 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-[28px] font-bold text-gray-100">
          ArtAsset.ai
        </Link>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-100">
            {isOpen ? <X size={24} /> : <Menu size={26} />}
          </button>
        </div>  
        <div className={`flex-col md:flex-row md:flex gap-6 md:items-center ${isOpen ? 'flex' : 'hidden'} md:gap-8`}>
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`block py-2 text-lg ${
                pathname === link.href
                  ? 'text-blue-600 font-semibold'
                  : 'text-gray-700 hover:text-blue-600'
              }`}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>      
      </div>
    </nav>
  )
}