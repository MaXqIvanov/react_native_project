
import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import ListItems from './ListItems'

export default function List() {
    const [list, setList] = useState<any[]>([{text:'buy a car'},{text:'sell any'}])

  return (
    <View style={styles.main_div_List}>
        <View style={styles.main_div_List_wrapper}>
            <Text style={styles.title_todo}>Список дел</Text>
                <FlatList data={list} renderItem={({item})=>(
                    <ListItems elem={item}/>
                )}/>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    todo_elem:{
        borderWidth: 1,
        borderColor: 'orange',
    },
    main_div_List:{
        flex:1,
        backgroundColor: 'white',
        alignItems:'center'
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