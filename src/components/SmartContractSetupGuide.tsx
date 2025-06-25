import { useState } from "react"

export function SmartContractSetupGuide() {
  const [activeStep, setActiveStep] = useState(0)

  const steps = [
    {
      title: "Deploy Your Smart Contract",
      description: "Deploy your Move smart contract to Sui network",
      content: (
        <div className="space-y-4">
          <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700/50">
            <h4 className="text-cyan-400 font-medium mb-2">📝 Write Your Move Contract</h4>
            <p className="text-slate-300 text-sm mb-3">
              Create your smart contract using the Move programming language
            </p>
            <div className="bg-slate-900/50 rounded p-3 font-mono text-xs text-slate-300 overflow-x-auto">
              <div className="text-emerald-400">// Example Move module</div>
              <div>{"module my_package::my_module {"}</div>
              <div className="ml-4">{"public fun create_item(name: String) {"}</div>
              <div className="ml-8">// Your contract logic here</div>
              <div className="ml-4">{"}"}</div>
              <div>{"}"}</div>
            </div>
          </div>
          <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700/50">
            <h4 className="text-cyan-400 font-medium mb-2">🚀 Deploy to Network</h4>
            <p className="text-slate-300 text-sm mb-3">Use Sui CLI to deploy your contract</p>
            <div className="bg-slate-900/50 rounded p-3 font-mono text-xs text-slate-300">
              <div className="text-emerald-400"># Deploy to devnet</div>
              <div>sui client publish --gas-budget 100000000</div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Configure Contract Addresses",
      description: "Update the config file with your deployed contract addresses",
      content: (
        <div className="space-y-4">
          <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700/50">
            <h4 className="text-cyan-400 font-medium mb-2">📁 Update config.json</h4>
            <p className="text-slate-300 text-sm mb-3">
              Navigate to <code className="bg-slate-700 px-1 rounded text-xs">src/lib/smart-contract/config.json</code>
            </p>
            <div className="bg-slate-900/50 rounded p-3 font-mono text-xs text-slate-300 overflow-x-auto">
              <div>{"{"}</div>
              <div className="ml-2">
                <span className="text-blue-400">"PACKAGE_ID"</span>:{" "}
                <span className="text-emerald-400">"0x_YOUR_PACKAGE_ID_HERE"</span>,
              </div>
              <div className="ml-2">
                <span className="text-blue-400">"ADMIN_CAP"</span>:{" "}
                <span className="text-emerald-400">"0x_YOUR_ADMIN_CAP_HERE"</span>,
              </div>
              <div className="ml-2">
                <span className="text-blue-400">"SHARED_OBJECT"</span>:{" "}
                <span className="text-emerald-400">"0x_YOUR_SHARED_OBJECT_HERE"</span>
              </div>
              <div>{"}"}</div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Update Transaction Builders",
      description: "Modify the transaction builders to match your contract functions",
      content: (
        <div className="space-y-4">
          <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700/50">
            <h4 className="text-cyan-400 font-medium mb-2">🔧 Edit client-transactions.ts</h4>
            <p className="text-slate-300 text-sm mb-3">
              Update{" "}
              <code className="bg-slate-700 px-1 rounded text-xs">src/lib/smart-contract/client-transactions.ts</code>
            </p>
            <div className="bg-slate-900/50 rounded p-3 font-mono text-xs text-slate-300 overflow-x-auto">
              <div className="text-emerald-400">// Replace example functions with your contract functions</div>
              <div>
                <span className="text-blue-400">createItem</span>: (name) ={">"} {"{"}
              </div>
              <div className="ml-2">const transaction = new Transaction()</div>
              <div className="ml-2">transaction.moveCall({"{"})</div>
              <div className="ml-4">
                target: <span className="text-emerald-400">`${"${PACKAGE_ID}"}::your_module::create_item`</span>,
              </div>
              <div className="ml-4">arguments: [transaction.pure.string(name)]</div>
              <div className="ml-2">{"}"}</div>
              <div className="ml-2">return transaction</div>
              <div>{"}"}</div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Configure Query Functions",
      description: "Set up read-only functions to query your contract data",
      content: (
        <div className="space-y-4">
          <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700/50">
            <h4 className="text-cyan-400 font-medium mb-2">🔍 Edit queries.ts</h4>
            <p className="text-slate-300 text-sm mb-3">
              Update <code className="bg-slate-700 px-1 rounded text-xs">src/lib/smart-contract/queries.ts</code>
            </p>
            <div className="bg-slate-900/50 rounded p-3 font-mono text-xs text-slate-300 overflow-x-auto">
              <div className="text-emerald-400">// Add your query functions</div>
              <div>
                <span className="text-blue-400">async getItemInfo</span>(itemId) {"{"}
              </div>
              <div className="ml-2">const txn = new Transaction()</div>
              <div className="ml-2">txn.moveCall({"{"})</div>
              <div className="ml-4">
                target: <span className="text-emerald-400">`${"${PACKAGE_ID}"}::your_module::get_item`</span>,
              </div>
              <div className="ml-4">arguments: [txn.object(itemId)]</div>
              <div className="ml-2">{"}"}</div>
              <div className="ml-2">
                <span className="text-emerald-400">// Parse and return data</span>
              </div>
              <div>{"}"}</div>
            </div>
          </div>
          <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700/50">
            <h4 className="text-cyan-400 font-medium mb-2">🔑 Set Environment Variable</h4>
            <p className="text-slate-300 text-sm mb-3">Add your private key for read-only queries (optional)</p>
            <div className="bg-slate-900/50 rounded p-3 font-mono text-xs text-slate-300">
              <div className="text-emerald-400"># .env.local</div>
              <div>VITE_QUERY_PRIVATE_KEY=your_private_key_here</div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Test Your Integration",
      description: "Connect your wallet and test the smart contract integration",
      content: (
        <div className="space-y-4">
          <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700/50">
            <h4 className="text-cyan-400 font-medium mb-2">🧪 Test the Integration</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
                <span className="text-slate-300 text-sm">Connect your wallet using the button above</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
                <span className="text-slate-300 text-sm">Try creating an item using the form below</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
                <span className="text-slate-300 text-sm">Check the browser console for transaction results</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-emerald-400 rounded-full"></span>
                <span className="text-slate-300 text-sm">View your objects in the "Connected Account" section</span>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ]

  return (
    <div className="bg-gradient-to-br from-blue-500/5 to-cyan-500/5 border border-blue-500/20 backdrop-blur-sm rounded-lg p-6 mb-12">
      <div className="flex items-center space-x-2 mb-6">
        <span className="text-2xl">🏗️</span>
        <h2 className="text-white text-xl font-semibold">Smart Contract Integration Setup</h2>
      </div>
      <p className="text-slate-300 mb-6">Follow these steps to integrate your own smart contract with this scaffold</p>

      {/* Step Navigation */}
      <div className="flex flex-wrap gap-2 mb-6">
        {steps.map((step, index) => (
          <button
            key={index}
            onClick={() => setActiveStep(index)}
            className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
              activeStep === index
                ? "bg-cyan-500/20 text-cyan-400 border border-cyan-500/30"
                : "bg-slate-800/50 text-slate-400 border border-slate-700/50 hover:bg-slate-700/50 hover:text-slate-300"
            }`}
          >
            {index + 1}. {step.title}
          </button>
        ))}
      </div>

      {/* Active Step Content */}
      <div className="bg-slate-900/30 rounded-lg p-6 border border-slate-700/30">
        <div className="flex items-center space-x-3 mb-4">
          <span className="bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold">
            {activeStep + 1}
          </span>
          <div>
            <h3 className="text-white font-semibold">{steps[activeStep].title}</h3>
            <p className="text-slate-400 text-sm">{steps[activeStep].description}</p>
          </div>
        </div>
        {steps[activeStep].content}
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between mt-6">
        <button
          onClick={() => setActiveStep(Math.max(0, activeStep - 1))}
          disabled={activeStep === 0}
          className="px-4 py-2 bg-slate-800 border border-slate-600 hover:bg-slate-700 hover:border-slate-500 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-md transition-all duration-200"
        >
          Previous
        </button>
        <span className="text-slate-400 text-sm self-center">
          Step {activeStep + 1} of {steps.length}
        </span>
        <button
          onClick={() => setActiveStep(Math.min(steps.length - 1, activeStep + 1))}
          disabled={activeStep === steps.length - 1}
          className="px-4 py-2 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-md transition-all duration-200"
        >
          Next
        </button>
      </div>
    </div>
  )
}
