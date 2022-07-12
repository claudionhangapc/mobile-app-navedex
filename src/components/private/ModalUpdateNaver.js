import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, Modal, TouchableWithoutFeedback} from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { IconButton, Colors } from 'react-native-paper';
import { useState } from 'react';


const ModalDeleteFeedBack = ()=>{
  return (
    <View style={styles.main}>
      <View style={styles.containerModalInfo}>
      <View style={styles.viewTextInfo}>
        <Text style={styles.textPersonName}>
          Naver atualizado
        </Text>
      </View>
      <View style={styles.viewTextInfo}>
        <Text style={styles.textInfo}>
          Naver atualizado com sucesso!
        </Text>
      </View>
      </View>
  </View>
  )
}

export default function CardNaver({showModal, setShowModal}) {
  //const [showModal, setShowModal] = useState(false)
  const onPress = () => {
    setShowModal(false)
  }
  
  return (
      
        <View  style={{
          flex:1,
        }}>
        <Modal
          animationType='slide' 
          visible ={showModal}
          transparent={true}
        > 
        <TouchableWithoutFeedback
      onPress={onPress}
      style={{
        flex:1,
      }}
        >
          <View style={styles.containerModal}>
           <ModalDeleteFeedBack/> 
          </View>
          </TouchableWithoutFeedback>
        </Modal>
        </View>
  );
}

const styles = StyleSheet.create({
  containerModal:{
    flex:1,
    padding:20,
    backgroundColor:'rgba(0, 0, 0,0.9)',
  },
  main:{
    flex:1,
    justifyContent:'center'
  },
  imageView:{
  },
  image:{
    width: '100%',
    height: 280,
  },
  containerModalInfo:{
    backgroundColor:"#fff",
    width:'100%'
  },
  textPersonName:{
    marginTop:10,
    fontSize:24,
    fontWeight:'600',
    color:"#212121"
  },
  textTitle:{
    fontSize:16,
    fontWeight:'600',
    color:"#212121",
    marginBottom:10,
  },
  textInfo:{
    fontSize:16,
    color:"#212121",
  },
  viewTextInfo:{
    marginBottom:24,
    paddingLeft:10,
    paddingRight:10,
  },
  viewAction:{
    flexDirection:'row',
    marginBottom:24,
    paddingLeft:20,
    paddingRight:20,
    justifyContent:'flex-end',
  },
  buttonCancel:{
    padding:10,
    marginRight:24,
    width:120,

  },
  buttonCancelText:{
    fontSize:16,
    color:"#212121",
    alignSelf:'center',
    
  },
  buttonDelete:{
    padding:10,
    backgroundColor:'#212121',
    width:120
  },
  buttonDeleteText:{
    fontSize:16,
    color:"#fff",
    alignSelf:'center'
  }

})