import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import MoneyContainer from "./components/MoneyContainer";
import TransactionDay from "./components/TransactionDay";

export default function App() {
  return (
    <View style={styles.rootContainer}>
      <MoneyContainer />
      <TransactionDay dateDay="19" dayName="Thu" monthYear="02.23"/>
      <TransactionDay dateDay="16" dayName="Mon" monthYear="02.23"/>
      <StatusBar style="light" />
    </View>
  );
  
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: "#152238",
    alignItems: "center",
  },
  
  
});
