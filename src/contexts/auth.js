import * as React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
const AuthContext = React.createContext({});

const initialState = {
  isLoggedIn:false,
  email:null,
  userToken:null,
  isLoading:false,
}
const reducer = (state = initialState, action)=>{
  switch(action.type){
    case "LOGGED_IN":{
      return {...state, isLoggedIn:true, userToken:action.token}
    }
    case "LOGGED_OUT":{
      return {...state, isLoggedIn:false, userToken:action.token}
    }
    case "RESTORE_TOKEN":{
      return {...state, userToken:action.token}
    }
      
  } 

}

export const AuthProvider = ({children})=>{
  const [state, dispatch] = React.useReducer( reducer, initialState)
  
  const handleLogin = async (data)=>{
    const {token} = data
    await AsyncStorage.setItem('@userToken',token)

    //
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`

    //
    dispatch({
      type:'LOGGED_IN',
      token
    })

  }

  const handleLogout = async (data = null)=>{

    // 
    await AsyncStorage.removeItem('@userToken')
    //
    dispatch({
      type:'LOGGED_OUT',
      token:null,
    })
  }

  return(
    <AuthContext.Provider value={{state, handleLogin, handleLogout }}>
      {children}
    </AuthContext.Provider>
  )

}


export default AuthContext;