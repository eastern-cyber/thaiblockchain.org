'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'
import tbaIcon from "@public/TBA_Logo.svg";
import { ConnectButton } from 'thirdweb/react'
import { client } from '@/app/client'
import { chain } from '@/app/chain'
import { inAppWallet } from 'thirdweb/wallets'
import { WalletConnectButton } from "@/components/ConnectButton";
import WalletConnect from "@/components/WalletConnect";

const links = [
  { name: 'Paintings', href: '/paintings' },
  { name: 'Photographs', href: '/photographs' },
  { name: 'Crafts', href: '/crafts' },
  { name: 'Trade', href: 'https://marketplace.artasset.ai/', target:'_blank' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <nav className="bg-[#131313] shadow-md p-4 mb-6 sticky top-0 z-50">
      <div className="flex items-center gap-2">
        <div className="max-w-7xl mx-auto flex-col justify-between items-center w-full">
          <Link href="/" className="flex justify-left items-center gap-2 text-[#eee]">
            <Image
              src={tbaIcon}
              alt=""
              className="size-[80px] md:size-[120px]"
              style={{
                filter: "drop-shadow(0px 0px 24px #a726a9a8)",
              }}
            />
            <p className="ml-2 text-[16px] md:text-[24px] font-bold">ThaiBlockchain.org</p>
          </Link>
        </div>
        <div className="hidden md:block">
          {/* <WalletConnectButton /> */}
          <WalletConnect />
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-100">
            {isOpen ? <X size={24} /> : <Menu size={26} />}
          </button>
        </div>
      </div>
      <div> 
        <div className={`flex-col md:flex-row md:flex gap-1 md:items-center mt-8 ${isOpen ? 'flex' : 'hidden'} md:gap-8`}>
        {links.map((link) => {
          const isActive = pathname === link.href;
          const baseClass = `block py-2 text-lg ${
            isActive ? 'text-blue-200 font-semibold' : 'text-gray-100 hover:text-yellow-400'
          }`;

          const handleClick = () => setIsOpen(false);

          return link.target === '_blank' ? (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={baseClass}
              onClick={handleClick}
            >
              {link.name}
            </a>
          ) : (
            <Link
              key={link.name}
              href={link.href}
              className={baseClass}
              onClick={handleClick}
            >
              {link.name}
            </Link>
          );
        })}
          
        </div>
        <div className="ml-16 mt-6 md:hidden">
          <WalletConnectButton />
        </div>
      </div>  
    </nav>
  )
}