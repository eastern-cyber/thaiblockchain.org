'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'
import artAssetIcon from "@public/ArtAsset_Logo.svg";
import { ConnectButton } from 'thirdweb/react'
import { client } from '@/app/client'
import { chain } from '@/app/chain'
import { inAppWallet } from 'thirdweb/wallets'

const links = [
  { name: 'Paintings', href: '/paintings' },
  { name: 'Photographs', href: '/photographs' },
  { name: 'Crafts', href: '/crafts' },
  { name: 'Trade', href: 'https://opensea.io/collection/artasset-nft-drop', target:'_blank' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <nav className="bg-[#131313] shadow-md p-4 mb-6 sticky top-0 z-50">
      <div className="flex items-center gap-2">
        <div className="max-w-7xl mx-auto flex justify-between items-center w-full">
          <Link href="/" className="flex justify-left items-center gap-2 text-[#eee]">
            <Image
              src={artAssetIcon}
              alt=""
              className="size-[60px]"
              style={{
                filter: "drop-shadow(0px 0px 24px #a726a9a8)",
              }}
            />
            <span className="ml-2 text-[24px] font-bold">ArtAsset.ai</span>
          </Link>
        </div>
        <div className="hidden md:block">
          <ConnectButton
            client={client}
            chain={chain}
            // appMetadata={{
            //   name: "Example App",
            //   url: "https://example.com",
            // }}
            wallets={[ inAppWallet ({
              auth: {
                options: [
                  "email",
                  // "phone",
                ]
              }
            }) ]}
          />
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

        {/* <ul>
          {links.map((link) => (
            link.target === '_blank' ? (
              <li key={link.name}>
                <a href={link.href} target="_blank" rel="noopener noreferrer">
                  {link.name}
                </a>
              </li>
            ) : (
              <li key={link.name}>
                <Link href={link.href}>{link.name}</Link>
              </li>
            )
          ))}
        </ul> */}
          {/* {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`block py-2 text-lg ${
                pathname === link.href
                  ? 'text-blue-200 font-semibold'
                  : 'text-gray-100 hover:text-yellow-400'
              }`}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))} */}
        </div>
        <div className="ml-16 mt-6 md:hidden">
          <ConnectButton
            client={client}
            chain={chain}
            // appMetadata={{
            //   name: "Example App",
            //   url: "https://example.com",
            // }}
            wallets={[ inAppWallet ({
              auth: {
                options: [
                  "email",
                  // "phone",
                ]
              }
            }) ]}
          />
        </div>
      </div>  
    </nav>
  )
}