import { StyleSheet, Text, View } from "react-native";
import Colors from "../../constants/colors";

export default function ErrorMsg({ children }) {
  return (
    <View style={styles.outerContainer}>
      <View style={styles.container}>
        <Text style={styles.text}>{children}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    opacity: 0.7,

    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.4,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",

  },
  container: {
    borderRadius: 8,
    padding: 8,
    width: "60%",
    maxWidth: 264,
    marginTop: 72,
    backgroundColor: Colors.buttonColor,
    borderWidth: 1,
    borderColor: Colors.primaryBlue,
    justifyContent: "center",
    alignItems: "center",
  },
  text:{
    color: "white"
  }
});
