
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import List from '../components/List'
import { Octicons } from '@expo/vector-icons'; 

type Octicons = React.ComponentProps<typeof Octicons>['name'];
const iconName: Octicons =  'history'


export default function MainPages({navigation}:any) {
  const loadScene = ()=>{
    navigation.navigate('CompleteTask')
  }
  return (
    <View style={styles.MainPages}>
        <Header />
        <List />
        <View style={styles.buttonBasket}>
          <Octicons onPress={()=>loadScene()} name="history" size={24} color="black" />
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  buttonBasket:{
    marginBottom: 2,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center'
  },
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