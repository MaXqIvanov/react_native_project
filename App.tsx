import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, Alert,Image } from 'react-native';
import MainPages from './pages/MainPages';

export default function App() {
  
  return (
    <View style={s.container}>
      <View style={s.container_wrap}>
        <MainPages />
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
