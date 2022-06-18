import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList, ScrollView  } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { IconButton, Colors } from 'react-native-paper';
import TextIpuntGeneral from '../../../components/TextIpuntGeneral'
import ButtonGeneral from '../../../components/ButtonGeneral'
import DatePickerGeneral from '../../../components/DatePickerGeneral'
import styles from './add.page.style'
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import helpers from '../../../helpers/index'
import validator from 'validator';

export default function Add() {
  const navigation = useNavigation();
  const [sendData, setSendData] = useState(false);

  const [nome,setNome] = useState('')
  const [errorNomeState, setErrorNomeState] = useState(false)

  const [projeto,setProjeto] = useState('')
  const [errorProjetoState, setErrorProjetoState] = useState(false)

  const [cargo,setCargo] = useState('')
  const [errorCargoState, setErrorCargoState] = useState(false)

  const [url,setUrl] = useState('')
  const [errorUrlState, setErrorUrlState] = useState(false)

  const [dataAdmissao,setDataAdmissao] = useState('')
  const [errorDataAdmissaoState, setDataAdmissaoState] = useState(false)

  const [dataNascimento,setDataNascimento] = useState('')
  const [errorDataNascimentoState, setDataNascimentoState] = useState(false)
  
  const salvar = ()=>{
    setSendData(true)
    handleErrorGeneralText(nome, setErrorNomeState)
    handleErrorGeneralText(projeto, setErrorProjetoState)
    handleErrorGeneralText(cargo, setErrorCargoState)
    handleUrlState(url); 

    handleDateState(dataNascimento, setDataNascimentoState)
    handleDateState(dataAdmissao, setDataAdmissaoState)
  }

  const handleErrorNomeState = ()=>{
    if(validator.isEmpty(nome) || validator.isNumeric(nome)){
      setSendData(false)
      setErrorNomeState(true)
    }
  }

  const handleErrorGeneralText = (value, setError)=>{
    if(validator.isEmpty(value) || validator.isNumeric(value)){
      setError(true)
    }else{
      setError(false)
    }
  }

  const handleUrlState = (url) => {
    const result = helpers.validateUrl(url)
    if(result === true){
      setErrorUrlState(false)
    }else{
      setErrorUrlState(true)
    }
    
  }

  const handleDateState = (value, setError)=>{

    const result = validator.isDate(value,{
      format:'DD-MM-YYYY'
    })

    if(result === true){
      setError(true)
    }else{
      setError(false)
    }

  }

  return (
    <View style={styles.container}>
      
     <ScrollView style={{
       flex:1,
     }}
     showsVerticalScrollIndicator={false}
     >  
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
      <TextIpuntGeneral 
        label="Nome" 
        errorMessageState={errorNomeState} 
        errorMessage='o campo nome deve ser um nome valido' 
        onChangeText={setNome} 
        value={nome} 
        />
        <DatePickerGeneral 
          label="Data de nascimento" 
          onChangeText = {setDataNascimento}
          value = {dataNascimento}
        />
       <TextIpuntGeneral 
        label="Projetos que participou"
        errorMessageState={errorProjetoState}
        errorMessage='o campo projeto deve ser um texto' 
        onChangeText={setProjeto} 
        value={projeto} 
       />
       <TextIpuntGeneral 
        label="Cargo"
        errorMessageState={errorCargoState}
        errorMessage='o campo cargo deve ser um texto' 
        onChangeText={setCargo} 
        value={cargo} 
        />
       <DatePickerGeneral 
        label="Tempo de empresa"
        onChangeText = {setDataAdmissao}
        value = {dataAdmissao}
        />
       <TextIpuntGeneral 
        label="URL da foto do Naver"
        errorMessageState={errorUrlState}
        errorMessage='url invalido' 
        onChangeText={setUrl} 
        value={url} 
       />
    <ButtonGeneral label="Salvar" execute={salvar}/> 
     </ScrollView>
    </View>
  );
}

