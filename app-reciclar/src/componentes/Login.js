import { useState, useContext } from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet , ImageBackground} from 'react-native'
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
             <ImageBackground style={styles.imagem} source={require('../../assets/Happy(1).png')}>
                 <View style={styles.container2}>
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
                <Text style={styles.texto}>Login</Text>
            </TouchableOpacity>
            <Text
                onPress={() => navigation.navigate('Registrar')}
                style={styles.registrar}
            >Não tem cadastro? Clique aqui</Text>
            </View>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        resizeMode: "cover",
       
        width: '100%'
        
    },
    imagem:{
        flex:1,
        resizeMode: "cover",
        width: '100%'
      },
      container2:{
        marginTop:220,
        padding: 20

      },
    input: {
        marginTop: 20,
        width: '100%',
        fontSize: 16,
        borderBottomColor: "black",
        borderBottomWidth: 1,
        marginVertical: 10
    },
    label: {
        color: 'brown',
        fontSize: 18
    },
    button: {
        
        width: 200,
        backgroundColor: '#9bc4b0',
        padding: 15,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        marginVertical: 10,
        marginHorizontal: 88
    },
    registrar: {
        justifyContent: 'center',
        textAlign: 'center',
        color: '#337C41'
    },
    loginContainer:{
        flex:1,
        alignSelf: "flex-end",
        marginRight: 5
    },
    texto:{
        fontSize:16,
        color:'#337C41',
        
        
    }
});