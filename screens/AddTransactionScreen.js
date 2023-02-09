import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  Keyboard,
} from "react-native";
import {
  useLayoutEffect,
  useState,
  useContext,
  useRef,
  useEffect,
} from "react";
import dateFormatter from "../functions/dateFormatter";
import CategoriesModal from "../components/categories/CategoriesModal";
import { SingleTransactionContext } from "../context/singleTransactionContext";
import { intFormatter } from "../functions/dateFormatter";
import IncomeExpenseBtn from "../components/ui/IncomeExpenseBtn";
import Colors from "../constants/colors";
import ErrorMsg from "../components/ui/ErrorMsg";
import DateTimePicker from "react-native-modal-datetime-picker";

export default function AddTransactionScreen({ navigation }) {
  const [today, setToday] = useState(new Date());
  const inputRefs = useRef([null, null, null]);

  const [visible, setVisible] = useState(true);
  const [dateModalVisible, setDateModalVisible] = useState(false);

  const [focused, setFocused] = useState([
    { id: 1, value: false },
    { id: 2, value: false },
  ]);

  const [selectedButton, setSelectedButton] = useState("Expense");
  const [showErrorMsg, setShowErrorMsg] = useState(false);
  const [formattedToday, setFormattedToday] = useState(dateFormatter(today));
  const [intFormattedToday, setIntFormattedToday] = useState(
    intFormatter(today)
  );

  const {
    category,
    amount,
    isExpense,
    note,
    changeNote,
    changeDate,
    changeAmount,
    changeCategory,
    setExpense,
    setIncome,
    updateTransactionHistory,
  } = useContext(SingleTransactionContext);

  function openModal() {
    Keyboard.dismiss();
    setVisible(true);
  }

  function closeModal() {
    handleSubmit(0);
    setTimeout(() => {
      setVisible(false);
    }, 200);
  }

  function handleAmountChange(amount) {
    changeAmount(amount);
  }

  function handleNoteChange(note) {
    changeNote(note);
  }

  function handlePress() {
    if (amount === NaN || amount === 0 || category === "" || note === "") {
      setShowErrorMsg(true);
      setTimeout(() => {
        setShowErrorMsg(false);
      }, 3000);
      return;
    }

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
      if (isExpense) {
        setIncome();
        setSelectedButton(title);
        changeCategory("");
        openModal();
      }
    } else if (title === "Expense") {
      if (!isExpense) {
        setExpense();
        setSelectedButton(title);
        changeCategory("");
        openModal();
      }
    }
  }

  const handleFocus = (refNum) => {
    closeModal();

    setFocused(
      focused.map((item) => {
        if (item.id == refNum) {
          return { id: item.id, value: true };
        }
        return { id: item.id, value: false };
      })
    );
  };

  function hideDatePicker() {
    setDateModalVisible(false);
  }

  function handleConfirm(date) {
    hideDatePicker();
    changeDate(date);
    setToday(date);

    setFormattedToday(dateFormatter(date));
    setIntFormattedToday(intFormatter(date));
  }

  function handleBlur(refNum) {
    setFocused(
      focused.map((item) => {
        if (item.id == refNum) {
          return { id: item.id, value: false };
        }
        return { id: item.id, value: false };
      })
    );
  }

  function handleSubmit(index) {
    if (
      (index === 0 && amount !== 0) ||
      (index === 1 && note !== "") ||
      index === 2
    ) {
      return;
    }
    inputRefs.current[index + 1].focus();
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
          <View style={styles.dateInput}>
            <Pressable onPress={() => setDateModalVisible(true)}>
              <Text style={styles.dateText}>{formattedToday}</Text>
            </Pressable>
          </View>
        </View>
        <View style={styles.inputColumn}>
          <Text style={styles.label}>Category</Text>
          <Pressable
            ref={(ref) => {
              inputRefs.current[0] = ref;
            }}
            style={[
              styles.pressable,
              visible
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
            ref={(ref) => {
              inputRefs.current[1] = ref;
            }}
            onSubmitEditing={() => handleSubmit(1)}
            cursorColor={isExpense ? Colors.expenseRed : Colors.incomeBlue}
            onBlur={() => handleBlur(1)}
            onFocus={() => handleFocus(1)}
            style={[
              styles.inputText,
              focused[0].value
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
            ref={(ref) => {
              inputRefs.current[2] = ref;
            }}
            onSubmitEditing={() => handleSubmit(2)}
            cursorColor={isExpense ? Colors.expenseRed : Colors.incomeBlue}
            onBlur={() => handleBlur(2)}
            onFocus={() => handleFocus(2)}
            style={[
              styles.inputText,
              focused[1].value
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
          <Text style={{ color: isExpense ? "white" : Colors.borderBlue }}>
            Save
          </Text>
        </Pressable>
      </View>
      <ErrorMsg isVisible={showErrorMsg}>Please fill all the inputs</ErrorMsg>
      {visible && (
        <CategoriesModal
          visible={visible}
          openModal={openModal}
          closeModal={closeModal}
        />
      )}
      <DateTimePicker
        isVisible={dateModalVisible}
        mode="datetime"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
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
  dateText: {
    color: "white",
  },
  dateInput: {
    flex: 4,
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 12,
    height: 28,
    borderBottomWidth: 1,
    borderBottomColor: "gray",
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
    borderWidth: 1,
    borderColor: Colors.primaryBlue,

    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.4,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
});
