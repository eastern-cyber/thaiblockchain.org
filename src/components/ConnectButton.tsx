// components/ConnectButton.tsx
"use client";

import { ConnectButton } from "@rainbow-me/rainbowkit";

export function WalletConnectButton() {
  return (
    <div className="hidden md:block">
      <ConnectButton
        accountStatus="address"
        chainStatus="icon"
        showBalance={false}
      />
    </div>
  );
}