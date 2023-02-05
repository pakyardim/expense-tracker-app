import { useContext, useState } from "react";
import { Button, StyleSheet, FlatList, View } from "react-native";
import MoneyContainer from "../components/MoneyContainer";
import TransactionDay from "../components/TransactionDay";
import { SingleTransactionContext } from "../context/singleTransactionContext";

export default function TransactionScreen({ navigation }) {
  const { date, amount, isExpense, category, note, resetAll } = useContext(
    SingleTransactionContext
  );

  function renderTransactions(itemData) {
    return <TransactionDay />;
  }

  //if date.day aynı ise sadece üzerine newTransaction eklesin. Eğer date.day yok ise transaction day eklesin
  function pressHandler() {
    resetAll();
    navigation.navigate("AddTransactionScreen");
  }

  return (
    <>
      <MoneyContainer />
      <TransactionDay dateDay="16" dayName="Mon" monthYear="02.23" />
      <TransactionDay dateDay="16" dayName="Mon" monthYear="02.23" />
      <Button title="+" onPress={pressHandler} />
    </>
  );
}
