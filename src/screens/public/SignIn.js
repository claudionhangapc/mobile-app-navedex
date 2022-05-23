import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, Text, View } from 'react-native';

export default function SignIn() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>SigIn Page</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
   
  },
});
