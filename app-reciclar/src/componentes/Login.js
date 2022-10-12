import { useState, useContext } from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import { AuthContext } from '../context/AuthContext'



export default function Login({navigation}){
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { logar } = useContext(AuthContext)

    function handleLogin(){
        logar(email, password)
        navigation.navigate('Home')   
    }
    
    return(
        <View style={styles.container}>
            
            <TextInput
                style={styles.input}
                placeholder='Informe email'
                defaultValue={email}
                onChangeText={setEmail}
            />
            <TextInput
                style={styles.input}
                placeholder='Informe senha'
                defaultValue={password}
                onChangeText={setPassword}
                secureTextEntry={true}
            />
            <TouchableOpacity
                style={styles.button}
                onPress={() => handleLogin()}
            >
                <Text>Login</Text>
            </TouchableOpacity>
            <Text
                onPress={() => navigation.navigate('Registrar')}
                style={styles.registrar}
            >Não tem cadastro? Clique aqui</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20
    },
    input: {
        width: '100%',
        padding: 10,
        borderBottomColor: "black",
        borderBottomWidth: 1,
        marginVertical: 10
    },
    label: {
        color: 'brown',
        fontSize: 18
    },
    button: {
        backgroundColor: 'skyblue',
        padding: 5,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        marginVertical: 10
    },
    registrar: {
        justifyContent: 'center',
        textAlign: 'center',
        color: 'blue'
    },
    loginContainer:{
        flex:1,
        alignSelf: "flex-end",
        marginRight: 5
    }
});