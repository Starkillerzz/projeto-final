import {useContext} from 'react';
import { Dimensions, Image, Text, View, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import { AuthContext } from '../context/AuthContext';
import Icon from 'react-native-vector-icons/FontAwesome'


function Home({navigation}) {
    const width = Dimensions.get('window').width;
    const {usuario} = useContext(AuthContext)

    return (
        <View 
        style={styles.container}>
            
<ImageBackground style={styles.imagem} source={require('../../assets/Happy(1).png')}>
           
            
            <View style={styles.container2}>
            
            <TouchableOpacity style={[styles.button, styles.buttonOpen]}
            onPress={() => navigation.navigate('Login')}>
            <Icon style={[styles.icone, {marginTop:7}]} name="user" size={35} color="#337C41"></Icon>
            <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.button, styles.buttonOpen]}
            onPress={() => navigation.navigate('Locais')}>
                <Icon style={[styles.icone, {marginTop:7}]} name="map" size={35} color="#337C41"></Icon>
                <Text style={styles.buttonText}>Locais</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.button, styles.buttonOpen]}
            onPress={() => navigation.navigate('Reciclar')}>
                <Icon style={[styles.icone, {marginTop:7}]} name="recycle" size={35} color="#337C41"></Icon>
                <Text style={styles.buttonText}>Reciclar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.button, styles.buttonOpen]}
            onPress={() => navigation.navigate('Logistica Reversa')}>
                <Icon style={[styles.icone, {marginTop:7}]} name="truck" size={35} color="#337C41"></Icon>
                <Text style={[styles.buttonText, {textAlign: 'center'}]}>Logistica Reversa</Text>
            </TouchableOpacity>
           
            </View>
           
            <Carousel
                loop
                width={width}
                height={300}
                autoPlay={true}
                data={[{
                    key: 1,
                    image: require('../../assets/Slide1.jpg')
                }, 
                {
                    key:2,
                    image: require('../../assets/Slide2.jpg')

                },
                {
                    key:3,
                    image:require('../../assets/Slide3.jpg')
                }]}
                scrollAnimationDuration={2000}
                //onSnapToItem={(index) => console.log('current index:', index)}
                renderItem={({ item } ) => (
                    <View
                        style={{
                            flex: 1,
                            
                            justifyContent: 'center',
                        }}
                    >
                        <Image
                            source={item.image}
                            style={styles.imagens}
                        />
    
                    </View>
                )}
                
            />
              </ImageBackground>
        </View>
    );
}
const styles= StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        resizeMode: "cover",
        width: '100%',    
        borderRadius: 20,  
        
      },
      imagem:{
        flex:1,
        resizeMode: "cover",
        width: '100%'
      },
      button: {
        
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        width: 90,
        alignItems: 'center'
       
      },
      buttonOpen: {
        backgroundColor: "#9bc4b0",
        
      },
      background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: '100%',
      },
      imagens: {
        height:'100%',
        width:'100%',
        padding: 100,
        alignSelf: 'center'
        
      },
      buttonText:{
       
        fontWeight: 'bold',
        fontSize: 15,
        color: '#337C41',
        
        
          
      },
      icone:{
        
      },
      container2:{
          
          flexDirection: 'row-reverse',
          justifyContent: 'space-around',
          marginTop: 130,
          marginBottom: 50,
         padding: 10,
          borderRadius: 20
                  
    
      }, 
      loginContainer:{
          
          alignSelf: "flex-end",
          marginRight: 5
      }
})

export default Home;