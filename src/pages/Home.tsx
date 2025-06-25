import { ContractExample } from "../components/ContractExample"
import { WalletDebugInfo } from "../components/WalletDebugInfo"
import { WalletConnectionButton } from "../components/WalletConnectionButton"
import { WalletInstallationGuide } from "../components/WalletInstallationGuide"
import { SmartContractSetupGuide } from "../components/SmartContractSetupGuide"
import { NavigationInstructions } from "../components/NavigationInstructions"
import { ConnectedAccount } from "../components/ConnectedAccount"

export default function Home() {
  return (
    <>
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%2300D4AA' fillOpacity='0.03'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      ></div>

      <div className="relative z-10">
        {/* Header */}
        <header className="border-b border-slate-800/50 bg-slate-950/80 backdrop-blur-sm">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">{"<>"}</span>
              </div>
              <h1 className="text-xl font-bold text-white">Sui React TypeScript</h1>
            </div>
            <div className="flex items-center space-x-4">
              {/* Debug info */}
              <WalletDebugInfo />
              {/* Custom Connect/Disconnect Button */}
              <WalletConnectionButton />
            </div>
          </div>
        </header>

        <main className="container mx-auto px-4 py-12">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-slate-800/50 rounded-full px-4 py-2 mb-6 border border-slate-700/50">
              <span className="text-emerald-400">⚡</span>
              <span className="text-sm text-slate-300">React + Sui SDK + TypeScript</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-emerald-400 bg-clip-text text-transparent mb-6">
              Build on Sui
            </h1>

            <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-8">
              A modern TypeScript scaffold for building decentralized applications on the Sui blockchain. Get started in
              minutes with this developer-friendly template.
            </p>

            {/* Developer Credit */}
            <div className="flex items-center justify-center space-x-4 mb-12">
              <span className="text-slate-400">Built by</span>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">D</span>
                </div>
                <span className="text-white font-semibold">DevDanny</span>
                <div className="flex space-x-2">
                  <a
                    href="https://x.com/dannyclassi_c"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1 bg-slate-800 border border-slate-600 hover:bg-slate-700 hover:border-cyan-500/50 rounded-md text-sm text-white transition-all duration-200"
                  >
                    𝕏
                  </a>
                  <a
                    href="https://github.com/Verifieddanny"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1 bg-slate-800 border border-slate-600 hover:bg-slate-700 hover:border-cyan-500/50 rounded-md text-sm text-white transition-all duration-200"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Wallet Installation Guide */}
          <WalletInstallationGuide />

          {/* Smart Contract Setup Guide */}
          <SmartContractSetupGuide />

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <div className="bg-slate-900/50 border border-slate-700/50 backdrop-blur-sm rounded-lg p-6 hover:border-cyan-500/30 transition-all duration-300">
              <div className="w-12 h-12 bg-cyan-500/10 border border-cyan-500/20 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">👛</span>
              </div>
              <h3 className="text-white font-semibold mb-2">Wallet Integration</h3>
              <p className="text-slate-400 text-sm">Connect and interact with Sui wallets seamlessly</p>
            </div>

            <div className="bg-slate-900/50 border border-slate-700/50 backdrop-blur-sm rounded-lg p-6 hover:border-blue-500/30 transition-all duration-300">
              <div className="w-12 h-12 bg-blue-500/10 border border-blue-500/20 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">🔧</span>
              </div>
              <h3 className="text-white font-semibold mb-2">TypeScript Ready</h3>
              <p className="text-slate-400 text-sm">Full type safety with the latest Sui TypeScript SDK</p>
            </div>

            <div className="bg-slate-900/50 border border-slate-700/50 backdrop-blur-sm rounded-lg p-6 hover:border-emerald-500/30 transition-all duration-300">
              <div className="w-12 h-12 bg-emerald-500/10 border border-emerald-500/20 rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-white font-semibold mb-2">React + Vite</h3>
              <p className="text-slate-400 text-sm">Built with React 18 and Vite for fast development</p>
            </div>
          </div>

          {/* Navigation Instructions */}
          <NavigationInstructions />

          {/* Resources */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-gradient-to-br from-cyan-500/5 to-blue-500/5 border border-cyan-500/20 backdrop-blur-sm rounded-lg p-6 hover:border-cyan-500/40 transition-all duration-300">
              <div className="flex items-center space-x-2 mb-4">
                <span className="text-2xl">📚</span>
                <h3 className="text-white text-lg font-semibold">Sui TypeScript SDK</h3>
              </div>
              <p className="text-slate-400 mb-4 text-sm">
                Comprehensive documentation and guides for the Sui TypeScript SDK
              </p>
              <a
                href="https://sdk.mystenlabs.com/typescript"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white px-4 py-2 rounded-md transition-all duration-200 font-medium"
              >
                <span>View Documentation</span>
                <span>↗</span>
              </a>
            </div>

            <div className="bg-gradient-to-br from-emerald-500/5 to-teal-500/5 border border-emerald-500/20 backdrop-blur-sm rounded-lg p-6 hover:border-emerald-500/40 transition-all duration-300">
              <div className="flex items-center space-x-2 mb-4">
                <span className="text-2xl">👥</span>
                <h3 className="text-white text-lg font-semibold">Join the Community</h3>
              </div>
              <p className="text-slate-400 mb-4 text-sm">Connect with other developers and get support on Discord</p>
              <a
                href="https://discord.com/invite/Sui"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white px-4 py-2 rounded-md transition-all duration-200 font-medium"
              >
                <span>Join Discord</span>
                <span>↗</span>
              </a>
            </div>
          </div>

          {/* Connected Account Section */}
          <ConnectedAccount />

          {/* Smart Contract Integration Example */}
          <div className="mt-12">
            <ContractExample />
          </div>
        </main>
      </div>
    </>
  )
}
