
import { Button, StyleSheet, Text, TextInput, TouchableHighlight, View } from 'react-native'
import React, { useState } from 'react'
import  Ionicons  from '@expo/vector-icons/Ionicons'; 

type Ionicons = React.ComponentProps<typeof Ionicons>['name'];
const iconName: Ionicons =  'add-circle-outline'

export default function Form(props:any) {
    const [text, setText] = useState<any>('')
    const onChange = (data:any)=>{
        setText(data)
    }
    const addElem = ()=>{
        if(text.length > 0 && text.length < 40){
            props.setList([...props.list,{text:`${text}`, key:(props.list.length+1)}])
        }else{
            alert("Текст, который вы вводите не должен быть пустым или содержать более 40 символов")
        }
     
    }

  return (
    <View style={styles.form_view}>
      <TextInput style={styles.TextInputAdd} placeholder='введите вашу задачу...' onChangeText={onChange}/>
      <View style={styles.ButtonAdd}>
         <Ionicons onPress={()=>addElem()} name="add-circle-outline" size={36} color="black" />
      </View>


    </View>
  )
}

const styles = StyleSheet.create({
    ButtonAdd:{
        width: '10%',
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },
    TextInputAdd:{
        padding: 5,
        width:'90%',
        borderBottomWidth: 2,
    },
    text_footer_form:{
        textAlign:'center',
    },
    form_view:{
        marginBottom: 5,
        flexDirection: 'row',
    }
})

