import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Animated,
  Dimensions,
  Easing,
} from "react-native";
import { useContext, useEffect, useRef } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import Category from "./Category";
import {
  expenseCategories,
  incomeCategories,
} from "../../constants/categories";
import Colors from "../../constants/colors";
import { SingleTransactionContext } from "../../context/singleTransactionContext";

const { height } = Dimensions.get("window");

export default function CategoriesModal({ closeModal }) {
  const bottom = useRef(new Animated.Value(0)).current;
  const isExpense = useContext(SingleTransactionContext).isExpense;

  useEffect(() => {
    showModal();
  }, [bottom]);

  function showModal() {
    Animated.timing(bottom, {
      toValue: 1,
      duration: 200,
      easing: Easing.linear(),
      useNativeDriver: true,
    }).start();
  }

  function hideModal() {
    Animated.timing(bottom, {
      toValue: 0,
      duration: 200,
      easing: Easing.linear(),
      useNativeDriver: true,
    }).start();

    closeModal();
  }

  function renderCategories(itemData) {
    return <Category title={itemData.item.category} onPress={hideModal} />;
  }

  return (
    <Animated.View
      style={[
        styles.modalView,
        {
          transform: [
            {
              translateY: bottom.interpolate({
                inputRange: [0, 1],
                outputRange: [height, height / 2],
              }),
            },
          ],
        },
      ]}
    >
      <View style={styles.header}>
        <Text style={styles.catText}>Category</Text>
        <View style={styles.icons}>
          <Ionicons name="create-outline" size={24} color="white" />
          <Ionicons
            name="close-outline"
            size={24}
            color="white"
            onPress={hideModal}
          />
        </View>
      </View>
      <FlatList
        keyExtractor={(item) => item.id}
        style={styles.categoriesContainer}
        data={isExpense ? expenseCategories : incomeCategories}
        renderItem={renderCategories}
        numColumns={3}
      />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 12,
    backgroundColor: "black",
    alignItems: "center",
  },
  icons: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-between",
  },
  catText: {
    color: "white",
    fontSize: 16,
    flex: 4,
  },
  modalView: {
    backgroundColor: "lightgray",
    borderWidth: 1,
    backgroundColor: Colors.secondaryBlue,
    height: "50%",
    position: "absolute",
    width: "100%",
    zIndex: 1,
  },
  categoriesContainer: {
    flex: 1,
  },
});
