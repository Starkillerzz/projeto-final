import React from 'react'
import {View, Text, TextInput} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Toast from 'react-native-toast-message';

function Reciclar (){
    return(
        <View>
            <Text>Aqui você vai descobrir como reciclar!</Text>
            <TouchableOpacity
            onPress={()=>{
                Toast.show({
                    type: 'success',
                    text1: "resultado",
                    text2: "Rodrigo Pitoco!"
                })
            }}
            >
                <Text>Toast</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Reciclar