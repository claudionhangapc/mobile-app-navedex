import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Image, TouchableOpacity, FlatList, TouchableHighlight } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { IconButton, Colors } from 'react-native-paper';
import DateTimePicker from '@react-native-community/datetimepicker';
import DatePicker from 'react-native-date-picker'
import { useState } from 'react';
export default function DatePickerGeneral() {

  const [date, setDate] = useState(new Date())
  const [open, setOpen] = useState(false)
  
  return (
    <View style={styles.buttonView}>
        <TouchableHighlight 
          activeOpacity={0}
          onPress={()=>{
            setOpen(true)
          }}
          style={styles.button}
        >
          <Text 
            style ={styles.textButton}
          >
            ola
          </Text>
          
        </TouchableHighlight>
        <DatePicker
            modal
            open={open}
            date={date}
            onConfirm={(date) => {
              setOpen(false)
              setDate(date)
            }}
            onCancel={() => {
              setOpen(false)
            }}
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