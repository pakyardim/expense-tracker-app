import { StyleSheet, Text, View, Pressable } from "react-native";
import Colors from "../../constants/colors";
import { Ionicons } from "@expo/vector-icons";

export default function AddTransactionBtn({ onPress }) {
  return (
    <View style={styles.buttonOutline}>
      <Pressable onPress={onPress} style={styles.addBtn}>
        <Ionicons name='add' size={24} color="white" />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonOutline: {
    borderRadius: 40,
    borderWidth: 1,
    borderColor: Colors.buttonColor,
    overflow: "hidden",
    position: "absolute",
    right: 24,
    bottom: 48,
  },
  addBtn: {
    width: 64,
    justifyContent: "center",
    alignItems: "center",
    height: 64,
    backgroundColor: Colors.primaryRed,
  },
  buttonText: {
    color: "white",
  },
});
