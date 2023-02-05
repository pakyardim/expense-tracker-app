import { StyleSheet, Text, View, FlatList, Modal } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import Category from "./Category";
import categories from "../../constants/categories";
import Colors from "../../constants/colors";

export default function CategoriesModal({ visible, openModal, closeModal }) {

  function renderCategories(itemData){
    return( 
      <Category title={itemData.item.category} onPress={closeModal}/>
    )
  }
  
  return (
    <View style={styles.modalView}>
      <View style={styles.header}>
        <Text style={styles.catText}>Category</Text>
        <View style={styles.icons}>
          <Ionicons name="create-outline" size={24} color="white" />
          <Ionicons
            name="close-outline"
            size={24}
            color="white"
            onPress={closeModal}
          />
        </View>
      </View>
      <FlatList keyExtractor={(item) => item.id} style={styles.categoriesContainer} data={categories} renderItem={renderCategories} numColumns={3} />
    </View>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    borderWidth: 1,
    borderColor: "yellow",
    backgroundColor: "gray",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 12,
    backgroundColor: "black",
    alignItems: "center"
  },
  icons:{
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-between"
  },
  catText: {
    color: "white",
    fontSize: 16,
    flex: 4
  },
  modalView: {
    backgroundColor: "lightgray",
    borderWidth: 1,
    backgroundColor: Colors.secondaryBlue,
    height: "50%",
    position: "absolute",
    bottom: 0,
    width: "100%",
    zIndex: 1
  },
  categoriesContainer: {
    flex: 1,
  }
});
