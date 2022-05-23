import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/private/Home'

const Stack = createNativeStackNavigator();

export default function PrivateRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home}/>
    </Stack.Navigator>
  );
}