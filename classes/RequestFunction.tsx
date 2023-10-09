import { useEffect, useState } from "react";
import { View, Text, ActivityIndicator } from 'react-native';

export default function RequestFunction(props : any) {

    const[data, setData] = useState([]);

    async function request() {
        var response = await fetch(props.uri);
        var json = await response.json();
        
        console.log(json);

        setData([
            {brand: json[1]['marca']}
        ]);
    }

    // we are going a use a hook called useEffect
    // this is used to register logic that will be run post-render
    // we can add trigger prerequistes / triggers
    useEffect(() => {
        request();
    }, []);
    

    return(
        <View>
            {
               data.length > 0 ?
                    <View>
                        <Text>Request done</Text>    
                    </View> 
                :
                    <ActivityIndicator size="large" />
            }
        </View>
    );
}