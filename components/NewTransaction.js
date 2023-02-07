import { StyleSheet, Text, TextBase, View } from 'react-native'
import React from 'react'
import Colors from '../constants/colors'

export default function NewTransaction({category, note, amount, isExpense}) {
  return (
    <View style={styles.detailContainer}>
        <Text style={styles.category}>{category}</Text>
        <Text style={styles.detailTitle}>{note}</Text>
        <Text style={isExpense ? styles.expenseTransaction : styles.incomeTransaction}>₺ {amount}</Text>
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
    expenseTransaction: {
        flex: 1,
        color: Colors.expenseRed,
        textAlign: "right"
    },
    incomeTransaction: {
        flex: 1,
        color: Colors.incomeBlue,
        textAlign: "right"
    }
})