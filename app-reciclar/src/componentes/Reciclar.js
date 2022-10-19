import {useContext, useEffect, useState} from 'react'
import {View, Text,StyleSheet, TouchableOpacity, Modal, Alert, Image, ImageBackground, SafeAreaView, ScrollView} from 'react-native'
import {AuthContext} from '../context/AuthContext'

//import Toast from 'react-native-toast-message';





function Reciclar (){
    const [modalVisible, setModalVisible] = useState(false);
    const [modalVisible2, setModalVisible2] = useState(false);
    const [modalVisible3, setModalVisible3] = useState(false);
    const [modalVisible4, setModalVisible4] = useState(false);
    const [modalVisible5, setModalVisible5] = useState(false);
    const [modalVisible6, setModalVisible6] = useState(false);
    const [modalVisible7, setModalVisible7] = useState(false);
    const [modalVisible8, setModalVisible8] = useState(false);
    const [modalVisible9, setModalVisible9] = useState(false);
    const [modalVisible10, setModalVisible10] = useState(false);
    const [modalVisible11, setModalVisible11] = useState(false);
    const [modalVisible12, setModalVisible12] = useState(false);
    const [modalVisible13, setModalVisible13] = useState(false);
    const [modalVisible14, setModalVisible14] = useState(false);
    const [modalVisible15, setModalVisible15] = useState(false);
    const [modalVisible16, setModalVisible16] = useState(false);
    const [modalVisible17, setModalVisible17] = useState(false);
    const [modalVisible18, setModalVisible18] = useState(false);
    const [modalVisible19, setModalVisible19] = useState(false);
    const [modalVisible20, setModalVisible20] = useState(false);
    const [modalVisible21, setModalVisible21] = useState(false);
    const [alerta, setAlerta] = useState(true)
    
    useEffect(() => {
      if(alerta == true){
        alert("Não se esqueça de separar os itens. Tampas, rótulos etc")
        setAlerta(false)
      }
    }, [alerta])



    return(
        <ScrollView style={{flex:1, height: '100%'}}>
          <ImageBackground style={styles.imagem} source={require('../../assets/Happy(1).png')}>
            <View style={styles.Viewtotal}>
    
     <View style={styles.containerResultado}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
          <Text style={styles.modalText}>Papel (Lixeira Azul)</Text>
            <Image style={styles.modalImg} source={require('../../assets/PapelPequeno.png')}
                    />
            <TouchableOpacity
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle2}>Fechar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <TouchableOpacity
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={[{marginTop: 9}, styles.textStyle]}>Post-it</Text>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible2}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible2(!modalVisible2);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Papel (Lixeira Azul)</Text>
            <Image style={styles.modalImg} source={require('../../assets/PapelPequeno.png')}
                    />
            <TouchableOpacity
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible2(!modalVisible2)}
            >
              <Text style={styles.textStyle2}>Fechar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <TouchableOpacity
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible2(true)}
      >
        <Text style={styles.textStyle}>Embalagem Longa-Vida</Text>
      </TouchableOpacity>
        
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible3}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible3(!modalVisible3);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Metal (Lixeira Amarela)</Text>
            <Image style={styles.modalImg} source={require('../../assets/MetalPequeno.png')}
                    />
            <TouchableOpacity
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible3(!modalVisible3)}
            >
              <Text style={styles.textStyle2}>Fechar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <TouchableOpacity
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible3(true)}
      >
        <Text style={styles.textStyle}>Clipes de Papel</Text>
      </TouchableOpacity>
    </View>
<View style={styles.containerResultado}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible4}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible4(!modalVisible4);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Não Reciclável (Lixeira Cinza)</Text>
            <Image style={styles.modalImg} source={require('../../assets/NreciclavelPequeno.png')}
                    />
            <TouchableOpacity
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible4(!modalVisible4)}
            >
              <Text style={styles.textStyle2}>Fechar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <TouchableOpacity
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible4(true)}
      >
        <Text style={styles.textStyle}>Embalagem Metalizada</Text>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible5}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible5(!modalVisible5);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Orgânico (Lixeira Marrom)</Text>
            <Image style={styles.modalImg} source={require('../../assets/OrganicoPequeno.png')}
                    />
            <TouchableOpacity
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible5(!modalVisible5)}
            >
              <Text style={styles.textStyle2}>Fechar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <TouchableOpacity
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible5(true)}
      >
        <Text style={styles.textStyle}>Restos de Comida</Text>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible6}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible6(!modalVisible6);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Não Recilável (Lixeira Cinza)</Text>
            <Image style={styles.modalImg} source={require('../../assets/NreciclavelPequeno.png')}
                    />
            <TouchableOpacity
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible6(!modalVisible6)}
            >
              <Text style={styles.textStyle2}>Fechar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <TouchableOpacity
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible6(true)}
      >
        <Text style={[{marginTop: 9}, styles.textStyle]}>Balão</Text>
      </TouchableOpacity>
