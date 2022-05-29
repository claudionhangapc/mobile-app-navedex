import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, Modal, TouchableWithoutFeedback} from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { IconButton, Colors } from 'react-native-paper';
import { useState } from 'react';

export default function CardNaver() {
  const [showModal, setShowModal] = useState(true)
  const onPress = () => {
    setShowModal(false)
  };
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
            <View style={styles.main}>
              <View
                style={styles.imageView}
              >
                <Image
                  style={styles.image}
                  source={
                    require('../../../assets/IMG_9945.png')
                  }
                />
              </View>
              <View style={styles.containerModalInfo}>
              <View style={styles.viewTextInfo}>
                <Text style={styles.textPersonName}>
                  Juliano Reis
                </Text>
                <Text style={styles.textInfo}>
                  Frontend Developer
                </Text>
              </View>
              <View style={styles.viewTextInfo}>
                <Text style={styles.textTitle}>
                  Idade
                </Text>
                <Text style={styles.textInfo}>
                  13
                </Text>
              </View>
              <View style={styles.viewTextInfo}>
                <Text style={styles.textTitle}>
                  Projetos que participou
                </Text>
                <Text style={styles.textInfo}>
                 Estudo das Redes Neurais
                </Text>
              </View>
              <View style={styles.viewAction}>
                <IconButton
                  icon="delete"
                  color="#212121"
                  size={20}
                  onPress={() => console.log('Pressed')}
                />
                  <IconButton
                    icon="pencil"
                    color="#212121"
                    size={20}
                    onPress={() => console.log('Pressed')}
                  />
              </View>

              </View>
            </View>
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
  }
})