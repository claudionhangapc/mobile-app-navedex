import React from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";

import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
const Splash = () => (
  <View style={[styles.container, styles.horizontal]}>
    <ActivityIndicator size="large" color="#212121"/>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10
  }
});

export default () => {
  return(
    <Stack.Navigator 
      screenOptions={{
        headerShown:false,
      }}
    >
      <Stack.Screen name="Splash" component={Splash}/>
    </Stack.Navigator>
  ) 
}