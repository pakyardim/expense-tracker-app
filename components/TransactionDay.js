import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Colors from "../constants/colors";
import NewTransaction from "./NewTransaction";


export default function TransactionDay({dateDay, dayName, monthYear, price, isExpense}) {
  const [transactions, setTransactions] = useState([]);

  
  return (
    <View style={styles.dayContainer}>
      <View style={styles.overviewContainer}>
        <View style={styles.dateContainer}>
          <Text style={styles.dateDay}>{dateDay}</Text>
            <Text style={styles.dayName}>{dayName}</Text>
          <Text style={styles.dateMonthYear}>{monthYear}</Text>
        </View>
        <View style={styles.transactions}>
          <Text style={styles.incomeText}>₺ 0.00</Text>
          <Text style={styles.expenseText}>₺ 31.23</Text>
        </View>
      </View>
      <NewTransaction category="Entertainment" note="spotify" price="15.75" isExpense={true}/>
      <NewTransaction category="Food" note="pide" price="45.99" isExpense={true}/>
      <NewTransaction category="Transportation" note="bursa-istanbul bilet" price="650" isExpense={false}/>

    </View>
  );
}

const styles = StyleSheet.create({
  dayContainer: {
    backgroundColor: Colors.primaryBlue,
    width: "100%",
    marginBottom: 12
  },
  overviewContainer: {
    borderBottomColor: Colors.borderBlue,
    borderWidth: 1,
    height: 50,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  dateContainer: {
    flexDirection: "row",
    marginLeft: 16,
    justifyContent: "flex-start",
    alignItems: "center",
    flex: 1
  },
  dateDay: {
    fontWeight: "bold",
    color: "white",
    fontSize: 22,
    marginRight: 8,
  },
  dayName: {
    backgroundColor: "gray",
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 8,
    color: "white",
    marginRight: 8
  },
  dateMonthYear: {
    color: "gray",
  },
  transactions: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    flex: 1
  },
  incomeText: {
    color: Colors.incomeBlue,
    marginLeft: 16
  },
  expenseText: {
    color: Colors.expenseRed
  }
});
