// tsx - typescript file extension
// we import components from modules
import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View, Button } from 'react-native';
import { ClassExample } from './classes/ClassExample'; 
import DoggyTest, { DoggyRow } from './classes/DoggyComponent';
import RequestClass from './classes/RequestClass';
import RequestFunction from './classes/RequestFunction';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {

  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Main"
          component={Main}
        />
        <Stack.Screen 
          name="NavExample"
          component={NavExample}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// we need to define a default component
// components can be defined in two ways:
// 1. function
// 2. class

// instantiable
// reusable
// basic building block of any react native ui
// all UIs are made of components
// all components are made of simpler components

export function Main({navigation} : any) {
  
  // when we define a component through a 
  // function we need to return a UI as a result 
  return (

    // JSX - javascript xml
    // syntaxis similar to xml / html
    // used to define UI 
    // (at the end its just another way to declare objects)
    <View style={styles.container}>
      <ClassExample nombre="Memo" age="38" />
      <DoggyTest name="fido" age="5" />
      <FlatList 
        data={[
          {name: "doggy1", uri: "https://www.warrenphotographic.co.uk/photography/sqrs/42790.jpg"}
        ]}
        renderItem={({item}) => {
          return(
            <DoggyRow name={item.name} uri={item.uri} />
          );
        }}
      />
      <Button
        title="NAVIGATION"
        onPress= {() => {
          navigation.navigate("NavExample", {data: "SOME DATA FROM THE MAIN INTERFACE"});
        }} 
      />
      <RequestClass 
        uri="https://bitbucket.org/itesmguillermorivas/partial2/raw/45f22905941b70964102fce8caf882b51e988d23/carros.json" 
      /> 
      <RequestFunction 
        uri="https://bitbucket.org/itesmguillermorivas/partial2/raw/45f22905941b70964102fce8caf882b51e988d23/carros.json"
      />
      <StatusBar style="auto" />
    </View>
  );
}

// component just to test navigation and parameters
function NavExample({navigation, route}: any) {
  return(
    <View> 
      <Text>Nav example here! {route?.params.data}</Text>
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
