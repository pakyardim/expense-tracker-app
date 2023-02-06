import { useContext, useState } from "react";
import { Button, StyleSheet, FlatList, View } from "react-native";
import MoneyContainer from "../components/MoneyContainer";
import TransactionHeader from "../components/TransactionHeader";
import { SingleTransactionContext } from "../context/singleTransactionContext";
import { isSameDay } from "../functions/dateFormatter";
import NewTransaction from "../components/NewTransaction";
import Colors from "../constants/colors";

export default function TransactionScreen({ navigation }) {
  const { transactionDays, resetAll } =
    useContext(SingleTransactionContext);

  const renderTransactions = (transactions) => {
    return transactions.map((transaction) => {
      return (
        <NewTransaction
          key={transaction.note}
          amount={transaction.amount}
          isExpense={transaction.isExpense}
          category={transaction.category}
          note={transaction.note}
        />
      );
    });
  };

  function renderTransactionDays(itemData) {
    return (
      <View style={styles.dayContainer}>
        <TransactionHeader date={itemData.item.date} />
        {renderTransactions(itemData.item.transactions)}
      </View>
    );
  }

  function pressHandler() {
    resetAll();
    navigation.navigate("AddTransactionScreen");
  }

  return (
    <>
      <MoneyContainer />
      <FlatList
        data={transactionDays}
        renderItem={renderTransactionDays}
        keyExtractor={(item) => item.date}
      />
      <Button title="+" onPress={pressHandler} />
    </>
  );
}

const styles = StyleSheet.create({
  dayContainer: {
    backgroundColor: Colors.primaryBlue,
    width: "100%",
    marginBottom: 12,
  },
});
