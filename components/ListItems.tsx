
import { StyleSheet, Text, View, TouchableHighlight, Image } from 'react-native'
import React from 'react'

export default function ListItems(props:any) {
    const deleteTask = ()=>{
      props.setList(props.list.filter((elem:any)=> elem.index != props.elem.index))
    }
  return (
    <View style={styles.main_block_ListItems}> 
        <TouchableHighlight style={styles.main_listItems}>
            <Text style={styles.listItemsText}>{props.elem.text}</Text>  
        
        </TouchableHighlight>
        <View onTouchStart={()=>deleteTask()} style={styles.view_DeleteMessage}>
           <Image  style={styles.deleteMessage} source={require('../assets/close.png')} />
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
        backgroundColor: "#cedbda",
        padding: 7
    },
    listItemsText:{
        color:'#707373',
        fontSize: 20,
        textAlign:'center',
    }
})