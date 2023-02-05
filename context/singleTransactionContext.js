import { createContext, useState } from "react";

export const SingleTransactionContext = createContext({
  transactions: [],
  date: "",
  isExpense: true,
  category: "",
  amount: 0,
  note: "",
  changeDate: (date) => {},
  changeCategory: (category) => {},
  changeAmount: (amount) => {},
  changeNote: (note) => {},
  setExpense: () => {},
  setIncome: () => {},
  resetAll: () => {},
  updateTransactionHistory: (date, amount, isExpense, category, note) => {},
});

function SingleTransactionContextProvider({ children }) {
  const [transactions, setTransactions] = useState([]);
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("");
  const [isExpense, setIsExpense] = useState(true);
  const [amount, setAmount] = useState(0);
  const [note, setNote] = useState("");

  function updateTransactionHistory(date, amount, isExpense, category, note) {
    setTransactions((prevTransactions) => [
      ...prevTransactions,
      {
        date: date,
        amount: amount,
        isExpense: isExpense,
        category: category,
        note: note,
      },
    ]);
  }

  function changeDate(formattedDate) {
    setDate(formattedDate);
  }

  function changeCategory(category) {
    setCategory(category);
  }

  function changeNote(note) {
    setNote(note);
  }

  function changeAmount(amount) {
    setAmount(amount);
  }

  function setExpense() {
    setIsExpense(true);
  }

  function setIncome() {
    setIsExpense(false);
  }

  function resetAll() {
    setCategory("");
    setIsExpense(true);
    setNote("");
    setAmount(0);
  }

  const value = {
    transactions: transactions,
    date: date,
    category: category,
    amount: amount,
    isExpense: isExpense,
    note: note,
    changeDate: changeDate,
    changeCategory: changeCategory,
    changeNote: changeNote,
    setExpense: setExpense,
    setIncome: setIncome,
    changeAmount: changeAmount,
    resetAll: resetAll,
    updateTransactionHistory: updateTransactionHistory,
  };

  return (
    <SingleTransactionContext.Provider value={value}>
      {children}
    </SingleTransactionContext.Provider>
  );
}

export default SingleTransactionContextProvider;
