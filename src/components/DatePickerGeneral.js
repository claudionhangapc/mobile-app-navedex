import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Image, TouchableOpacity, FlatList, TouchableHighlight } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { IconButton, Colors } from 'react-native-paper';
import DateTimePicker from '@react-native-community/datetimepicker';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { useState } from 'react';
import { Keyboard } from 'react-native';
export default function DatePickerGeneral() {
  
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [data, setData] = useState(new Date());
  const [value, setValue] = useState('')

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
    setValue(dataFormatada)
    //return dataFormatada;
  }

  return (
    <View style={styles.buttonView}>
        <View
        style={styles.button}
        >
          <TextInput
          placeholder="data"
          value = {value ? value : ''}
          onFocus={()=>{
            showDatePicker()
          }}
          />

          
        </View>
        {/*<TouchableOpacity 
          activeOpacity={0}
          onPress={()=>{
            showDatePicker()
          }}
          style={styles.button}
        >
         <Text 
            style ={styles.textButton}
          >
            {convertDate(data)}
        </Text>
        <TextInput></TextInput>
        </TouchableOpacity> */}
        <DateTimePickerModal  
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
        />  
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