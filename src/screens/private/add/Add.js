import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList, ScrollView  } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { IconButton, Colors } from 'react-native-paper';
import TextIpuntGeneral from '../../../components/TextIpuntGeneral'
import ButtonGeneral from '../../../components/ButtonGeneral'
import styles from './add.page.style'
import { useNavigation } from '@react-navigation/native';

export default function Home() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.containerChildren} >
        <IconButton
          icon="arrow-left"
          color="#212121"
          size={20}
          onPress={() => navigation.goBack()}
          />
        <Text style={styles.title}>
          Adicionar Naver
        </Text>
     </View>
     <ScrollView style={{
       flex:1,
     }}
     showsVerticalScrollIndicator={false}
     >
       <TextIpuntGeneral label="Nome"/>
       <TextIpuntGeneral label="Idade"/>
       <TextIpuntGeneral label="Projetos que participou"/>
       <TextIpuntGeneral label="Cargo"/>
       <TextIpuntGeneral label="Tempo de empresa"/>
       <TextIpuntGeneral label="URL da foto do Naver"/>
       <ButtonGeneral label="Salvar"/>
     </ScrollView>
    </View>
  );
}

