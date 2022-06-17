import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Image, TouchableOpacity, FlatList, TouchableHighlight } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { IconButton, Colors } from 'react-native-paper';
import DateTimePicker from '@react-native-community/datetimepicker';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { useState } from 'react';
export default function DatePickerGeneral() {
  
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [data, setData] = useState(new Date());


  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    console.log("A date has been picked: ", date);
    setData(date)
    
    hideDatePicker();
  };

  const convertDate = (data) => {
    const dataFormatada = ((data.getDate() )) + "-" + ((data.getMonth() + 1)) + "-" + data.getFullYear();
    return dataFormatada;
  }

  return (
    <View style={styles.buttonView}>
        <TouchableOpacity 
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
        </TouchableOpacity> 
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