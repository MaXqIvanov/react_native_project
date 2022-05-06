
import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import ListItems from './ListItems'
import Form from './Form'
import AsyncStorage  from '@react-native-async-storage/async-storage'

export default function List() {
    const [list, setList] = useState<any[]>([])
    
    useEffect(() => {

        const storeData = async () => {
            try {
              await AsyncStorage.setItem(
                'data1',
                JSON.stringify(list)
              );
            } catch (error) {
              // Error saving data
              console.log("this is problem " + error); 
            }
          };
          storeData()
    
    }, [list])
    
  return (
    <View style={styles.main_div_List}>
        <View style={styles.main_div_List_wrapper}>
            <Text style={styles.title_todo}>Список дел</Text>
           {list.length > 0 ? <FlatList style={styles.group_elems} data={list} renderItem={({item})=>(
                    <ListItems list={list} setList={setList} key={item.index} elem={item}/>
                )}/>
            : <View style={styles.list_task_empty}><Text>Ваш список задач пуст</Text></View>
            }
            <Form list={list} setList={setList}/>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    list_task_empty:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    group_elems:{
      
    },
     main_div_List:{
        flex:1,
        backgroundColor: 'white',
        alignItems:'center',
    },
    main_div_List_wrapper:{
        height:"100%",
        width: "90%",
    },
    title_todo:{
        width: '100%',
        textAlign:'center',
        fontSize: 25,
    },
})