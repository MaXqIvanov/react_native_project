
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import List from '../components/List'

export default function MainPages({navigation}:any) {
  const loadScene = ()=>{
    navigation.navigate('Contact')
  }
  return (
    <View style={styles.MainPages}>
        <Header />
        <List />
        <View onTouchStart={()=>loadScene()} style={styles.buttonRigth}></View>
        <View onTouchStart={()=>loadScene()} style={styles.buttonLeft}></View>
    </View>
  )
}

const styles = StyleSheet.create({
  buttonLeft:{
    position:'absolute',
    top: 0,
    left:0,
    height: '100%',
    width: 25,
    zIndex: 1,
  },
  buttonRigth:{
      position:'absolute',
      top: 0,
      right:0,
      height: '100%',
      width: 25,
      zIndex: 1,
    },
    MainPages:{
        flex: 1,
    }
})