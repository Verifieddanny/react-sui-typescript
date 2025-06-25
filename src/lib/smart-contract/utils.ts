import { clientTransactions } from "./client-transactions"
import { ContractQueries } from "./queries"
import type { Item } from "./types"
import type { Transaction } from "@mysten/sui/transactions"

// Initialize the queries instance with error handling
let contractQueries: ContractQueries | null = null

// Lazy initialization to avoid circular imports and handle missing private key
const getContractQueries = () => {
  if (!contractQueries) {
    try {
      contractQueries = new ContractQueries()
    } catch (error) {
      console.warn("ContractQueries initialization failed:", error)
      return null
    }
  }
  return contractQueries
}

/**
 * High-level utility functions that combine transactions and queries
 * These are the functions you'll import and use in your components
 */

export const createItem = async (name: string, description: string, price: number): Promise<Transaction> => {
  return clientTransactions.createItem(name, description, price)
}

export const getAllItems = async (): Promise<Item[]> => {
  const queries = getContractQueries()
  if (!queries) {
    console.warn("Cannot fetch items: ContractQueries not initialized")
    return []
  }

  try {
    const items = await queries.getAllItems()
    return items
  } catch (error) {
    console.error("Failed to get all items:", error)
    return []
  }
}

export const getItemInfo = async (itemId: string): Promise<Item | null> => {
  const queries = getContractQueries()
  if (!queries) {
    console.warn("Cannot fetch item info: ContractQueries not initialized")
    return null
  }

  try {
    const result = await queries.getItemInfo(itemId)
    if (result === null) return null
    return {
      ...result,
      price: Number(result.price),
    }
  } catch (error) {
    console.error("Failed to get item info:", error)
    return null
  }
}

export const purchaseItem = async (itemId: string, amount: number): Promise<Transaction> => {
  return clientTransactions.purchaseItem(itemId, amount)
}

export const isItemOwner = async (itemId: string, address: string): Promise<boolean> => {
  const queries = getContractQueries()
  if (!queries) {
    console.warn("Cannot check ownership: ContractQueries not initialized")
    return false
  }

  try {
    return await queries.isOwner(itemId, address)
  } catch (error) {
    console.error("Failed to check ownership:", error)
    return false
  }
}

export const updateItem = async (itemId: string, newPrice: number): Promise<Transaction> => {
  return clientTransactions.updateItem(itemId, newPrice)
}

/**
 * Add more utility functions that combine your transactions and queries
 */
