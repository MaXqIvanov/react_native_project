import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, Alert,Image } from 'react-native';
import MainPages from './pages/MainPages';
import MainStack from './navigate'

export default function App() {
  
  return (
    <View style={s.container}>
      <View style={s.container_wrap}>
        <MainStack />
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
});
