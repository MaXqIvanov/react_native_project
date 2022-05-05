
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'

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
      <Button color={"black"} onPress={()=>addElem()} title='Добавить' />
    </View>
  )
}

const styles = StyleSheet.create({
    TextInputAdd:{
        padding: 5,
    },
    text_footer_form:{
        textAlign:'center',
    },
    form_view:{
        borderWidth: 1,
        marginBottom: 5,
    }
})