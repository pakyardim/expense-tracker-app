import { createContext, useState, useEffect } from "react";

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
  updateTransactionHistory: (date, amount, isExpense, category, note) => {},
});

function SingleTransactionContextProvider({ children }) {
  const [transactionDays, setTransactionDays] = useState([]);
  const [date, setDate] = useState("");
  const [category, setCategory] = useState("");
  const [isExpense, setIsExpense] = useState(true);
  const [amount, setAmount] = useState(0);
  const [note, setNote] = useState("");

  function updateTransactionHistory( date, fullDate, amount, isExpense, category, note) {
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
  }

  useEffect(() => {
    console.log(transactionDays);
  }, [transactionDays]);

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
    updateTransactionHistory: updateTransactionHistory,
  };

  return (
    <SingleTransactionContext.Provider value={value}>
      {children}
    </SingleTransactionContext.Provider>
  );
}

export default SingleTransactionContextProvider;
