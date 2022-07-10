import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList, ActivityIndicator  } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import styles from './home.page.style'
import CardNaver from '../../../components/private/CardNaver'
import ModalShowDetails from '../../../components/private/ModalShowDetails'
import ModalDeleteNaver from '../../../components/private/ModalDeleteNaver'
import ModalUpdateNaver from '../../../components/private/ModalUpdateNaver'
import { useState, useEffect, useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import * as naverService from '../../../services/naver'
import NaverContext from '../../../contexts/naver';

export default function Home() {
  const {state:navers, fetchNavers, deleteNaver} = useContext(NaverContext)
  const [showModal, setShowModal] = useState(false)
  const [showModalDelete, setShowModalDelete] = useState(false)
  const [load, setLoad] = useState(false)
  const navigation = useNavigation();
  //const [navers, setNavers] = useState([])
  const [modalItem, setModalItem] = useState({});
  const [modalItemIndex, setModalItemIndex] = useState('');

  //console.log(axiosInstance.defaults.headers.common["Authorization"])
  
   const setModalIemIndexAndOpen = (id) => {

    setModalItemIndex(id)
    setShowModalDelete(true)
  }

  const deleteNaverItem = (id) => {
    deleteNaver(id)
  }


 useEffect(()=>{
  let mounted = true;
    const fetchNaver = async ()=>{
      setLoad(true)
      try {
        if( mounted){ 
          await fetchNavers()

          }
        //console.log(navers)
      } catch (error) {
        console.log(error)
      }

      setLoad(false)
      return () => mounted = false;
    }

    fetchNaver()

    
  },[]) 
  
  return (
    <View style={styles.container}>
      <View style={{ zIndex: 65000 }}>
        <ModalShowDetails
          showModal={showModal}
          setShowModal={setShowModal}
          item = {modalItem}
        />
      </View>

      <View>
        <ModalDeleteNaver
        showModal = {showModalDelete}
        setShowModal = {setShowModalDelete}
        index = {modalItemIndex}
        deleteNaverItem = {deleteNaverItem }
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
      
      { load ? (
      <View style={{flex:1, alignContent:'center', justifyContent:'center'}}>
        <ActivityIndicator size="large" color="#212121"/>
      </View>
      ):(
      <FlatList
       style={{
        flex:1,
      }} 
      keyExtractor={item => item.id}
      renderItem ={({ item }) => (<CardNaver 
        showDetails ={setShowModal} 
        item = {item}
        setModalItem = {setModalItem}
        setModaIndex = { setModalIemIndexAndOpen}

      />)}
      data={navers}
      showsVerticalScrollIndicator={false}
      />)}
      
    </View>
  );
}

