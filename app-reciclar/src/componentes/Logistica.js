import { Text, View, ImageBackground , StyleSheet} from "react-native";

function Logistica(){
    return(
        <ImageBackground style={styles.imagem} source={require('../../assets/Happy(1).png')}>
        <View>
            <Text>Logistica Reversa</Text>
        </View>
        </ImageBackground>
    )
}
const styles= StyleSheet.create({
    container: {
        flex: 1,
        
        
      }})
export default Logistica