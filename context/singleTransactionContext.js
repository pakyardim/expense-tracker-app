import { createContext, useEffect, useState } from "react";

export const SingleTransactionContext = createContext({
  transactionDays: [],
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
  totalTransactionAmounts: () => {},
  transactionAmounts: (fullDate) => {},
  updateTransactionHistory: (date, amount, isExpense, category, note) => {},
});

function SingleTransactionContextProvider({ children }) {
  const [transactionDays, setTransactionDays] = useState([]);
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("");
  const [isExpense, setIsExpense] = useState(true);
  const [amount, setAmount] = useState(0);
  const [note, setNote] = useState("");

  function updateTransactionHistory(
    date,
    fullDate,
    amount,
    isExpense,
    category,
    note
  ) {
    setTransactionDays((prevTransactionDays) => {
      const foundIndex = prevTransactionDays.findIndex(
        (day) => day.fullDate === fullDate
      );
      if (foundIndex === -1) {
        return [
          {
            date: date,
            fullDate: fullDate,
            transactions: [
              {
                amount: amount,
                isExpense: isExpense,
                category: category,
                note: note,
              },
            ],
          },
          ...prevTransactionDays,
        ];
      } else {
        return prevTransactionDays.map((day, index) => {
          if (index === foundIndex) {
            return {
              ...day,
              transactions: [
                ...day.transactions,
                {
                  amount: amount,
                  isExpense: isExpense,
                  category: category,
                  note: note,
                },
              ],
            };
          }
          return day;
        });
      }
    });

    sortTransactionDays();
  }

  function sortTransactionDays() {
    setTransactionDays((prevTransactionDays) =>
      [...prevTransactionDays].sort(
        (a, b) => b.date.getTime() - a.date.getTime()
      )
    );
  }

  function transactionAmounts(fullDate) {
    const targetDay = transactionDays.find((day) => day.fullDate === fullDate);

    let expenseAmount = 0;
    let incomeAmount = 0;

    targetDay.transactions.forEach((transaction) => {
      if (transaction.isExpense) {
        expenseAmount += parseFloat(transaction.amount);
      } else {
        incomeAmount += parseFloat(transaction.amount);
      }
    });
    const amounts = {
      expenseAmount: expenseAmount,
      incomeAmount: incomeAmount,
    };
    return amounts;
  }

  function totalTransactionAmounts() {
    let expenseAmount = 0;
    let incomeAmount = 0;
    let total = 0;

    transactionDays.forEach((day) => {
      day.transactions.forEach((transaction) => {
        if (transaction.isExpense) {
          expenseAmount += parseFloat(transaction.amount);
        } else {
          incomeAmount += parseFloat(transaction.amount);
        }
      });
    });

    total = parseFloat(incomeAmount) - parseFloat(expenseAmount);
    const amounts = {
      expenseAmount: expenseAmount,
      incomeAmount: incomeAmount,
      total: total,
    };
    return amounts;
  }

  function changeDate(date) {
    setDate(date);
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
    transactionDays: transactionDays,
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
    totalTransactionAmounts: totalTransactionAmounts,
    transactionAmounts: transactionAmounts,
    updateTransactionHistory: updateTransactionHistory,
  };

  return (
    <SingleTransactionContext.Provider value={value}>
      {children}
    </SingleTransactionContext.Provider>
  );
}

export default SingleTransactionContextProvider;
