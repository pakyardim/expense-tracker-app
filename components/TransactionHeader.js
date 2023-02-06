import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Colors from "../constants/colors";
import { getDayAbbr } from "../functions/dateFormatter";
import NewTransaction from "./NewTransaction";
import { useContext } from "react";

export default function TransactionHeader({ date }) {
  let dayName = getDayAbbr(date);
  let mm = date.getMonth() + 1;
  let dd = date.getDate();
  let yyyy = date.getFullYear();

  if (dd < 10) dd = "0" + dd;
  if (mm < 10) mm = "0" + mm;

  const monthYear = `${mm}.${yyyy}`;

  

  return (
    <>
      <View style={styles.overviewContainer}>
        <View style={styles.dateContainer}>
          <Text style={styles.dateDay}>{dd}</Text>
          <Text style={styles.dayName}>{dayName}</Text>
          <Text style={styles.dateMonthYear}>{monthYear}</Text>
        </View>
        <View style={styles.transactions}>
          <Text style={styles.incomeText}>₺ 0.00</Text>
          <Text style={styles.expenseText}>₺ 31.23</Text>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
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
    flex: 1,
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
    marginRight: 8,
  },
  dateMonthYear: {
    color: "gray",
  },
  transactions: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    flex: 1,
  },
  incomeText: {
    color: Colors.incomeBlue,
    marginLeft: 16,
  },
  expenseText: {
    color: Colors.expenseRed,
  },
});
