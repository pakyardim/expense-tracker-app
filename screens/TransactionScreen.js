import { useContext, useEffect } from "react";
import { StyleSheet, FlatList, View, Text, Modal, Button } from "react-native";
import MoneyContainer from "../components/MoneyContainer";
import TransactionHeader from "../components/TransactionHeader";
import { SingleTransactionContext } from "../context/singleTransactionContext";
import NewTransaction from "../components/NewTransaction";
import Colors from "../constants/colors";
import AddTransactionBtn from "../components/ui/AddTransactionBtn";

export default function TransactionScreen({ navigation }) {
  const { transactionDays, resetAll } = useContext(SingleTransactionContext);
  
  useEffect(() => {
    if(transactionDays.length >= 1){
      console.log(transactionDays[0].transactions);
    }
  }, [transactionDays]);

  if (transactionDays.length === 0) {
    return (
      <>
        <MoneyContainer />
        <View style={styles.noTransactionContainer}>
          <Text style={styles.text}>You have no transactions yet.</Text>
          <AddTransactionBtn onPress={pressHandler} />
        </View>
      </>
    );
  }

  const renderTransactions = (transactions) => {
    return transactions.map((transaction) => {
      return (
        <NewTransaction
          id={transaction.id}
          key={transaction.id}
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
        <TransactionHeader
          date={itemData.item.date}
          fullDate={itemData.item.fullDate}
        />
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
      <AddTransactionBtn onPress={pressHandler} />
    </>
  );
}

const styles = StyleSheet.create({
  noTransactionContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  text: {
    color: "white",
  },
  dayContainer: {
    backgroundColor: Colors.primaryBlue,
    width: "100%",
    marginBottom: 12,
  },

});
