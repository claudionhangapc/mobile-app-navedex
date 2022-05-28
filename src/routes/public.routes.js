import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignIn from '../screens/public/signin/SignIn'

const Stack = createNativeStackNavigator();

export default function PublicRoutes() {
  return (
    <Stack.Navigator 
      screenOptions={{
        headerShown:false,
      }}
    >
      <Stack.Screen name="SignIn" component={SignIn}/>
    </Stack.Navigator>
  );
}
