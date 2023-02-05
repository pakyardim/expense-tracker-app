import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'

export default function CategoryInput() {
    function handlePress() {
        console.log("press handled")
      }
      return (
        <Pressable onPress={handlePress}>
          <Text>CategoriesContainer</Text>
        </Pressable>
      );
}

const styles = StyleSheet.create({})