import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import  { AuthContext } from '../context/AuthContext'
import {useContext} from 'react'



function Locais (){

    const { usuario } = useContext(AuthContext)

    return(
        <View style={styles.container}>
            <Text style={styles.loginContainer}>Você está logado como: {usuario}</Text>

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