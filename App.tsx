// tsx - typescript file extension
// we import components from modules
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

// we need to define a default component
// components can be defined in two ways:
// 1. function
// 2. class

// instantiable
// reusable
// basic building block of any react native ui
// all UIs are made of components
// all components are made of simpler components

export default function App() {
  
  // when we define a component through a 
  // function we need to return a UI as a result 
  return (

    // JSX - javascript xml
    // syntaxis similar to xml / html
    // used to define UI 
    // (at the end its just another way to declare objects)
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
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
