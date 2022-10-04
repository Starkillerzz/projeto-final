import { createContext, useState, useEffect } from "react";
import Toast from 'react-native-toast-message'
import firebase from '../configuracao/firebaseConfig'
import AsyncStorage from '@react-native-async-storage/async-storage'
export const AuthContext = createContext({})

function AuthProvider({children}){
    const [usuario, setUsuario] = useState('')
    
useEffect(() => {
        console.log(usuario)
    }, [usuario])
    
    function logar(email, password){
        if (email === '' || password === '') {
            Toast.show({
                type: 'info',
                text1: 'Atenção!',
                text2: 'Todos os campos devem ser preenchidos!'
            })
        }else{
            firebase.auth().signInWithEmailAndPassword(email, password)
            .then((userCredential)=>{
                const user = userCredential.user.email
                AsyncStorage.setItem('user', user)
                setUsuario(user)
            
                
            })
            .catch((error)=>{
                console.log(error.message)
            })
        }
    }
    return(
        <AuthContext.Provider value={{usuario, logar}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider