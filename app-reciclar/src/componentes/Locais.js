import React from 'react'
import {View, Text, StyleSheet, Image, ImageBackground} from 'react-native'
import  { AuthContext } from '../context/AuthContext'
import {useContext} from 'react'



function Locais (){

    const { usuario } = useContext(AuthContext)

    return(
        <View style={styles.container}>
            <ImageBackground style={styles.imagem} source={require('../../assets/Happy(1).png')}>
            <Image source={'../../assets/favicon.png'}
                    style={styles.modalImg}/>
</ImageBackground>
        </View>

        
    )
}
const styles= StyleSheet.create({
    container: {
        
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        resizeMode: "cover",
        width: '100%'
        
      },
      imagem:{
        flex:1,
        resizeMode: "cover",
        width: '100%'
      },
      background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: '100%',
      },
      modalImg:{
        height: 10,
        width: 10,
    }
})

export default Locais