import { Button, StyleSheet, Text, View } from "react-native";
import MoneyContainer from "../components/MoneyContainer";
import TransactionDay from "../components/TransactionDay";

export default function TransactionScreen({navigation}) {
  function pressHandler() {
    navigation.navigate("AddTransactionScreen");
  }
  return (
    <>
      <MoneyContainer />
      <TransactionDay dateDay="19" dayName="Thu" monthYear="02.23" />
      <TransactionDay dateDay="16" dayName="Mon" monthYear="02.23" />
      <Button title="+" onPress={pressHandler}/>
    </>
  );
}

