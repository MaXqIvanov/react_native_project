
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native'
import React from 'react'

export default function ListItems(props:any) {

    console.log('====================================');
    console.log(props.elem.text);
    console.log('====================================');
  return (
  
    <TouchableHighlight style={styles.main_listItems}>
        <Text style={styles.listItemsText}>{props.elem.text}</Text>  
          
    </TouchableHighlight>
   
  )
}

const styles = StyleSheet.create({
    main_listItems:{
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