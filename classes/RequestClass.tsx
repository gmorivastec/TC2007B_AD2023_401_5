import { Component } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';

export default class RequestClass extends Component<{uri : string},{model : string}> {

    // we are going to do a request here! 
    // we need to deal with async code
    async request(uri : string) {

        var response = await fetch(uri);
        var json = await response.json();

        console.log(json);
        console.log(json[1]);
        
        this.setState((state) => {
            return {model: json[1]['modelo']};
        })
    }

    constructor(props : any){
        super(props);
        this.request(this.props.uri);
        this.state = {model: ""};
    }

    render(){
        return(

            <View>
                <Text>HEY IM A: {this.state.model} </Text>
            </View>
        );
    }
}