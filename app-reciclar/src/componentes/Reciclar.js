import React from 'react'
import {View, Text,StyleSheet, TouchableOpacity} from 'react-native'

import Toast from 'react-native-toast-message';


function Reciclar ({navigation}){
    return(
        <View>
            <Text>Aqui você vai descobrir como reciclar!</Text>

            <TouchableOpacity
            onPress={()=>{
                Toast.show({
                    type: 'success',
                    text1: "resultado",
                    text2: "Funcionou!"
                })
            }}
            >
                <Text>Toast</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=> navigation.navigate('Não Reciclável') }>
                <Text>Embalagem metalizada</Text>
            </TouchableOpacity>

            
        </View>
    )
}

const styles= StyleSheet.create({
    container: {
        alignItems: 'center',
        
        
        
      },
      background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: '100%',
      }
})


export default Reciclar