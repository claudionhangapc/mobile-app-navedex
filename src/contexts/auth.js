import * as React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
const AuthContext = React.createContext({});

const initialState = {
  isLoggedIn:false,
  email:null,
  userToken:null,
  isLoading:true,
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
      return {
        ...state, 
        userToken:action.token,
        isLoading:false
      }
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
    //await AsyncStorage.setItem('@userToken',null)
    //
    dispatch({
      type:'LOGGED_OUT',
      token:null,
    })
  }

  const handleToken = async ()=>{
    let token;
    try {
      const token = await AsyncStorage.getItem('@userToken')
      if (token){
        dispatch({
          type:'LOGGED_IN',
          token
        })
      }
      
    } catch (error) {
      
    }
    
    dispatch({
      type:'RESTORE_TOKEN',
      token:token,
    })
    
  }

  React.useEffect(() => { 
    const bootstrapAsync = async () => {
      handleToken()
    }

    bootstrapAsync()

  }, []);

  return(
    <AuthContext.Provider value={{state, handleLogin, handleLogout }}>
      {children}
    </AuthContext.Provider>
  )

}


export default AuthContext;