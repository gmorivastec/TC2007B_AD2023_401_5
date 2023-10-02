import { Component, ErrorInfo } from 'react';
import { Text, View, Button } from 'react-native';

export class ClassExample extends Component {

    // we are going to do the class to examine
    // a component's lifecycle 
    // (remember a component can be defined through a class or a function)

    // https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/

    // THE ONLY METHOD WE ARE FORCED TO IMPLEMENT
    render() {
        return (
        <View>
            <Text>HEY GUYS!</Text>
        </View>
        );
    }
}