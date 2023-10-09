// in this module we will define a 
// component through a function

import { useState } from "react";
import { Text, View, Button, Image, TextInput } from 'react-native';

// function components have no lifecycle methods
// how do we work with props and states?!

// props - arguments
// states - hooks

export default function Doggy(props: any){

    // how do I declare variables that are part of the state?
    // with a hook! 

    const[isHappy, setIsHappy] = useState(false);
    const[count, setCount] = useState(0);
    const[testInput, setTestInput] = useState("");

    return(
        <View>
            <Text>WOOF. {props.name} {props.age} i'm {isHappy? "HAPPY!" : "SAD :'("}</Text>
            <Text>input: {testInput}</Text>
            <Text>today's bark count: {count}</Text>
            <Button 
                title="Change happiness"
                onPress={ () => {
                    setIsHappy(!isHappy);
                }}
            />
            <Button 
                title="WOOF."
                onPress={ () => {
                    setCount(count + 1);
                }}
            />
            <TextInput 
                placeholder="TEXT INPUT TEST"
                onChangeText={ text => {
                    setTestInput(text);
                }}
            />
        </View>
    );
}

export function DoggyRow(props: any) {

    return(
        <View>
            <Text>My name is {props.name}</Text>
            <Image 
                source={{uri: props.uri}}
                style={{width: 100, height: 100}}
            />
        </View>
    );
}