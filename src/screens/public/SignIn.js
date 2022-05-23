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
      <View>
        <View>
          <Text>
            E-mail
          </Text>
        </View>
        <View>
          <TextInput
            placeholder='E-mail'
          />
        </View>
      </View>
      <View>
        <View>
          <Text>
            Senha
          </Text>
        </View>
        <View>
          <TextInput
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
  logo:{
    width: 300,
    height: 40,
    resizeMode: 'center'
  }
});