</View>
<View style={styles.containerResultado}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible7}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible7(!modalVisible7);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Metal (Lixeira Amarela)</Text>
            <Image style={styles.modalImg} source={require('../../assets/MetalPequeno.png')}
                    />
            <TouchableOpacity
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible7(!modalVisible7)}
            >
              <Text style={styles.textStyle2}>Fechar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <TouchableOpacity
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible7(true)}
      >
        <Text style={[{marginTop: 9}, styles.textStyle]}>Lata</Text>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible8}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible8(!modalVisible8);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Orgânico (Lixeira Marrom)</Text>
            <Image style={styles.modalImg} source={require('../../assets/OrganicoPequeno.png')}
                    />
            <TouchableOpacity
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible8(!modalVisible8)}
            >
              <Text style={styles.textStyle2}>Fechar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <TouchableOpacity
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible8(true)}
      >
        <Text style={styles.textStyle}>Palito de Dente</Text>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible9}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible9(!modalVisible9);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Plástico (Lixeira Vermelha)</Text>
            <Image style={styles.modalImg} source={require('../../assets/PlasticoPequeno.png')}
                    />
            <TouchableOpacity
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible9(!modalVisible9)}
            >
              <Text style={styles.textStyle2}>Fechar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <TouchableOpacity
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible9(true)}
      >
        <Text style={[{marginTop: 9}, styles.textStyle]}>Sacola</Text>
      </TouchableOpacity>
</View>
<View style={styles.containerResultado}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible10}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible10(!modalVisible10);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Plástico (Lixeira Vermelha)</Text>
            <Image style={styles.modalImg} source={require('../../assets/PlasticoPequeno.png')}
                    />
            <TouchableOpacity
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible10(!modalVisible10)}
            >
              <Text style={styles.textStyle2}>Fechar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <TouchableOpacity
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible10(true)}
      >
        <Text style={[{marginTop: 9}, styles.textStyle]}>Copo Plástico</Text>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible11}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible11(!modalVisible11);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Papel (Lixeira Azul)</Text>
            <Image style={styles.modalImg} source={require('../../assets/PapelPequeno.png')}
                    />
            <TouchableOpacity
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible11(!modalVisible11)}
            >
              <Text style={styles.textStyle2}>Fechar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <TouchableOpacity
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible11(true)}
      >
        <Text style={styles.textStyle}>Caixa de Papelão</Text>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible12}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible12(!modalVisible12);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Vidro (Lixeira Verde)</Text>
            <Image style={styles.modalImg} source={require('../../assets/VidroPequeno.png')}
                    />
            <TouchableOpacity
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible12(!modalVisible12)}
            >
              <Text style={styles.textStyle2}>Fechar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <TouchableOpacity
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible12(true)}
      >
        <Text style={styles.textStyle}>Garrafa de Vidro</Text>
      </TouchableOpacity>
</View>
<View style={styles.containerResultado}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible13}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible13(!modalVisible13);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Metal (Lixeira Amarela)</Text>
            <Image style={styles.modalImg} source={require('../../assets/MetalPequeno.png')}
                    />
            <TouchableOpacity
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible13(!modalVisible13)}
            >
              <Text style={styles.textStyle2}>Fechar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <TouchableOpacity
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible13(true)}
      >
        <Text style={styles.textStyle}>Lata de Refrigerante</Text>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible14}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible14(!modalVisible14);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Plástico (Lixeira Vermelha)</Text>
            <Image style={styles.modalImg} source={require('../../assets/PlasticoPequeno.png')}
                    />
            <TouchableOpacity
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible14(!modalVisible14)}
            >
              <Text style={styles.textStyle2}>Fechar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <TouchableOpacity
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible14(true)}
      >
        <Text style={[{marginTop: 9}, styles.textStyle]}>Canudo</Text>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible15}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible15(!modalVisible15);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Vidro (Lixeira Verde)</Text>
            <Image style={styles.modalImg} source={require('../../assets/VidroPequeno.png')}
                    />
            <TouchableOpacity
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible15(!modalVisible15)}
            >
              <Text style={styles.textStyle2}>Fechar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <TouchableOpacity
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible15(true)}
      >
        <Text style={styles.textStyle}>Cacos de Vidro</Text>
      </TouchableOpacity>
