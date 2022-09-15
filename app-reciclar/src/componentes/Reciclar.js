import { LinearGradient } from 'expo-linear-gradient';
import React from 'react'
import {View, Text, TextInput,StyleSheet, SafeAreaView} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Toast from 'react-native-toast-message';


function Reciclar (){
    return(
        <View style={styles.container}>
            
            <LinearGradient
            style={{
                height: '100%',
                width: '100%'}}

                colors={['palegoldenrod', 'lightgreen']}
                style={styles.background}

            ></LinearGradient>
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

const styles= StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'green'
        
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