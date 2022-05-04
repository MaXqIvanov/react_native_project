import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, Alert,Image } from 'react-native';

export default function App() {
  const handleOnButton = (props:any)=>{
    Alert.alert('Choise anything', 'anyMessage?', [
      {text:'yes',onPress:()=>console.log("heu")
      },
      {text:'close'}
    ])
  }
  return (
    <View style={s.container}>
      <View style={s.container_wrap}>
        <Text style={s.text}>Open up App.tsx to start working on your app!</Text>
        <StatusBar style="auto" />
        <View style={s.mainButton}>
            <Button  onPress={()=> handleOnButton("hello")} title={'put on me'} />
        </View>
        
      </View>
    </View>
  );
}

const s = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(26,34,43)',
  },
  container_wrap:{
    paddingTop: 25,
    height: 100+'%',
    width: 100+'%',
  },
  text:{
    width: 100+'%',
    color: 'white',
    textAlign: 'center'
  },
  mainButton:{
      flex: 1,
      justifyContent: 'flex-end',
      width: 100+'%',
  }
});
