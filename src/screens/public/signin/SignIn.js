import React, {useContext} from 'react'
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, Text, View, TextInput, Button, Image, TouchableOpacity } from 'react-native';
import styles from  './signin.page.style'

import AuthContext from '../../../contexts/auth';

export default function SignIn() {
  const {handleLogin} = useContext(AuthContext)
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
          />
        </View>
      </View>
      <View style={styles.errorView}>
        <Text style={styles.errorText}>
          Senha ou email incorreto
        </Text>
      </View>
      <View style={styles.buttonView}>
        <TouchableOpacity 
        style={styles.button}
        onPress = {
          ()=>{
            handleLogin()
          }
        }
        >
          <Text 
          style={styles.textButton}
          >
            Entrar
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}


