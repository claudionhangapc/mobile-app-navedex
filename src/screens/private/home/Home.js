import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import styles from './home.page.style'
import CardNaver from '../../../components/private/CardNaver'

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  }
];
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
      
      <FlatList
       style={{
        flex:1,
      }} 
      keyExtractor={item => item.id}
      renderItem ={({ item }) => (<CardNaver/>)}
      data={DATA}
      showsVerticalScrollIndicator={false}
      />
      
    </View>
  );
}

