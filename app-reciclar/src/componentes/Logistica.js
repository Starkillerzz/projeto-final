import {Text, View, StyleSheet } from "react-native";
import {useContext} from 'react'
import {AuthContext} from '../context/AuthContext'



export default function Logistica(){
    const {usuario} = useContext(AuthContext)

    return(
        <View>
            <Text style={styles.loginContainer}>Você está logado como: {usuario}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    loginContainer:{
        flex:1,
        alignSelf: "flex-end",
        marginRight: 5
    }
})
