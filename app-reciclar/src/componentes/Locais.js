import React from 'react'
import {View, Text, StyleSheet, Image, ImageBackground, Dimensions, SafeAreaView, Platform} from 'react-native'
import { useState, useEffect } from 'react'
import * as Location from 'expo-location';
import MapView, { Marker } from 'react-native-maps'



 export default function Locais (){


    
      const [marcadores, setMarcadores] = useState([])
      const [region, setRegion] = useState({
          latitude: 0,
          longitude: 0,
          latitudeDelta: 0.0022,
          longitudeDelta: 0.0421
      })
  
      function novoMarcador(e) {
          let dados = {
              key: marcadores.length,
              coords: {
                  latitude: e.nativeEvent.coordinate.latitude,
                  longitude: e.nativeEvent.coordinate.longitude,
              },
              pinColor: '#fff'
          }
  
          setRegion({
              latitude: e.nativeEvent.coordinate.latitude,
              longitude: e.nativeEvent.coordinate.longitude,
              latitudeDelta: 0.0022,
              longitudeDelta: 0.0421
          })
  
          setMarcadores(old => [...old, dados])
      }
  
      useEffect(() => {
          (async () => {
              if (Platform.OS !== "web") {
                  const { status } = await Location.requestForegroundPermissionsAsync();
  
                  if (status !== "granted") {
                      Alert.alert("Insufficient permissions!")
                      return;
                  }
              }
              
              let location = await Location.getCurrentPositionAsync({ accuracy: Location.Accuracy.Highest, maximumAge: 10000 });
              setRegion({
                  latitude: location.coords.latitude,
                  longitude: location.coords.longitude,
                  latitudeDelta: 0.0022,
                  longitudeDelta: 0.0421
              })
              })();         
      }, [])


    return(
        <View style={styles.container}>
            <ImageBackground style={styles.imagem} source={require('../../assets/Happy(1).png')}>
            <Image source={'../../assets/favicon.png'}
                    style={styles.modalImg}/>
            </ImageBackground>

            <SafeAreaView >
            
            <MapView
              style={styles.map}
              region={region}
              zoomEnabled={true}
              minZoomLevel={17}
              showsUserLocation={true}
              onPress={(ev) => novoMarcador(ev)}
            >
               {marcadores.map(mark => {
                    return (
                        <Marker
                            key={mark.key}
                            coordinate={mark.coords}
                            pinColor={mark.pinColor} />
                    )
                })}
            </MapView>  
                                  
        </SafeAreaView>

        </View>

        
    )
}
 
const styles= StyleSheet.create({
    container: {
        
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        resizeMode: "cover",
        width: '100%'
        
      },
      imagem:{
        flex:1,
        resizeMode: "cover",
        width: '100%'
      },
      background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: '100%',
      },
      modalImg:{
        height: 10,
        width: 10,
    },
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center'
  },
  map: {
      width: Dimensions.get('window').width,
      height: '80%'//Dimensions.get('window').height,
  },
  region: {
      backgroundColor: 'red',
      padding: 10,
      marginBottom: 10
  }
})
 