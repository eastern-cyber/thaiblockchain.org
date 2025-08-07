import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// import { ThirdwebProvider } from "thirdweb/react";
import { WalletProvider } from "@/providers/WalletProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ThaiBlockchain.org",
  description:
    "The Thai Blockchain Association",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body  className={inter.className}>
        <WalletProvider>{children}</WalletProvider>
      </body>
    </html>
  );
}

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body className={inter.className}>
//         <ThirdwebProvider>{children}</ThirdwebProvider>
//       </body>
//     </html>
//   );
// }
