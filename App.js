import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes/index'
import  AuthContext, {AuthProvider} from './src/contexts/auth'
import { NaverProvider } from './src/contexts/naver';
export default function App() {

  return (
    <AuthProvider>
      <SafeAreaProvider>
        < NaverProvider>
          <NavigationContainer> 
            <Routes/>
          </NavigationContainer>
        </NaverProvider>
      </SafeAreaProvider>
    </AuthProvider>
  );
}


