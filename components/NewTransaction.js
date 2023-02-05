import { StyleSheet, Text, TextBase, View } from 'react-native'
import React from 'react'

export default function NewTransaction({category, note, price, isExpense}) {
  return (
    <View style={styles.detailContainer}>
        <Text style={styles.category}>{category}</Text>
        <Text style={styles.detailTitle}>{note}</Text>
        <Text style={styles.transaction}>₺ {price}</Text>
      </View>
  )
}

const styles = StyleSheet.create({
    detailContainer: {
        height: 50,
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 16,
    },
    category: {
        flex: 2,
        color: "gray",
    },
    detailTitle: {
        flex: 3,
        color: "white",
    },
    transaction: {
        flex: 1,
        color: "red",
        textAlign: "right"
    }
})