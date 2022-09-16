import * as React from 'react';
import { useState } from 'react';
import { Dimensions, Image, Text, View, StyleSheet } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import { LinearGradient } from 'expo-linear-gradient';


function Home() {
    const width = Dimensions.get('window').width;
    const [data, setData] = useState([{
        title: 'titulo',
        body: 'teste',
        source: 'https://images.ecycle.com.br/wp-content/uploads/2021/05/20195924/o-que-e-paisagem.jpg.webp'
    }])

    return (
        <View 
        style={styles.container}>
              <LinearGradient
            style={{
                height: '100%',
                width: '100%'}}

                colors={['palegoldenrod', 'lightgreen']}
                style={styles.background}

            ></LinearGradient>
            <Carousel
                loop
                width={width}
                height={300}
                autoPlay={true}
                data={[{
                    key: 1,
                    image: require('../../assets/lata_d1.jpg')
                }, 
                {
                    key:2,
                    image: require('../../assets/Logo.png')

                },
                {
                    key:3,
                    image:require('../../assets/lixeiro.png')
                }]}
                scrollAnimationDuration={2000}
                onSnapToItem={(index) => console.log('current index:', index)}
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
        
      }
})

export default Home;