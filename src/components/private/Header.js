import React, {useContext} from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import AuthContext from '../../contexts/auth';

export default function Header() {
  const {handleLogout} = useContext(AuthContext)
  return (
    
      <View style={styles.containerChildren}>
      <Image
          style={styles.logo}
          
          source={
            require('../../../assets/logo.png')
          }
        />
       <TouchableOpacity 
        style={styles.button}
        onPress={()=>{
          handleLogout()
        }}
        >
          <Text 
          style={styles.textButton}
          >
            Sair
          </Text>
        </TouchableOpacity>
      </View>
  );
}

const styles = StyleSheet.create({
   containerChildren:{
     flex:1,
     flexDirection:'row',
     alignItems:'center',
     justifyContent:'space-between',
     paddingRight:20,
   },
   logo:{
    width: 145,
    height: 37,
    resizeMode: 'contain',
  },
  button:{
    padding:8,
    width:50,
    alignItems: "center",
    justifyContent:'center',
  },
  textButton:{
    fontSize:14,
    fontWeight:'600',
  }
 
})