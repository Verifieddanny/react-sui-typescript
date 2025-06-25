import { useState } from "react"
import { useCurrentAccount, useConnectWallet, useWallets, useDisconnectWallet } from "@mysten/dapp-kit"

export function WalletConnectionButton() {
  const { mutate: connect } = useConnectWallet()
  const { mutate: disconnect } = useDisconnectWallet()
  const wallets = useWallets()
  const account = useCurrentAccount()
  const [isConnecting, setIsConnecting] = useState(false)
  const [isDisconnecting, setIsDisconnecting] = useState(false)

  const handleConnect = async () => {
    if (wallets.length === 0) {
      alert("No wallets detected! Please install a Sui wallet extension first.")
      return
    }

    setIsConnecting(true)
    try {
      connect(
        { wallet: wallets[0] },
        {
          onSuccess: () => {
            console.log("Wallet connected successfully!")
            setIsConnecting(false)
          },
          onError: (error) => {
            console.error("Failed to connect wallet:", error)
            alert(`Failed to connect wallet: ${error.message}`)
            setIsConnecting(false)
          },
        },
      )
    } catch (error) {
      console.error("Connection error:", error)
      setIsConnecting(false)
    }
  }

  const handleDisconnect = async () => {
    setIsDisconnecting(true)
    try {
      disconnect(undefined, {
        onSuccess: () => {
          console.log("Wallet disconnected successfully!")
          setIsDisconnecting(false)
        },
        onError: (error) => {
          console.error("Failed to disconnect wallet:", error)
          setIsDisconnecting(false)
        },
      })
    } catch (error) {
      console.error("Disconnect error:", error)
      setIsDisconnecting(false)
    }
  }

  if (account) {
    return (
      <div className="flex items-center space-x-2">
        <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-md px-3 py-2 text-emerald-400 text-sm">
          Connected: {account.address.slice(0, 6)}...{account.address.slice(-4)}
        </div>
        <button
          onClick={handleDisconnect}
          disabled={isDisconnecting}
          className="bg-red-600/80 hover:bg-red-600 disabled:opacity-50 text-white px-3 py-2 rounded-md transition-all duration-200 text-sm font-medium"
        >
          {isDisconnecting ? "Disconnecting..." : "Disconnect"}
        </button>
      </div>
    )
  }

  return (
    <div className="flex items-center space-x-2">
      <button
        onClick={handleConnect}
        disabled={isConnecting}
        className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 disabled:opacity-50 text-white px-4 py-2 rounded-md transition-all duration-200 font-medium"
      >
        {isConnecting ? "Connecting..." : "Connect Wallet"}
      </button>
    </div>
  )
}
