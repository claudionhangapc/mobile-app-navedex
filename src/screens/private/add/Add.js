import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList, ScrollView  } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { IconButton, Colors } from 'react-native-paper';
import TextIpuntGeneral from '../../../components/TextIpuntGeneral'
import ButtonGeneral from '../../../components/ButtonGeneral'
import styles from './add.page.style'
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';

import validator from 'validator';

export default function Add() {
  const navigation = useNavigation();
  const [sendData, setSendData] = useState(false);

  const [nome,setNome] = useState('')
  const [errorNomeState, setErrorNomeState] = useState(false)

  const [idade,setIdade] = useState('')
  const [errorIdadeState, setErrorIdadeState] = useState(false)
  
  const salvar = ()=>{
    resetAllErrorState()
    handleErrorNomeState()
    handleIdadeNomeState()
    
  }

  const resetAllErrorState = ()=>{
    setSendData(true)
    setErrorNomeState(false)   
  }
  const handleErrorNomeState = ()=>{
    if(validator.isEmpty(nome) || validator.isNumeric(nome)){
      setSendData(false)
      setErrorNomeState(true)
    }
  }

  handleIdadeNomeState = ()=>{
    if(!validator.isNumeric(idade)){
      setSendData(false)
      setErrorIdadeState(true)
    }
  }
  return (
    <View style={styles.container}>
      <View style={styles.containerChildren} >
        <IconButton
          icon="arrow-left"
          color="#212121"
          size={20}
          onPress={() => navigation.goBack()}
          />
        <Text style={styles.title}>
          Adicionar Naver
        </Text>
     </View>
     <ScrollView style={{
       flex:1,
     }}
     showsVerticalScrollIndicator={false}
     >
       <TextIpuntGeneral label="Nome" errorMessageState={errorNomeState} errorMessage='o campo nome de ser um nome valido' onChangeText={setNome} value={nome} />
       <TextIpuntGeneral label="Idade"/>
       <TextIpuntGeneral label="Projetos que participou"/>
       <TextIpuntGeneral label="Cargo"/>
       <TextIpuntGeneral label="Tempo de empresa"/>
       <TextIpuntGeneral label="URL da foto do Naver"/>
       <ButtonGeneral label="Salvar" execute={salvar}/>
     </ScrollView>
    </View>
  );
}

