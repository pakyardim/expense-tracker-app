import { StyleSheet, Text, Button, View } from "react-native";
import { useLayoutEffect, useState } from "react";

export default function AddTransactionScreen({ navigation }) {
  const [title, setTitle] = useState("");

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Expense",
    });
  }, [navigation]);

  return (
    <View>
        
      <Text>AddTransactionScreen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    
});
