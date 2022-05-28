import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/private/home/Home'
import Header from '../components/private/Header'
const Stack = createNativeStackNavigator();

export default function PrivateRoutes() {
  return (
    <Stack.Navigator
    >
      <Stack.Screen 
        name="Home" 
        component={Home}
        options={{
          headerTitle:()=><Header/>
        }}
      />
    </Stack.Navigator>
  );
}