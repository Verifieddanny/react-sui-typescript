export function NavigationInstructions() {
  return (
    <div className="bg-slate-900/50 border border-slate-700/50 backdrop-blur-sm rounded-lg p-6 mb-12">
      <div className="flex items-center space-x-2 mb-4">
        <span className="text-2xl">🧭</span>
        <h2 className="text-white text-xl font-semibold">How to Navigate This App</h2>
      </div>
      <p className="text-slate-400 mb-6">Here's how to use this scaffold and integrate your smart contract</p>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Left Column - Basic Navigation */}
        <div className="space-y-4">
          <h3 className="text-cyan-400 font-semibold mb-3">🚀 Getting Started</h3>

          <div className="flex items-start space-x-4">
            <span className="bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-0.5">
              1
            </span>
            <div>
              <h4 className="text-white font-medium">Install a Sui Wallet</h4>
              <p className="text-slate-400 text-sm">Install Sui Wallet or Suiet extension from the Chrome Web Store</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <span className="bg-blue-500/10 text-blue-400 border border-blue-500/30 rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-0.5">
              2
            </span>
            <div>
              <h4 className="text-white font-medium">Connect Your Wallet</h4>
              <p className="text-slate-400 text-sm">Click "Connect Wallet" in the header to link your Sui wallet</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-0.5">
              3
            </span>
            <div>
              <h4 className="text-white font-medium">Explore the Interface</h4>
              <p className="text-slate-400 text-sm">
                View your owned objects and try the example smart contract integration
              </p>
            </div>
          </div>
        </div>

        {/* Right Column - Smart Contract Setup */}
        <div className="space-y-4">
          <h3 className="text-emerald-400 font-semibold mb-3">🏗️ Smart Contract Setup</h3>

          <div className="flex items-start space-x-4">
            <span className="bg-orange-500/10 text-orange-400 border border-orange-500/30 rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-0.5">
              A
            </span>
            <div>
              <h4 className="text-white font-medium">Deploy Your Contract</h4>
              <p className="text-slate-400 text-sm">Use Sui CLI to deploy your Move smart contract to the network</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <span className="bg-purple-500/10 text-purple-400 border border-purple-500/30 rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-0.5">
              B
            </span>
            <div>
              <h4 className="text-white font-medium">Update Configuration</h4>
              <p className="text-slate-400 text-sm">
                Add your contract addresses to{" "}
                <code className="bg-slate-700 px-1 rounded text-xs">src/lib/smart-contract/config.json</code>
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <span className="bg-pink-500/10 text-pink-400 border border-pink-500/30 rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-0.5">
              C
            </span>
            <div>
              <h4 className="text-white font-medium">Customize Functions</h4>
              <p className="text-slate-400 text-sm">Modify transaction builders and queries to match your contract</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
