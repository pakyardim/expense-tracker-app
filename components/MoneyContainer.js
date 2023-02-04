import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function MoneyContainer() {
  return (
    <View style={styles.calculationContainer}>
      <View style={styles.moneyColumn}>
        <Text style={styles.text}>Income</Text>
        <Text style={styles.incomeAmount}>3,684.00</Text>
      </View>

      <View style={styles.moneyColumn}>
        <Text style={styles.text}>Expenses</Text>
        <Text style={styles.expenseAmount}>3,684.00</Text>
      </View>

      <View style={styles.moneyColumn}>
        <Text style={styles.text}>Total</Text>
        <Text style={styles.text}>3,684.00</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: "white",
  },
  incomeAmount: {
    color: "#ADD8E6",
  },
  expenseAmount: {
    color: "red",
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
