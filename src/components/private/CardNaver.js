import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { IconButton, Colors } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';



export default function CardNaver({showDetails, item, setModalItem,setModaIndex}) {
  const navigation = useNavigation();
  //console.log(item)
  return (
      <View  
      style={{
       marginBottom:15,
      }}
        >
        <TouchableOpacity
          onPress={() => {
            setModalItem(item)
            showDetails(true)

          }}
        >
        <Image
          style={styles.logo}
          
          source={{
            uri:item.url
          }}
        />
        </TouchableOpacity>
        <View style={styles.viewTextName}>
          <Text style={styles.textName}>
           {item.name}
          </Text>
        </View>
        <View style={styles.viewTexTitle}>
          <Text style={styles.texTitle}>
            {item.job_role}
          </Text>
        </View>
        <View style={styles.viewAction}>
          <IconButton
            icon="delete"
            color="#212121"
            size={20}
            onPress={ () => {setModaIndex(item.id)}}
          />
          <IconButton
            icon="pencil"
            color="#212121"
            size={20}
            onPress={() => navigation.navigate('Editar',{naverId:item.id})}
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