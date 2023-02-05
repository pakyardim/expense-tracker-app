import {
  StyleSheet,
  Text,
  Button,
  View,
  TextInput,
  Pressable,
} from "react-native";
import { useLayoutEffect, useState } from "react";
import dateFormatter from "../functions/dateFormatter";
import CategoriesModal from "../components/categories/CategoriesModal";

export default function AddTransactionScreen({ navigation }) {
  const [visible, setVisible] = useState(false);

  const [selectedOptions, setSelectedOptions] = useState([
    { id: 0, value: null },
    { id: 1, value: null },
  ]);

  const today = new Date();
  const formattedToday = dateFormatter(today);

  function openModal() {
    setVisible(true);
  }

  function closeModal() {
    setVisible(false);
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Expense",
    });
  }, [navigation]);

  return (
    <View style={styles.rootContainer}>
      <View style={styles.buttonContainer}>
        <Button title="Income" />
        <Button title="Expense" />
      </View>
      <View style={styles.inputContainer}>
        <View style={styles.inputColumn}>
          <Text style={styles.label}>Date</Text>
          <Text style={styles.inputText}>{formattedToday}</Text>
        </View>
        <View style={styles.inputColumn}>
          <Text style={styles.label}>Category</Text>
          <Pressable style={styles.pressable} onPress={openModal} />
        </View>
        <View style={styles.inputColumn}>
          <Text style={styles.label}>Amount</Text>
          <TextInput style={styles.inputText} placeholder="sfdsdjg" />
        </View>
        <View style={styles.inputColumn}>
          <Text style={styles.label}>Note</Text>
          <TextInput style={styles.inputText} placeholder="sfdsdjg" />
        </View>
      </View>
      <Button title="save" />
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
    height: 28,
  },
  
});
