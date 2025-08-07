"use client";

import Image from "next/image";
import { ConnectButton } from "thirdweb/react";
import tbaIcon from "@public/TBA_Logo.svg";
import { client } from "./client";
import { chain } from "./chain";
import { inAppWallet } from "thirdweb/wallets";
import Navbar from "../components/Navbar";
import Footer from "@/components/Footer";
import ArticleCardResorces from "@/components/ArticleCardResorces";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <main className="p-4 pb-10 min-h-[100vh] flex items-center justify-center container max-w-screen-lg mx-auto">
      <div className="py-20">
        <Navbar />
        <Header />

        <div className="flex justify-center mb-20">
          <ContactForm />
          {/* <ConnectButton
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
          /> */}
        </div>

        <ArticleCardResorces />
        <Footer />
      </div>
    </main>
  );
}

function Header() {
  return (
    <header className="flex flex-col items-center mb- md:mb-20">
      <Image
        src={tbaIcon}
        alt=""
        className="mb-6 size-[200px] md:size-[200px]"
        style={{
          filter: "drop-shadow(0px 0px 24px #a726a9a8)",
        }}
      />

      <h1 className="justify-items-center text-xl md:text-4xl font-semibold md:font-bold tracking-tighter mb-6 text-zinc-100">
        Thai Blockchain Association{" "}
        <p></p>
        <p className="justfy-items-center">
        <span className="inline-block -skew-x-6 text-3xl text-blue-500"> www.</span>
        <span className="text-zinc-300 inline-block mx-1 text-3xl">ThaiBlockchain</span>
        <span className="inline-block -skew-x-6 text-blue-500 text-3xl">.org</span>
        </p>
      </h1>

      <p className="text-zinc-300 text-base text-l">
        สมาคมไทยบล็อกเชน{" "}
        <code className="bg-zinc-800 text-zinc-300 px-2 rounded py-1 text-sm mx-1">
        เพื่อส่งเสริม
        </code>{" "}
        การนำเทคโนโลยีบล็อกเชนไปใช้ให้เกิดประโยชน์
      </p>
    </header>
  );
}