import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, Text, View, TextInput, Button, Image } from 'react-native';


export default function SignIn() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Image
          style={styles.logo}
          
          source={
            require('../../../assets/logo.png')
          }
        />
      </View>
      <View style={styles.containerChildren}>
        <View>
          <Text>
            E-mail
          </Text>
        </View>
        <View style={styles.itemView}>
          <TextInput
            style={styles.input}
            placeholder='E-mail'
          />
        </View>
      </View>
      <View style={styles.containerChildren}>
        <View>
          <Text >
            Senha
          </Text>
        </View>
        <View style={styles.itemView}>
          <TextInput
            style={styles.input}
            placeholder='Senha'
          />
        </View>
      </View>
      <View>
        <Button title='Entrar'/>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
   flex:1,
   justifyContent:'center',
   alignItems:'center'
  },
  containerChildren:{
    width:'100%',
    alignItems:'center'
  },
  logo:{
    width: 300,
    height: 40,
    resizeMode: 'center'
  },
  itemView:{
    width:'90%',
  },
  input:{
    width:'100%',
    borderWidth:1,
    height:40,
    padding:10
  }
});
