import * as React from 'react';
import { StyleSheet} from 'react-native';
import { createNativeStackNavigator} from '@react-navigation/native-stack';
import { NavigationContainer} from '@react-navigation/native';
import Home from './src/componentes/Home';
import Reciclar from './src/componentes/Reciclar';
import Locais from './src/componentes/Locais'
import {SafeAreaProvider } from 'react-native-safe-area-context';
import Toast from 'react-native-toast-message';
import Logistica from './src/componentes/Logistica';
import Login from './src/componentes/Login';
import Registrar from './src/componentes/Registrar';
import AuthProvider from './src/context/AuthContext';

const Stack = createNativeStackNavigator();
export default function App() {

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <AuthProvider>
        <Stack.Navigator>
          <Stack.Screen name='Home' component={Home} options={{
          tittle: 'Página Inicial',
          headerStyle:{
            backgroundColor: '#9BC4B0'
          }}}/>
          <Stack.Screen name='Locais' component={Locais} options={{
          tittle: 'Locais de Coleta',
          headerStyle:{
            backgroundColor: '#9BC4B0'
          }}}/>
          <Stack.Screen name='Reciclar' component={Reciclar} options={{
          tittle: 'Reciclando',
          color: '#337C41',
          headerStyle:{
            backgroundColor: '#9BC4B0',
            
          }}}/>
          <Stack.Screen name='Logistica Reversa' component={Logistica} options={{
          tittle: 'Logística Reversa',
          headerStyle:{
            backgroundColor: '#9BC4B0'
          }}}/>
          <Stack.Screen name= 'Login' component={Login} options={{
          tittle: 'Login',
          headerStyle:{
            backgroundColor: '#9BC4B0'
          }}}/>
          <Stack.Screen name='Registrar' component={Registrar} options={{
          tittle: 'Cadastro',
          headerStyle:{
            backgroundColor: '#9BC4B0'
          }}}/>
        </Stack.Navigator>
        <Toast/>
        </AuthProvider>
      </NavigationContainer >
    </SafeAreaProvider >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    flex: 1,
    backgroundColor: 'palegoldenrod',
    height: 50
  },
  img: {
    width: 190,
    height: 93,
    

  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: '100%',
  }
})