import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';

function Locais (){
    return(
        <View style={styles.container}>
              <LinearGradient
            style={{
                height: '100%',
                width: '100%'}}

                colors={['palegoldenrod', 'lightgreen']}
                style={styles.background}

            ></LinearGradient>
            <Text>O local de coleta de resíduo mais próximo de você!</Text>
        </View>
    )
}
const styles= StyleSheet.create({
    container: {
        flex: 1,
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