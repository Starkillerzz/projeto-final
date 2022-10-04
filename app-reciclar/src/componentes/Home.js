import {useContext} from 'react';
import { Dimensions, Image, Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import { AuthContext } from '../context/AuthContext';




function Home({navigation}) {
    const width = Dimensions.get('window').width;
    const {usuario} = useContext(AuthContext)

    return (
        <View 
        style={styles.container}>
            <Text style={styles.loginContainer}>Você está logado como: {usuario}</Text>
            <View style={styles.container2}>

            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity
            onPress={() => navigation.navigate('Locais')}>
                <Text style={styles.buttonText}>Locais</Text>
            </TouchableOpacity>

            <TouchableOpacity
            onPress={() => navigation.navigate('Reciclar')}>
                <Text style={styles.buttonText}>Reciclar</Text>
            </TouchableOpacity>

            <TouchableOpacity
            onPress={() => navigation.navigate('Logistica Reversa')}>
                <Text style={styles.buttonText}>Logistica Reversa</Text>
            </TouchableOpacity>
          
            </View>
            
            <Carousel
                loop
                width={width}
                height={300}
                autoPlay={true}
                data={[{
                    key: 1,
                    image: require('../../assets/como-reciclar-o-lixo-domestico.jpg')
                }, 
                {
                    key:2,
                    image: require('../../assets/reciclar3.jpg')

                },
                {
                    key:3,
                    image:require('../../assets/Reciclagem-em-casa.png')
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
        </View>
    );
}
const styles= StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 80
        
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
        
      },
      buttonText:{
          fontWeight: 'bold',
          fontSize: 30,
          marginBottom: 10
      },
      container2:{
          alignItems: 'center',
          marginBottom: 70
    
      }, 
      loginContainer:{
          flex:1,
          alignSelf: "flex-end",
          marginRight: 5
      }
})

export default Home;