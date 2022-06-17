import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Image, TouchableOpacity, FlatList } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { IconButton, Colors } from 'react-native-paper';
import { Keyboard } from 'react-native';
import { useState } from 'react';
import DateTimePickerModal from "react-native-modal-datetime-picker";

export default function TextIpuntGeneral({label = '', value = '',  errorMessage = '', errorMessageState = false, onChangeText = null}) {

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [data, setData] = useState(new Date());
  const [valueString, setValueString] = useState('')
  
  const showDatePicker = () => {
    setDatePickerVisibility(true);
    Keyboard.dismiss();
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    console.log("A date has been picked: ", date);
    setData(date)
    convertDate(date)
    hideDatePicker();
  };

  const convertDate = (data) => {
    const dataFormatada = ((data.getDate() )) + "-" + ((data.getMonth() + 1)) + "-" + data.getFullYear();
    setValueString(dataFormatada)
    //return dataFormatada;
  }

  return (
    <View style={styles.container}>
      <View style={styles.textView}>
          <Text  
          style={styles.text}
          >
            {label}
          </Text>
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.input}
          placeholder={label}
          value ={valueString}
          onFocus={()=>{
            showDatePicker()
          }}
        />
      </View>
      <DateTimePickerModal  
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
        />  
      {errorMessageState && (<View style={styles.errorView}>
        <Text  
          style={styles.errorText}
          >
          {errorMessage}
        </Text>
      </View>)}
    </View>
  );
}



const styles = StyleSheet.create({
  container:{
    marginBottom:22,
  },
   inputView:{
     width:'100%',
   },
   input:{
     width:'100%',
     borderWidth:1,
     height:40,
     padding:10
   },
   textView:{
     marginBottom:4,
     textAlign:'left'
   },
   text:{
     fontSize:14,
     fontWeight:'600',
   },
   errorView:{
    width:'100%',
    marginTop:2,
   },
   errorText:{
    color:'#e57373',
    fontSize:14,
   }
})