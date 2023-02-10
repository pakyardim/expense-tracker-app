import { StyleSheet, Text, Pressable, View } from "react-native";
import DeleteModal from "./ui/DeleteModal";
import { useContext, useState } from "react";
import Colors from "../constants/colors";
import { SingleTransactionContext } from "../context/singleTransactionContext";

export default function NewTransaction({
  id,
  category,
  note,
  amount,
  isExpense,
}) {
  const [modalVisible, setModalVisible] = useState(false);
  const { deleteTransaction } = useContext(SingleTransactionContext);
  
  function handleDelete() {
    deleteTransaction(id);
    closeModal();
  }

  function openModal() {
    setModalVisible(true);
  }

  function closeModal() {
    setModalVisible(false);
  }

  function handleLongPress() {
    openModal();
  }
  return (
    <>
      <Pressable
        android_ripple={{ color: Colors.borderBlue }}
        style={styles.detailContainer}
        onLongPress={handleLongPress}
      >
        <Text style={styles.category}>{category}</Text>
        <Text style={styles.detailTitle}>{note}</Text>
        <Text
          style={
            isExpense ? styles.expenseTransaction : styles.incomeTransaction
          }
        >
          ₺ {amount}
        </Text>
      </Pressable>
      <DeleteModal
        handleDelete={handleDelete}
        modalVisible={modalVisible}
        closeModal={closeModal}
      />
    </>
  );
}

const styles = StyleSheet.create({
  detailContainer: {
    height: 50,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
  },
  category: {
    flex: 2,
    color: "gray",
  },
  detailTitle: {
    flex: 3,
    color: "white",
  },
  expenseTransaction: {
    flex: 1,
    color: Colors.expenseRed,
    textAlign: "right",
  },
  incomeTransaction: {
    flex: 1,
    color: Colors.incomeBlue,
    textAlign: "right",
  },
});
