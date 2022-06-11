import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Image, TouchableOpacity, FlatList, TouchableHighlight } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { IconButton, Colors } from 'react-native-paper';
import DateTimePicker from '@react-native-community/datetimepicker';
import { useState } from 'react';
export default function DatePickerGeneral() {

  const [date, setDate] = useState('')
  const [show, setShow] = useState(false)
  
  return (
    <View style={styles.buttonView}>
        <TouchableHighlight 
          activeOpacity={0}
          onPress={()=>{
            alert("ola, bom dia")
          }}
          style={styles.button}
        >
          <Text 
            style ={styles.textButton}
          >
            ola
          </Text>
        </TouchableHighlight>
    </View>
  );
}



const styles = StyleSheet.create({
  buttonView:{
    width:'100%',
    marginBottom:22, 
    borderWidth:1,
   },
  button:{
    height:40,
    padding:8, 
  },
  textButton:{
    fontSize:14,
  }
})