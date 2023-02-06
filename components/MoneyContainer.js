import { StyleSheet, Text, View } from "react-native";
import { useContext } from "react";
import Colors from "../constants/colors";
import { SingleTransactionContext } from "../context/singleTransactionContext";

export default function MoneyContainer() {
  const totalAmounts = useContext(SingleTransactionContext).totalTransactionAmounts();
  const incomeAmount = totalAmounts.incomeAmount;
  const expenseAmount = totalAmounts.expenseAmount;
  const totalAmount = totalAmounts.total;

  return (
    <View style={styles.calculationContainer}>
      <View style={styles.moneyColumn}>
        <Text style={styles.text}>Income</Text>
        <Text style={styles.incomeAmount}>{incomeAmount}</Text>
      </View>

      <View style={styles.moneyColumn}>
        <Text style={styles.text}>Expenses</Text>
        <Text style={styles.expenseAmount}>{expenseAmount}</Text>
      </View>

      <View style={styles.moneyColumn}>
        <Text style={styles.text}>Total</Text>
        <Text style={styles.text}>{totalAmount}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: "white",
    textAlign: "center"
  },
  incomeAmount: {
    color: Colors.incomeBlue,
    textAlign: "center"
  },
  expenseAmount: {
    color: Colors.expenseRed,
    textAlign: "center"
  },
  calculationContainer: {
    width: "100%",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    justifyContent: "space-around",
    flexDirection: "row",
    marginTop: 50,
    padding: 8,
  },
});
