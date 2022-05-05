
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'


export default function Header() {
  return (
    <View style={styles.header_view}>
      <Text></Text>
    </View>
  )
}

const styles = StyleSheet.create({
    header_view:{
        backgroundColor:'white',
        height: 10,
        width: '100%',
        justifyContent: 'center',
        paddingLeft: 10,
    }
})