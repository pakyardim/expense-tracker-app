import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
import Colors from "../../constants/colors";

export default function Category({ title, onPress }) {
  return (
    <View style={styles.gridItem}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
        onPress={onPress}
      >
          <Text style={styles.title}>{title}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  gridItem: {
    width: "33.3%",
    height: 60,
    backgroundColor: Colors.primaryBlue,
    borderWidth: 1,
    borderColor: "black",

    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.4,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  button: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  buttonPressed: {
    opacity: 0.5,
  },
  title: {
    fontWeight: "bold",
    fontSize: 12,
    color: "white"
  },
});
