import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList, ActivityIndicator  } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import styles from './home.page.style'
import CardNaver from '../../../components/private/CardNaver'
import ModalShowDetails from '../../../components/private/ModalShowDetails'
import ModalDeleteNaver from '../../../components/private/ModalDeleteNaver'
import ModalUpdateNaver from '../../../components/private/ModalUpdateNaver'
import { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import * as naverService from '../../../services/naver'

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d7u2',
    title: 'Third Item',
  }
];
export default function Home() {
  const [showModal, setShowModal] = useState(false)
  const [load, setLoad] = useState(false)
  const navigation = useNavigation();
  const [navers, setNavers] = useState([])
  //console.log(axiosInstance.defaults.headers.common["Authorization"])

  useEffect(()=>{
    const fetchNaver = async ()=>{
      setLoad(true)
      try {
        const result  = await naverService.navers()
        setNavers(result)
        
        //console.log(navers)
      } catch (error) {
        console.log(error)
      }

      setLoad(false)
    }

    fetchNaver()

    
  },[])
  
  return (
    <View style={styles.container}>
      <View style={{ zIndex: 65000 }}>
        <ModalShowDetails
        showModal={showModal}
        setShowModal={setShowModal}
        />
      </View>

      <View style={styles.containerChildren} >
        <Text style={styles.logo}>
          Navers
        </Text>
        <TouchableOpacity 
        style={styles.button}
        onPress={()=>{
          navigation.navigate('Adicionar')
        }}
        >
          <Text 
          style={styles.textButton}
          >
            Adicionar novo
          </Text>
        </TouchableOpacity>
      
      </View>
      
      { load ? (<View style={{flex:1, alignContent:'center', justifyContent:'center'}}>
        <ActivityIndicator size="large" color="#212121"/>
      </View>):
      (<FlatList
       style={{
        flex:1,
      }} 
      keyExtractor={item => item.id}
      renderItem ={({ item }) => (<CardNaver ShowDetails ={setShowModal} item = {item}/>)}
      data={navers}
      showsVerticalScrollIndicator={false}
      />)}
      
    </View>
  );
}

