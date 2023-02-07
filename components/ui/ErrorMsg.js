import { useEffect, useRef, useState } from "react";
import { StyleSheet, Text, View, Animated } from "react-native";
import Colors from "../../constants/colors";

export default function ErrorMsg({ isVisible, children }) {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (isVisible) {
      Animated.timing(fadeAnim, {
        toValue: 0.7,
        duration: 1000,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
      }).start();
    }
  }, [isVisible, fadeAnim]);

  return (
    <Animated.View style={[styles.outerContainer, { opacity: fadeAnim }]}>
      <View style={styles.container}>
        <Text style={styles.text}>{children}</Text>
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    position: "absolute",
    bottom: 100,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",

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
    backgroundColor: Colors.buttonColor,
    borderWidth: 1,
    borderColor: Colors.primaryBlue,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "white",
  },
});
