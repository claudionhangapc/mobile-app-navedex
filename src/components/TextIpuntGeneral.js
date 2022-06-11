import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Image, TouchableOpacity, FlatList } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { IconButton, Colors } from 'react-native-paper';

export default function TextIpuntGeneral({label = '', value = '',  errorMessage = '', errorMessageState = false, onChangeText = null}) {
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
          value ={value}
          onChangeText = {onChangeText}
        />
      </View>
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