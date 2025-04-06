"use client";

import Image from "next/image";
import { ConnectButton } from "thirdweb/react";
import artAssetIcon from "@public/ArtAsset_Logo.svg";
import { client } from "../client";
import { chain } from "../chain";
import { inAppWallet } from "thirdweb/wallets";
import Navbar from "../../components/Navbar";
import Footer from "@/components/Footer";
import ArticleCardResorces from "@/components/ArticleCardResorces";

export default function Home() {
  return (
    <main className="p-4 pb-10 min-h-[100vh] flex items-center justify-center container max-w-screen-lg mx-auto">
      <div className="py-20">
        <Navbar />
        <Header />

        <div className="flex justify-center mb-20">
          <p>
          <b><u>งานฝีมือ</u></b> อันเป็นศิลปะร่วมสมัย สามารถนำมาเชื่อมโยงกับ สินทรัพย์ดิจิทัล เพื่อข่ายผ่าน NFT MarketPlace ชั้นนำของโลกอย่าง Opensea โดยไม่จำเป็นต้องมีการขนส่งเคลื่อนย้ายผลงานจริง
          </p>
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

      <p className="text-zinc-300 text-base">
        ที่ซึ่ง{" "}
        <code className="bg-zinc-800 text-zinc-300 px-2 rounded py-1 text-sm mx-1">
        งานศิลปะ
        </code>{" "}
        บนโลกจริงเชื่อมโยงกับโลกดิจิทัล
      </p>
    </header>
  );
}