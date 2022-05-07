
import { StyleSheet, Text, View, TouchableHighlight, Image } from 'react-native'
import React from 'react'
import { EvilIcons } from '@expo/vector-icons'; 

export default function ListItems(props:any) {
    const deleteTask = ()=>{
      props.setList(props.list.filter((elem:any)=> elem.key !== props.elem.key))
    }
  return (
    <View style={styles.main_block_ListItems}> 
        <TouchableHighlight style={styles.main_listItems}>
            <Text style={styles.listItemsText}>{props.elem.text}</Text>  
        
        </TouchableHighlight>
        <View onTouchStart={()=>deleteTask()} style={styles.view_DeleteMessage}>
         <EvilIcons name="close" size={30} color="white" />
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    view_DeleteMessage:{
        flex:1,
        justifyContent: 'center',
    },
    deleteMessage:{
        width:30,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    main_block_ListItems:{
        width:'100%',
        display: 'flex',
        flexDirection: 'row',
    },
    main_listItems:{
        width:'90%',
        borderWidth: 1,
        borderColor: 'gray',
        marginTop: 20,
        borderRadius: 5,
        backgroundColor: "white",
        padding: 7,
    },
    listItemsText:{
        color:'black',
        fontSize: 20,
        textAlign:'center',
    }
})