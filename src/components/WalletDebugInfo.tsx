import { useWallets, useCurrentAccount } from "@mysten/dapp-kit"

export function WalletDebugInfo() {
  const wallets = useWallets()
  const account = useCurrentAccount()

  return (
    <div className="text-xs text-slate-400 bg-slate-800/50 rounded px-2 py-1">
      Wallets: {wallets.length} | Connected: {account ? "Yes" : "No"}
    </div>
  )
}
