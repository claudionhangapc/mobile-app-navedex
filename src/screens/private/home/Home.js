import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import styles from './home.page.style'

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerChildren}>
      <Image
          style={styles.logo}
          
          source={
            require('../../../../assets/logo.png')
          }
        />
       <TouchableOpacity 
        style={styles.button}
        onPress={()=>{
          alert("voce deseja realmente sair ?")
        }}
        >
          <Text 
          style={styles.textButton}
          >
            Sair
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

