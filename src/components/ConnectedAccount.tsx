import { useState } from "react"
import { useCurrentAccount, useDisconnectWallet, useSuiClientQuery } from "@mysten/dapp-kit"

export function ConnectedAccount() {
  const account = useCurrentAccount()

  if (!account) {
    return (
      <div className="bg-slate-900/30 border border-slate-700/50 backdrop-blur-sm rounded-lg p-8 text-center">
        <div className="text-6xl mb-4">👛</div>
        <h3 className="text-xl font-semibold text-white mb-2">No Wallet Connected</h3>
        <p className="text-slate-400">Install and connect your Sui wallet to view your owned objects</p>
      </div>
    )
  }

  return (
    <div className="bg-slate-900/50 border border-slate-700/50 backdrop-blur-sm rounded-lg p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></div>
          <h3 className="text-white text-lg font-semibold">Connected Account</h3>
        </div>
        <DisconnectButton />
      </div>
      <p className="text-slate-400 font-mono text-sm mb-4 bg-slate-800/50 p-2 rounded border border-slate-700/50">
        {account.address}
      </p>
      <OwnedObjects address={account.address} />
    </div>
  )
}

function DisconnectButton() {
  const { mutate: disconnect } = useDisconnectWallet()
  const [isDisconnecting, setIsDisconnecting] = useState(false)

  const handleDisconnect = () => {
    setIsDisconnecting(true)
    disconnect(undefined, {
      onSuccess: () => {
        console.log("Wallet disconnected!")
        setIsDisconnecting(false)
      },
      onError: (error) => {
        console.error("Disconnect failed:", error)
        setIsDisconnecting(false)
      },
    })
  }

  return (
    <button
      onClick={handleDisconnect}
      disabled={isDisconnecting}
      className="bg-red-600/20 hover:bg-red-600/30 border border-red-500/30 hover:border-red-500/50 text-red-400 hover:text-red-300 px-3 py-1 rounded-md transition-all duration-200 text-sm font-medium"
    >
      {isDisconnecting ? "Disconnecting..." : "Disconnect"}
    </button>
  )
}

function OwnedObjects({ address }: { address: string }) {
  const { data, isLoading } = useSuiClientQuery("getOwnedObjects", {
    owner: address,
  })

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-cyan-400"></div>
        <span className="ml-3 text-slate-400">Loading objects...</span>
      </div>
    )
  }

  if (!data || data.data.length === 0) {
    return (
      <div className="text-center py-8">
        <div className="text-4xl mb-3">📦</div>
        <p className="text-slate-400">No objects found for this address</p>
      </div>
    )
  }

  return (
    <div>
      <div className="flex items-center space-x-2 mb-4">
        <h4 className="text-white font-medium">Owned Objects</h4>
        <span className="bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 rounded-full px-2 py-1 text-xs font-mono">
          {data.data.length}
        </span>
      </div>
      <div className="space-y-2 max-h-64 overflow-y-auto">
        {data.data.map((object) => (
          <div
            key={object.data?.objectId}
            className="flex items-center justify-between p-3 bg-slate-800/30 rounded-lg border border-slate-700/30 hover:border-cyan-500/30 transition-all duration-200"
          >
            <span className="text-slate-300 font-mono text-sm truncate flex-1">{object.data?.objectId}</span>
            <a
              href={`https://suiscan.xyz/mainnet/object/${object.data?.objectId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-3 px-2 py-1 bg-slate-700 border border-slate-600 hover:bg-slate-600 hover:border-cyan-500/50 rounded text-xs text-white transition-all duration-200"
            >
              ↗
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}
