import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,  TouchableOpacity, Modal, TouchableWithoutFeedback} from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { IconButton, Colors } from 'react-native-paper';
import { useState } from 'react';
import helpers from '../../helpers/index'
import Image from 'react-native-image-progress';
import ProgressBar from 'react-native-progress/Bar';

export default function CardNaver({showModal, setShowModal, item}) {
  //const [showModal, setShowModal] = useState(true)
  console.log(item)
  const onPress = () => {
    setShowModal(false)
  };
  
  const getAge = (date) => {
    if (date){
      const onlyYear = helpers.getOnlyYear(date)
      const age = helpers.getAge(onlyYear)
      return age;
    }
    
    return "";
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
                  source={{
                    uri:item.url
                  }}
                  indicator={ProgressBar} 
                />
              </View>
              <View style={styles.containerModalInfo}>
              <View style={styles.viewTextInfo}>
                <Text style={styles.textPersonName}>
                {item.name} 
                </Text>
                <Text style={styles.textInfo}>
                {item.job_role} 
                </Text>
              </View>
              <View style={styles.viewTextInfo}>
                <Text style={styles.textTitle}>
                  Idade
                </Text>
                <Text style={styles.textInfo}>
                  {getAge(item.birthdate)}
                </Text>
              </View>
              <View style={styles.viewTextInfo}>
                <Text style={styles.textTitle}>
                  Projetos que participou
                </Text>
                <Text style={styles.textInfo}>
                {item.project} 
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