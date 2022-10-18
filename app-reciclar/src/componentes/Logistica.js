import {Text, View, StyleSheet , ImageBackground} from "react-native";
import {useContext} from 'react'
import {AuthContext} from '../context/AuthContext'



export default function Logistica(){
    const {usuario} = useContext(AuthContext)

    return(
        <View>
            <ImageBackground style={styles.imagem} source={require('../../assets/Happy(1).png')}>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    loginContainer:{
        flex:1,
        alignSelf: "flex-end",
        marginRight: 5,
        resizeMode: "cover",
        width: '100%'
    },
    imagem:{
        flex:1,
        resizeMode: "cover",
        width: '100%'
      }
})
