import { useWallets } from "@mysten/dapp-kit"

export function WalletInstallationGuide() {
  const wallets = useWallets()

  if (wallets.length > 0) {
    return null // Don't show if wallets are detected
  }

  return (
    <div className="bg-amber-500/10 border border-amber-500/30 backdrop-blur-sm rounded-lg p-6 mb-12">
      <div className="flex items-center space-x-2 mb-4">
        <span className="text-2xl">⚠️</span>
        <h3 className="text-amber-400 text-lg font-semibold">No Wallets Detected</h3>
      </div>
      <p className="text-slate-300 mb-4">
        To connect to the Sui blockchain, you need to install a compatible wallet extension first.
      </p>
      <div className="grid md:grid-cols-2 gap-4">
        <a
          href="https://chrome.google.com/webstore/detail/sui-wallet/opcgpfmipidbgpenhmajoajpbobppdil"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-3 bg-slate-800/50 border border-slate-600 hover:border-cyan-500/50 rounded-lg p-4 transition-all duration-200"
        >
          <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
            <span className="text-xl">🦊</span>
          </div>
          <div>
            <h4 className="text-white font-medium">Sui Wallet</h4>
            <p className="text-slate-400 text-sm">Official Sui wallet extension</p>
          </div>
        </a>
        <a
          href="https://chrome.google.com/webstore/detail/suiet-sui-wallet/khpkpbbcccdmmclmpigdgddabeilkdpd"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-3 bg-slate-800/50 border border-slate-600 hover:border-cyan-500/50 rounded-lg p-4 transition-all duration-200"
        >
          <div className="w-10 h-10 bg-emerald-500/20 rounded-lg flex items-center justify-center">
            <span className="text-xl">💎</span>
          </div>
          <div>
            <h4 className="text-white font-medium">Suiet</h4>
            <p className="text-slate-400 text-sm">Popular Sui wallet with DeFi features</p>
          </div>
        </a>
      </div>
    </div>
  )
}
