import { StyleSheet } from 'react-native';
import { createDrawerNavigator}  from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Home from './src/componentes/Home';
import * as React from 'react';

const Drawer = createDrawerNavigator();
export default function App() {
  
  return (
    <NavigationContainer>
      <Drawer.Navigator useLegacyImplementation>
        <Drawer.Screen name="Home" component={Home} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
