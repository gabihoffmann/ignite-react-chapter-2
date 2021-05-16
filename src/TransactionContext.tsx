import { createContext, useEffect, useState, ReactNode } from 'react';
import { api } from "./services/api";

export const TransactionContext = createContext<Transaction[]>([]);

interface Transaction{
  id: number,
  title: string,
  amount: number,
  type: string,
  category: string,
  createdAt: string,
}

interface TransactionProviderProps{
  children: ReactNode;
}

export function createTransaction(transaction){
  api.post('/transaction', transaction)
}

export function TransactionProvider({children}: TransactionProviderProps){
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(()=>{
    api.get('transactions')
    .then(response => setTransactions(response.data.transactions))
  },[])

  return <TransactionContext.Provider value={transactions}>{children}</TransactionContext.Provider>
}