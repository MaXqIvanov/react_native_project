
import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import AsyncStorage  from '@react-native-async-storage/async-storage'

export default function Contacts() {
  const [contactsData, setContactsData] = useState<any>()
  useEffect(() => {
    const retrieveData = async () => {
      try {
        const value = await AsyncStorage.getItem('data1');
        if (value !== null) {
          // We have data!!
          setContactsData(JSON.parse(value))
        }
      } catch (error) {
        // Error retrieving data
      }
    };
    retrieveData()
  }, [])
  

  return (
    <View>   
      <FlatList data={contactsData} renderItem={({item})=>(<Text>{item.text}</Text>)}/>
    </View>
  )
}

const styles = StyleSheet.create({})