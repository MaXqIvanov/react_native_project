
import { TouchableHighlight , FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import AsyncStorage  from '@react-native-async-storage/async-storage'
import { AntDesign } from '@expo/vector-icons'; 

export default function Contacts() {
  const [contactsData, setContactsData] = useState<any[]>([])
  
  
  const retrieveData = async () => {
    try {
      const value:any = await AsyncStorage.getItem('deleteElems');
      
      if (value !== null) {
        // We have data!!
        setContactsData(JSON.parse(value))
      }
    } catch (error) {
      // Error retrieving data
    }
  };
  useEffect(() => {
    retrieveData()
  }, [])

    const RemoveAll =  async()=>{
        try {
          await AsyncStorage.setItem(
            'deleteElems',
            JSON.stringify([])
          );
          setContactsData([])
        } catch (error) {
          // Error saving data
          console.log("this is problem " + error); 
        }
      };
    
    
  
  return (
    
    <View style={styles.main_block_contacts}>   
      {contactsData.length > 0? 
      <FlatList style={styles.main_block_contacts} data={contactsData} renderItem={({item})=><View style={styles.block_main_text}><Text style={styles.textColor}>{item.text}</Text><AntDesign name="check" size={24} color="green" /></View>}/>
        :<Text style={styles.textColorEmpty}>Ваш список выполненных задач пуст</Text>
    }
      <View style={styles.button_bottom}><TouchableHighlight onPress={()=> RemoveAll()} ><Text style={styles.textColorRemove}>Очистить историю</Text></TouchableHighlight></View>
    </View>
  
 
  )
}

const styles = StyleSheet.create({
  button_bottom:{
    marginBottom: 5,
  },
  block_main_text:{
    flexDirection: 'row'
  },
  main_block_contacts:{
    flex:1,
  },
 
  textColorEmpty:{
    color: 'white',
    textAlign: 'center',
    height: '90%',
    textAlignVertical: 'center'
  },
  textColor:{
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
    backgroundColor: 'black',
    width: '90%',
  },
  textColorRemove:{
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
    backgroundColor: 'black',
    width: '100%',
  },
})