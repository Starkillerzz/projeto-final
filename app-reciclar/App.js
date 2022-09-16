import { StyleSheet, Text, Image, View } from 'react-native';
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
      <NavigationContainer useLegacyImplementation>
        <SafeAreaView
          style={{
            backgroundColor: "palegoldenrod",
            borderBottomColor: 'palegoldenrod',
            borderBottomWidth: StyleSheet.hairlineWidth,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center'

          }}
        >

          <Image
            source={require('./assets/Logo.png')}
            style={styles.img}
          />

        </SafeAreaView>
        <Drawer.Navigator screenOptions={{
          drawerStyle: {
            backgroundColor: 'palegoldenrod',
            width: 200
          },
          // headerStyle:{
          //   backgroundColor:'lightyellow'
          // },
          headerTransparent: true
      
        }}

          >

          <Drawer.Screen style={styles.titulo} name="Home" component={Home}

            options={() => ({
              drawerIcon: () => (<Icon name="home" size={26}
                color="green"
                drawerContentStyle={{ backgroundColor: "palegoldenrod" }} />
              )
            })} />
          <Drawer.Screen style={styles.titulo} name="Reciclar" component={Reciclar}
            options={() => ({
              drawerIcon: () => (<Icone name="recycle" size={26}
                color="green" />
              )
            })} />
          <Drawer.Screen style={styles.titulo} name="Locais" component={Locais}
            options={() => ({
              drawerIcon: () => (<Icone name="truck" size={26}
                color="green" />
              )
            })} />

        </Drawer.Navigator>
        <Toast />
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
    width: 300,
    height: 150

  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: '100%',
  }
})