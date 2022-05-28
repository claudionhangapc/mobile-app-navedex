import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Image, TouchableOpacity, FlatList } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { IconButton, Colors } from 'react-native-paper';

export default function ButtonGeneral({label}) {
  return (
    <View style={styles.buttonView}>
        <TouchableOpacity 
        style={styles.button}>
          <Text 
          style={styles.textButton}
          >
            {label}
          </Text>
        </TouchableOpacity>
    </View>
  );
}



const styles = StyleSheet.create({
  buttonView:{
    width:'100%',
    marginBottom:22, 
   },
  button:{
    backgroundColor:'#212121',
    height:40,
    alignItems: "center",
    justifyContent:'center',
    padding:8, 
  },
  textButton:{
    color:'#FFFFFF',
    fontSize:14,
    fontWeight:'600',
  }
})