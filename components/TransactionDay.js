import { StyleSheet, Text, View } from "react-native";
import NewTransaction from "./NewTransaction";

export default function TransactionDay({dateDay, dayName, monthYear}) {
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
      <NewTransaction category="Entertainment" note="spotify" price="15.75"/>
      <NewTransaction category="Food" note="pide" price="45.99" />
      <NewTransaction category="Food" note="pide" price="45.99" />

    </View>
  );
}

const styles = StyleSheet.create({
  dayContainer: {
    backgroundColor: "#1b2942",
    width: "100%",
    marginBottom: 12
  },
  overviewContainer: {
    borderBottomColor: "#172133",
    backgroundColor: "#1b2942",
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
    color:"#ADD8E6",
    marginLeft: 16
  },
  expenseText: {
    color:"red"
  }
});
