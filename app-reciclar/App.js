import { StyleSheet, Text, Image, View} from 'react-native';
import { createDrawerNavigator, DrawerItem } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Home from './src/componentes/Home';
import * as React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import Icone from 'react-native-vector-icons/FontAwesome';
import Reciclar from './src/componentes/Reciclar';
import Locais from './src/componentes/Locais'
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import Toast from 'react-native-toast-message';

const Drawer = createDrawerNavigator();
export default function App() {

  return (
    <SafeAreaProvider>
    <NavigationContainer>
      <SafeAreaView
        style={{
          backgroundColor:"yellowgreen",
          borderBottomColor: 'yellowgreen',
          borderBottomWidth: StyleSheet.hairlineWidth,
        }}
      >
      <Text>TESTEEEEE</Text>
      <Image 
               source={require('./assets/Logo.jpg')}
               style={styles.img}
            />
      </SafeAreaView>
      <Drawer.Navigator   screenOptions={{
        drawerStyle: {
          backgroundColor: 'yellowgreen',
          width: 240,
        },
      }} useLegacyImplementation>
        <Drawer.Screen style={styles.titulo} name="Home" component={Home}
          options={() => ({
            drawerIcon: () => (<Icon name="home" size={26}
              color="green" 
              drawerContentStyle={{backgroundColor: "yellowgreen"}}/>
            )
          })} />
        <Drawer.Screen style={styles.titulo}  name="Reciclar" component={Reciclar}
          options={() => ({
            drawerIcon: () => (<Icone name="recycle" size={26}
              color="green" />
            )
          })} />
        <Drawer.Screen style={styles.titulo}  name="Locais" component={Locais}
          options={() => ({
            drawerIcon: () => (<Icone name="truck" size={26}
              color="green" />
            )
          })} />
        
      </Drawer.Navigator>
      <Toast/>
    </NavigationContainer >
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo:{
    flex: 1,
    drawerBackgroundColor: 'yellowgreen'
  }, 
  img:{
    width: 100,
    height:100
  }
});
