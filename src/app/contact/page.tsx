"use client";

import Image from "next/image";
import { ConnectButton } from "thirdweb/react";
import artAssetIcon from "@public/ArtAsset_Logo.svg";
import { client } from "../client";
import { chain } from "../chain";
import { inAppWallet } from "thirdweb/wallets";
import Navbar from "../../components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import ArticleCardResorces from "@/components/ArticleCardResorces";

export default function Home() {
  return (
    <main className="p-4 pb-10 min-h-[100vh] flex items-center justify-center container max-w-screen-lg mx-auto">
      <div className="py-20">
        <Navbar />
        <Header />

        <div className="flex justify-center mb-20">
            <div className="w-full max-w-4xl aspect-video">
                <iframe
                className="w-full h-full"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.801623397413!2d100.5132994!3d13.730457000000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e298d951cf47e1%3A0x776af865e2cec49d!2sMANO%20Gallery%20%7C%20Lifestyle%2C%20Art%2C%20Craft!5e0!3m2!1sen!2sth!4v1743840502673!5m2!1sen!2sth"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </div>
        <ArticleCardResorces />
        <Footer />
      </div>
    </main>
  );
}

function Header() {
  return (
    <header className="flex flex-col items-center mb-20 md:mb-20">
      <Image
        src={artAssetIcon}
        alt=""
        className="mb-6 size-[150px] md:size-[150px]"
        style={{
          filter: "drop-shadow(0px 0px 24px #a726a9a8)",
        }}
      />

      <h1 className="justify-items-center text-xl md:text-6xl font-semibold md:font-bold tracking-tighter mb-6 text-zinc-100">
        ArtAsset.ai{" "}
        <p></p>
        <span className="inline-block -skew-x-6 text-4xl text-blue-500"> Studio </span>
        <span className="text-zinc-300 inline-block mx-1 text-4xl"> and </span>
        <span className="inline-block -skew-x-6 text-blue-500 text-4xl"> Academy </span>
      </h1>

      <p className="text-[20px] text-zinc-300 text-base leading-8">
        <b>Located in:</b> River City Bangkok<br />
        <b>Shop:</b> MANO Gallery | Lifestyle, Art, Craft<br />
        <b>Address:</b> Room 180, RIVER CITY Bangkok, 23 Soi Charoen Krung 24,<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        Talat Noi, Samphanthawong, Bangkok 10100<br />
        <b>Phone:</b> 095 480 9489<br />
        <b>Email:</b> <Link href="mailto:mano.gallery2@gmail.com" className="text-blue-400" target="_blank">mano.gallery2@gmail.com</Link><br />
        {/* <b>EMail:</b> mano.gallery2@gmail.com<br /> */}
        <b>Line App: </b><Link href="https://lin.ee/J4LJ3rg" className="text-blue-400" target="_blank"> https://lin.ee/J4LJ3rg</Link><br />
        <b>Operation Hours:</b> 11:00 - 19:00 Hrs.<br />
      </p>
    </header>
  );
}