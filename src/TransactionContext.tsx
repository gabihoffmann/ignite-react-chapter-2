import { createContext, useEffect, useState, ReactNode } from 'react';
import { api } from "./services/api";
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
interface TransactionContextData{
  transactions: Transaction[],
  createTransaction: (transaction: TransactionInput) => Promise<void>,
}

type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>;

export const TransactionContext = createContext<TransactionContextData>({} as TransactionContextData);


export function TransactionProvider({children}: TransactionProviderProps){
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  
  useEffect(()=>{
    api.get('transactions')
    .then(response => setTransactions(response.data.transactions))
  },[]);

  async function createTransaction(transactionInput: TransactionInput){
    await api.post('/transactions', transactionInput);
  };
  
  return (
    <TransactionContext.Provider value={{ transactions, createTransaction }}>
    {children}
  </TransactionContext.Provider>)

};