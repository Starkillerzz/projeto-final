import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import Toast from 'react-native-toast-message'


function Locais (){
    return(
        <View style={styles.container}>
            <Text>O local de coleta de resíduo mais próximo de você!</Text>

        </View>

        
    )
}
const styles= StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        
      },
      background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: '100%',
      }
})

export default Locais