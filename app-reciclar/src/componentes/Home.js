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
                data={[...new Array(6).keys()]}
                scrollAnimationDuration={3000}
                onSnapToItem={(index) => console.log('current index:', index)}
                renderItem={({ index }) => (
                    <View
                        style={{
                            flex: 1,
                            borderWidth: 1,
                            justifyContent: 'center',
                        }}
                    >
                        <Text style={{ textAlign: 'center', fontSize: 30 }}>
                            {index}
                        </Text>
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
      }
})

export default Home;