</View>
<View style={styles.containerResultado}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible16}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible16(!modalVisible16);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Orgânico (Lixeira Marrom)</Text>
            <Image style={styles.modalImg} source={require('../../assets/OrganicoPequeno.png')}
                    />
            <TouchableOpacity
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible16(!modalVisible16)}
            >
              <Text style={styles.textStyle2}>Fechar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <TouchableOpacity
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible16(true)}
      >
        <Text style={styles.textStyle}>Filtro de Café Usado</Text>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible17}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible17(!modalVisible17);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Não Reciclável (Lixeira Cinza)</Text>
            <Image style={styles.modalImg} source={require('../../assets/NreciclavelPequeno.png')}
                    />
            <TouchableOpacity
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible17(!modalVisible17)}
            >
              <Text style={styles.textStyle2}>Fechar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <TouchableOpacity
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible17(true)}
      >
        <Text style={styles.textStyle}>Etiquetas Adesivas</Text>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible18}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible18(!modalVisible18);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Não Reciclável (Lixeira Cinza)</Text>
            <Image style={styles.modalImg} source={require('../../assets/NreciclavelPequeno.png')}
                    />
            <TouchableOpacity
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible18(!modalVisible18)}
            >
              <Text style={styles.textStyle2}>Fechar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <TouchableOpacity
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible18(true)}
      >
        <Text style={styles.textStyle}>Papel de Cartão Ponto</Text>
      </TouchableOpacity>
</View>
<View style={styles.containerResultado}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible19}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible19(!modalVisible19);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Não Reciclável (Lixeira Cinza)</Text>
            <Image style={styles.modalImg} source={require('../../assets/NreciclavelPequeno.png')}
                    />
            <TouchableOpacity
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible19(!modalVisible19)}
            >
              <Text style={styles.textStyle2}>Fechar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <TouchableOpacity
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible19(true)}
      >
        <Text style={styles.textStyle}>Bituca de Cigarro</Text>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible20}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible20(!modalVisible20);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Não Reciclável (Lixeira Cinza)</Text>
            <Image style={styles.modalImg} source={require('../../assets/NreciclavelPequeno.png')}
                    />
            <TouchableOpacity
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible20(!modalVisible20)}
            >
              <Text style={styles.textStyle2}>Fechar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <TouchableOpacity
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible20(true)}
      >
        <Text style={[{marginTop: 9}, styles.textStyle]}>Cerâmicas</Text>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible21}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible21(!modalVisible21);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Não Reciclável (Lixeira Cinza)</Text>
            <Image style={styles.modalImg} source={require('../../assets/NreciclavelPequeno.png')}
                    />
            <TouchableOpacity
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible21(!modalVisible21)}
            >
              <Text style={styles.textStyle2}>Fechar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <TouchableOpacity
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible21(true)}
      >
        <Text style={[{marginTop: 9}, styles.textStyle]}>Isopor</Text>
      </TouchableOpacity>
</View>

</View>
      </ImageBackground>
    </ScrollView>
        /*<View>
            <Text style={styles.loginContainer}>Você está logado como: {usuario}</Text>
            <Text>Aqui você vai descobrir como reciclar!</Text>

            <TouchableOpacity
            onPress={()=>{
                Toast.show({
                    type: 'success',
                    text1: "resultado",
                    text2: "Funcionou!"
                })
            }}
            >
                <Text>Toast</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=> {alert('essa embalagem não é reciclável')}}>
                <Text>Embalagem metalizada</Text>
            </TouchableOpacity>

           
        </View>*/
    )
}

const styles= StyleSheet.create({
    containerResultado: {
      flex: 1,
      
        flexDirection: 'row',
        justifyContent: 'space-around',
        
        width: '100%',
        height: '100%'
             
              
      },
      imagem:{
        flex:1,
        resizeMode: "cover",
        width: '100%',
        height: '100%'
      },
      view2:{
        alignContent: "center"
      },
      background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: '100%',
      },
      loginContainer:{
        flex:1,
        alignSelf: "flex-end",
        marginRight: 5
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 5,
        
      },
      modalView: {
       
        backgroundColor: "white",
        borderRadius: 20,
        padding: 75,
        alignItems: "center",
        shadowColor: "#000",
        width: 400,
        height: 300,
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
      },
      button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        width: 110,
        marginTop: 45
        

      },
      buttonOpen: {
        backgroundColor: "#9bc4b0",
      },
      buttonClose: {
        backgroundColor: "#337C41",
      },
      textStyle: {
        color: "#337C41",
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 15,
        
      },
      textStyle2: {
        color: "#9bc4b0",
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 15,
        
      },
      modalText: {
        marginBottom: 0,
        textAlign: "center",
        fontWeight: 'bold',
        fontSize: 20
      },
      modalImg:{
          height: '100%',
          width: '100%',
          marginLeft: 30,
          marginTop: 10
      },
      Viewtotal:{
        flex:1,
        padding: 30,
       
        marginBottom: 38
      }

})


export default Reciclar