import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import TransactionScreen from "./screens/TransactionScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AddTransactionScreen from "./screens/AddTransactionScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: "#152238" },
            headerTintColor: "white",
            contentStyle: { backgroundColor: "#152238" },
          }}
        >
          <Stack.Screen
            name="TransactionScreen"
            component={TransactionScreen}
            options={{
              headerShown: false,
            }}
          />

          <Stack.Screen
            name="AddTransactionScreen"
            component={AddTransactionScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

