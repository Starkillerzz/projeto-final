import { useState } from "react"
import Toast from 'react-native-toast-message'
import { FontAwesome } from '@expo/vector-icons'
import { View, Text, StyleSheet, TextInput, TouchableOpacity , ImageBackground} from "react-native"
import firebase from '../configuracao/firebaseConfig'

export default function Register({navigation}){
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    function addUser(){
        if (email === '' || password === '') {
            Toast.show({
                type: 'info',
                text1: 'Atenção!',
                text2: 'Todos os campos devem ser preenchidos!'
            })
        }else{
            firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((userCredential)=>{
                const user = userCredential.user
                navigation.navigate('Login')
            })
            .catch((error)=> {
                console.log(error.message)
            })
        }
    }
    return(
        <View style={styles.container}>
            <ImageBackground style={styles.imagem} source={require('../../assets/Happy(1).png')}>
                <View style={styles.container2}>
            <Text style={styles.label}>Email</Text>
            <TextInput
                style={styles.input}
                placeholder="Ex: ana@gmail.com"
                onChangeText={setEmail}
                value={email}
            />
            <Text style={styles.label}>Senha</Text>
            <TextInput
                style={styles.input}
                placeholder="Informe senha no minimo 6 caracteres"
                onChangeText={setPassword}
                value={password}
                secureTextEntry={true}
            />
            <TouchableOpacity
                style={styles.button}
                onPress={() => {
                    addUser()
                }}
            >
                <FontAwesome
                    name="user-plus"
                    color= '#337C41'
                    size={24}
                />

            </TouchableOpacity>
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
        color: '#337C41',
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
    }
});