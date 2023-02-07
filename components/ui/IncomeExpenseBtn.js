import { StyleSheet, Text, View, Pressable } from "react-native";
import Colors from "../../constants/colors";

export default function IncomeExpenseBtn({
  color,
  selected,
  children,
  onPress,
}) {
  return (
    <View
      style={[
        styles.buttonOutline,
        { borderColor: selected ? color : Colors.buttonColor },
      ]}
    >
      <Pressable style={styles.button} onPress={onPress}>
        <Text
          style={[
            styles.buttonText,
            { color: selected ? color : Colors.buttonText },
          ]}
        >
          {children}
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonOutline: {
    borderRadius: 8,
    borderWidth: 1,
    borderColor: Colors.buttonColor,
    overflow: "hidden",
  },
  button: {
    width: 112,
    justifyContent: "center",
    alignItems: "center",
    height: 32,
    backgroundColor: Colors.buttonColor,
  },
  buttonText: {
    color: Colors.buttonText,
  },
});
