import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { IconButton, Colors } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';


export default function CardNaver({ShowDetails}) {
  const navigation = useNavigation();
  return (
      <View  
      style={{
       marginBottom:15,
      }}
        >
        <TouchableOpacity
          onPress={() => ShowDetails(true)}
        >
        <Image
          style={styles.logo}
          
          source={
            require('../../../assets/IMG_9945.png')
          }
        />
        </TouchableOpacity>
        <View style={styles.viewTextName}>
          <Text style={styles.textName}>
            Juliano Reis
          </Text>
        </View>
        <View style={styles.viewTexTitle}>
          <Text style={styles.texTitle}>
            Frontend developer
          </Text>
        </View>
        <View style={styles.viewAction}>
          <IconButton
            icon="delete"
            color="#212121"
            size={20}
            onPress={() => console.log('Pressed')}
          />
          <IconButton
            icon="pencil"
            color="#212121"
            size={20}
            onPress={() => navigation.navigate('Editar')}
          />
        </View>
       
      </View>
  );
}

const styles = StyleSheet.create({
   logo:{
    width: '100%',
    height: 280,
  },
  button:{
    padding:8,
    width:50,
    alignItems: "center",
    justifyContent:'center',
  },
  textButton:{
    fontSize:14,
    fontWeight:'600',
  },
  viewTextName:{
    marginTop:16,
  },
  textName:{
    fontSize:16,
    fontWeight:'600',
    color:"#212121"
  },
  viewTexTitle:{
    marginTop:13
  },
  texTitle:{
    fontSize:16,
    color:"#212121"
  },
  viewAction:{
    flexDirection:'row'
  }
 
})