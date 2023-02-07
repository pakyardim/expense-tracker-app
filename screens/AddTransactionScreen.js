import {
  StyleSheet,
  Text,
  Button,
  View,
  TextInput,
  Pressable,
} from "react-native";
import { useLayoutEffect, useState, useContext } from "react";
import dateFormatter from "../functions/dateFormatter";
import CategoriesModal from "../components/categories/CategoriesModal";
import { SingleTransactionContext } from "../context/singleTransactionContext";
import { intFormatter } from "../functions/dateFormatter";
import IncomeExpenseBtn from "../components/ui/IncomeExpenseBtn";
import Colors from "../constants/colors";

export default function AddTransactionScreen({ navigation }) {
  const [visible, setVisible] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [selectedButton, setSelectedButton] = useState("Expense");

  const {
    category,
    amount,
    isExpense,
    note,
    changeNote,
    changeAmount,
    setExpense,
    setIncome,
    updateTransactionHistory,
  } = useContext(SingleTransactionContext);

  // const [selectedOptions, setSelectedOptions] = useState([
  //   { id: 0, value: null },
  //   { id: 1, value: null },
  // ]);

  const today = new Date();
  const formattedToday = dateFormatter(today);
  const intFormattedToday = intFormatter(today);

  function openModal() {
    setVisible(true);
  }

  function closeModal() {
    setVisible(false);
  }

  function handleAmountChange(amount) {
    changeAmount(amount);
  }

  function handleNoteChange(note) {
    changeNote(note);
  }

  function handlePress() {
    updateTransactionHistory(
      today,
      intFormattedToday,
      amount,
      isExpense,
      category,
      note
    );
    navigation.goBack();
  }

  function handleChangePress(title) {
    if (title === "Income") {
      setIncome();
      setSelectedButton(title);
      return;
    }
    setExpense();
    setSelectedButton(title);
  }

  function handleFocus() {
    setIsFocused(true);
  }

  function handleBlur() {
    setIsFocused(false);
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isExpense ? "Expense" : "Income",
    });
  }, [isExpense]);

  return (
    <View style={styles.rootContainer}>
      <View style={styles.buttonContainer}>
        <IncomeExpenseBtn
          color={Colors.incomeBlue}
          selected={selectedButton === "Income"}
          onPress={() => handleChangePress("Income")}
        >
          Income
        </IncomeExpenseBtn>
        <IncomeExpenseBtn
          color={Colors.expenseRed}
          selected={selectedButton === "Expense"}
          onPress={() => handleChangePress("Expense")}
        >
          Expense
        </IncomeExpenseBtn>
      </View>
      <View style={styles.inputContainer}>
        <View style={styles.inputColumn}>
          <Text style={styles.label}>Date</Text>
          <Text style={styles.inputText}>{formattedToday}</Text>
        </View>
        <View style={styles.inputColumn}>
          <Text style={styles.label}>Category</Text>
          <Pressable
            onFocus={handleFocus}
            onBlur={handleBlur}
            style={[
              styles.pressable,
              isFocused
                ? isExpense
                  ? styles.focusedExpenseInput
                  : styles.focusedIncomeInput
                : null,
            ]}
            onPress={openModal}
          >
            <Text style={styles.categoryText}>{category}</Text>
          </Pressable>
        </View>
        <View style={styles.inputColumn}>
          <Text style={styles.label}>Amount</Text>
          <TextInput
            onBlur={handleBlur}
            onFocus={handleFocus}
            style={[
              styles.inputText,
              isFocused
                ? isExpense
                  ? styles.focusedExpenseInput
                  : styles.focusedIncomeInput
                : null,
            ]}
            onChangeText={handleAmountChange}
            keyboardType="numeric"
          />
        </View>
        <View style={styles.inputColumn}>
          <Text style={styles.label}>Note</Text>
          <TextInput
            onBlur={handleBlur}
            onFocus={handleFocus}
            style={[
              styles.inputText,
              isFocused
                ? isExpense
                  ? styles.focusedExpenseInput
                  : styles.focusedIncomeInput
                : null,
            ]}
            onChangeText={handleNoteChange}
          />
        </View>
      </View>
      <View style={styles.addBtnContainer}>
        <Pressable
          style={[
            styles.addBtn,
            {
              backgroundColor: isExpense
                ? Colors.primaryRed
                : Colors.incomeBlue,
            },
          ]}
          onPress={handlePress}
        >
          <Text style={{color: isExpense ? "white" : Colors.borderBlue}}>Save</Text>
        </Pressable>
      </View>
      {visible && (
        <CategoriesModal
          visible={visible}
          openModal={openModal}
          closeModal={closeModal}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  inputContainer: {
    marginVertical: 32,
  },
  label: {
    color: "gray",
    flex: 1,
    fontSize: 16,
  },
  inputColumn: {
    padding: 8,
    flexDirection: "row",
    alignItems: "center",
    height: 68,
  },
  inputText: {
    color: "white",
    flex: 4,
    borderBottomWidth: 1,
    borderBottomColor: "gray",
    margin: 12,
    height: 28,
  },
  pressable: {
    flex: 4,
    borderBottomWidth: 1,
    borderBottomColor: "gray",
    margin: 12,
    height: 24,
  },
  redPressable: {
    borderBottomColor: Colors.expenseRed,
  },
  bluePressable: {
    borderBottomColor: "blue",
  },
  categoryText: {
    color: "white",
  },
  focusedExpenseInput: {
    borderBottomColor: Colors.expenseRed,
  },
  focusedIncomeInput: {
    borderBottomColor: Colors.incomeBlue,
  },
  addBtnContainer: {
    width: "100%",
    alignItems: "center",
  },
  addBtn: {
    justifyContent: "center",
    alignItems: "center",
    width: "70%",
    maxWidth: 264,
    borderRadius: 12,
    height: 48,
    backgroundColor: Colors.primaryRed,
  },
});
