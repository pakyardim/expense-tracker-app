import { StatusBar } from "expo-status-bar";
import TransactionScreen from "./screens/TransactionScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AddTransactionScreen from "./screens/AddTransactionScreen";
import Colors from "./constants/colors";
import SingleTransactionContextProvider from "./context/singleTransactionContext";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <SingleTransactionContextProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: Colors.secondaryBlue },
              headerTintColor: "white",
              contentStyle: { backgroundColor: Colors.secondaryBlue },
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
      </SingleTransactionContextProvider>
    </>
  );
}
