
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import List from '../components/List'

export default function MainPages() {
  return (
    <View style={styles.MainPages}>
        <Header />
        <List />
    </View>
  )
}

const styles = StyleSheet.create({
    MainPages:{
        flex: 1,
    }
})