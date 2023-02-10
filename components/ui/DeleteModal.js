import { StyleSheet, Text, View, Modal, Pressable } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import Colors from "../../constants/colors";

export default function DeleteModal({ modalVisible, closeModal, handleDelete }) {
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.title}>Delete the transaction?</Text>
            <View style={styles.buttons}>
              <Pressable onPress={closeModal} style={styles.button}>
                <Text style={styles.textStyle}>Cancel</Text>
              </Pressable>
              <Pressable onPress={handleDelete} style={styles.button}>
                <Ionicons name="trash-outline" size={24} color="white" />
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    height: 126,
    width: 200,
    backgroundColor: Colors.primaryRed,
    borderRadius: 8,
    padding: 20,
    alignItems: "center",
    justifyContent: "space-between",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  title: {
    color: Colors.incomeBlue,
    fontSize: 12,
    fontWeight: "bold",
    textTransform: "uppercase"
  },
  buttons: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
  },
  button: {
    justifyContent: "center",
  }
});
