"use client";

import Image from "next/image";
import { ConnectButton } from "thirdweb/react";
import artAssetIcon from "@public/ArtAsset_Logo.svg";
import { client } from "./client";
import { chain } from "./chain";
import { inAppWallet } from "thirdweb/wallets";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <main className="p-4 pb-10 min-h-[100vh] flex items-center justify-center container max-w-screen-lg mx-auto">
      <div className="py-20">
        <Navbar />
        <Header />

        <div className="flex justify-center mb-20">
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

        <ThirdwebResources />
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

function ThirdwebResources() {
  return (
    <div className="grid gap-4 lg:grid-cols-3 justify-center">
      <ArticleCard
        title="thirdweb SDK Docs"
        href="https://portal.thirdweb.com/typescript/v5"
        description="thirdweb TypeScript SDK documentation"
      />

      <ArticleCard
        title="Components and Hooks"
        href="https://portal.thirdweb.com/typescript/v5/react"
        description="Learn about the thirdweb React components and hooks in thirdweb SDK"
      />

      <ArticleCard
        title="thirdweb Dashboard"
        href="https://thirdweb.com/dashboard"
        description="Deploy, configure, and manage your smart contracts from the dashboard."
      />
    </div>
  );
}

function ArticleCard(props: {
  title: string;
  href: string;
  description: string;
}) {
  return (
    <a
      href={props.href + "?utm_source=next-template"}
      target="_blank"
      className="flex flex-col border border-zinc-800 p-4 rounded-lg hover:bg-zinc-900 transition-colors hover:border-zinc-700"
    >
      <article>
        <h2 className="text-lg font-semibold mb-2">{props.title}</h2>
        <p className="text-sm text-zinc-400">{props.description}</p>
      </article>
    </a>
  );
}
