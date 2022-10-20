import {View, StyleSheet , ImageBackground, Text, TouchableOpacity, Image} from "react-native";



export default function Destinacao({navigation}){

    return(
        <View style={styles.container}>
            <ImageBackground style={styles.imagem} source={require('../../assets/Happy(1).png')}>
                <View style={styles.container2}>
            <TouchableOpacity style={[styles.button, styles.buttonOpen]}
            onPress={() => navigation.navigate('Lixeiras')}>
            <Image style={[styles.icone]} source={require('../../assets/lixo.png')}></Image>
            <Text style={styles.buttonText}>Lixeiras</Text>
            <Text style={styles.buttonText2}>Entenda como é feita a separação por cores das lixeiras.</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.button, styles.buttonOpen]}
            onPress={() => navigation.navigate('Logística Reversa')}>
                <Image style={[styles.icone]} source={require('../../assets/reversa.png')}></Image>
                <Text style={styles.buttonText}>Logística Reversa</Text>
                <Text style={styles.buttonText2}>Explicamos o que é a logística reversa e seus pontos positivos.</Text>
            </TouchableOpacity>
                </View>
                <View style={styles.container2}>
            <TouchableOpacity style={[styles.button, styles.buttonOpen]}
            onPress={() => navigation.navigate('Aterros')}>
                <Image style={[styles.icone] } source={require('../../assets/aterro.png')}></Image>
                <Text style={styles.buttonText}>Aterros Sanitários e Lixões</Text>
                <Text style={styles.buttonText2}>Aterros Sanitários e Lixões: suas diferenças e os seus malefícios.</Text>
            </TouchableOpacity>
            </View>
            </ImageBackground>
            
        </View>
    )
}

const styles= StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column-reverse' 
        
      },
      imagem:{
        flex:1,
        resizeMode: "cover",
        width: '100%'
      },
      button: {
        
        borderRadius: 20,
        padding: 5,
        elevation: 2,
        width: 172,
        height: 250,
        alignItems: 'center',
        
       
      },
      buttonOpen: {
        backgroundColor: "white",
        borderWidth: 1,
        borderColor: '#337C41'
        
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
        textAlign: "center",
        fontWeight: 'bold',
        fontSize: 18,
        color: '#337C41', 
        marginBottom: 15            
          
      },
      buttonText2:{
        
        textAlign: "justify",
        fontSize: 14,
        color: 'black',             
          
      },
      icone:{
        width: 130,
        height: 110,
        alignSelf: 'center'
      },
      container2:{
          
          flexDirection: 'row-reverse',
          justifyContent: 'space-around',
          marginTop: 50,
          
         padding: 10,
          
                  
    
      }, 
      loginContainer:{
          
          alignSelf: "flex-end",
          marginRight: 5
      }
})
