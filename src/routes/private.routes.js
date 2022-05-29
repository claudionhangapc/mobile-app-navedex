import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/private/home/Home'
import Add from '../screens/private/add/Add'
import Edit from '../screens/private/edit/Edit'
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

      {/*<Stack.Screen 
        name="Adicionar" 
        component={Add}
        options={{
          headerTitle:()=><Header/>
        }}
      /> */}
       {/*<Stack.Screen 
        name="Editar" 
        component={Edit}
        options={{
          headerTitle:()=><Header/>
        }}
      /> */}
      
    </Stack.Navigator>
  );
}