import { Component, ErrorInfo } from 'react';
import { Text, View, Button } from 'react-native';

export class ClassExample extends Component<{nombre : string, age : string}, {count: number, nombre : string}> {

    // we are going to do the class to examine
    // a component's lifecycle 
    // (remember a component can be defined through a class or a function)

    // https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/

    // constructor - method that runs when object is created 
    // (in this case component)
    // can receive something called "props"

    // props are arguments that are received from the outside
    // and can be used to define an inner state
    constructor(props: any) {
        super(props);

        // this should only be done on the constructor
        // definition of a state 
        this.state = {count: 0, nombre: this.props.nombre};
        console.log("CONSTRUCTOR CALLED");
    }

    // THE ONLY METHOD WE ARE FORCED TO IMPLEMENT
    render() {
        console.log("COMPONENT RENDER");
        return (
        <View>
            <Text>
                Hi, my name is {this.state.nombre} and I am {this.props.age} years old. 
            </Text>
            <Text>Current count: {this.state.count}</Text>
            <Button 
                title="Add 1"
                onPress={() => {
                    this.setState(
                        (state) => {
                            return {count: state.count + 1};
                        }
                    );
                }}
            />
        </View>
        );
    }

    // MOUNT - 3 PARTS
    // constructor, render, component did mount
    // we are missing the third
    componentDidMount(): void {
        console.log("COMPONENT DID MOUNT");
    }

    // UPDATE - 2 (MAIN) PARTS
    // render, component did update
    componentDidUpdate(prevProps: Readonly<{}>, prevState: Readonly<{}>, snapshot?: any): void {
        console.log("COMPONENT DID UPDATE");
    }

    // UNMOUNT 
    componentWillUnmount(): void {
        console.log("COMPONENT WILL UNMOUNT");
    }

    // LASTLY
    // not related to lifecycle itself but useful
    componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
        console.log("ERROR!");
    }   
}