import { Dimensions, Image, Text, View, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import Icon from 'react-native-vector-icons/FontAwesome'


function Home({navigation}) {
    const width = Dimensions.get('window').width;
    const height = Dimensions.get('window').height
    

    return (
        <View 
        style={styles.container}>
            
<ImageBackground style={styles.imagem} source={require('../../assets/Happy(1).png')}>
           
            
            <View style={styles.container2}>
            
            <TouchableOpacity style={[styles.button, styles.buttonOpen]}
            onPress={() => navigation.navigate('Login')}>
            <Icon style={[styles.icone, {marginTop:7}]} name="user" size={40} color="#337C41"></Icon>
            <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.button, styles.buttonOpen]}
            onPress={() => navigation.navigate('Locais')}>
                <Icon style={[styles.icone, {marginTop:7}]} name="map" size={40} color="#337C41"></Icon>
                <Text style={styles.buttonText}>Locais</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.button, styles.buttonOpen]}
            onPress={() => navigation.navigate('Reciclar')}>
                <Icon style={[styles.icone, {marginTop:7}]} name="recycle" size={40} color="#337C41"></Icon>
                <Text style={styles.buttonText}>Reciclar</Text>
            </TouchableOpacity>
           
            <TouchableOpacity style={[styles.button, styles.buttonOpen]}
            onPress={() => navigation.navigate('Destinacao')}>
                <Icon style={[styles.icone, {marginTop:7}]} name="truck" size={40} color="#337C41"></Icon>
                <Text style={[styles.buttonText, {textAlign: 'center'}]}>Destinação</Text>
            </TouchableOpacity>
            </View>
           
            <Carousel
                loop
                width={400}
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
                            marginLeft: 15,
                            

                            
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
        padding: 50,
        alignSelf: 'center'
        
      },
      buttonText:{
       
        fontWeight: 'bold',
        fontSize: 13,
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