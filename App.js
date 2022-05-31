import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes/index'
import  AuthContext, {AuthProvider} from './src/contexts/auth'

export default function App() {

  return (
    <AuthProvider>
      <SafeAreaProvider>
        <NavigationContainer> 
          <Routes/>
        </NavigationContainer>
      </SafeAreaProvider>
    </AuthProvider>
  );
}


