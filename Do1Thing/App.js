import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react'
import { StyleSheet, Text, View, Button} from 'react-native';

export default function App() {


  return (
    <View style={styles.container}>
      <Text>A quick demo for Firebase Analytics!</Text>
      <Button title='Press me to trigger PressEvent1'></Button>
      <Button title='Press me to trigger PressEvent2'></Button>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
