import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/private/home/Home'

const Stack = createNativeStackNavigator();

export default function PrivateRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown:false,
      }}
    >
      <Stack.Screen name="Home" component={Home}/>
    </Stack.Navigator>
  );
}