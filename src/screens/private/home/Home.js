import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import styles from './home.page.style'
import CardNaver from '../../../components/private/CardNaver'
export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.containerChildren} >
        <Text style={styles.logo}>
          Navers
        </Text>
        <TouchableOpacity 
        style={styles.button}
        onPress={()=>{
          alert("voce deseja realmente sair ?")
        }}
        >
          <Text 
          style={styles.textButton}
          >
            Adicionar novo
          </Text>
        </TouchableOpacity>
      
      </View>

      <View style={{
        flex:1,
      }}>
        <CardNaver/>
        <CardNaver/>
      </View>

    </View>
  );
}

