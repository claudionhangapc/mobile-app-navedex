import React, {useContext, useState} from 'react'
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, Text, View, TextInput, Button, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import styles from  './signin.page.style'

import AuthContext from '../../../contexts/auth';
import * as authService from '../../../services/auth'

export default function SignIn() {
  const {handleLogin} = useContext(AuthContext)
  const [error, setError] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [email, setEmail] = useState('')
  const [load, setLoad] = useState(false)
  const [password, setPassword] = useState('')

  const signIn = async ()=>{
    setError(false)
    setErrorMessage('')
    setLoad(true)
    try{
      /*email: "testepc@gmail.com",
	      password: "nave1234"*/
      
      const result = await authService.signIn({
        email,
        password
      })

      handleLogin(result)

      //console.log(result)
    } catch (error) {
      console.log(error)
      setError(true) 
    }

    setLoad(false)
  }
  return (
    <SafeAreaView style={styles.container}>
      <View >
        <Image
          style={styles.logo}
          
          source={
            require('../../../../assets/logo.png')
          }
        />
      </View>
      <View style={styles.containerChildren}>
        <View style={styles.textView}>
          <Text
            style={styles.text}
          >
            E-mail
          </Text>
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.input}
            placeholder='E-mail'
            value={email}
            onChangeText={setEmail}
            autoCapitalize = 'none'
          />
        </View>
      </View>
      <View style={styles.containerChildren}>
        <View style={styles.textView}>
          <Text  
          style={styles.text}
          >
            Senha 
          </Text> 
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.input}
            placeholder='Senha'
            value={password}
            onChangeText={setPassword}
            autoCapitalize = 'none'
          />
        </View>
      </View>
      {error && (
      <View style={styles.errorView}>
        <Text style={styles.errorText}>
          Senha ou email incorreto
        </Text>
      </View>
      )}
      { load ? (<View style={styles.buttonView}>
        <ActivityIndicator size="large" color="#212121"/>
      </View>):
      (<View style={styles.buttonView}>
        <TouchableOpacity 
        style={styles.button}
        onPress = {
          ()=>{
            //handleLogin()
            signIn()
          }
        }
        >
          <Text 
          style={styles.textButton}
          >
            Entrar
          </Text>
        </TouchableOpacity>
      </View>)}
    </SafeAreaView>
  );
}


