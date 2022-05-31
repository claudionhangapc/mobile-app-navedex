import * as React from 'react';
const AuthContext = React.createContext({});

const initialState = {
  isLoggedIn:false,
  email:null,
  userToken:null,
}
const reducer = (state = initialState, action)=>{
  switch(action.type){
    case "LOGGED_IN":{
      return {...state, isLoggedIn:true}
    }
      
  } 

}

export const AuthProvider = ({children})=>{
  const [state, dispatch] = React.useReducer( reducer, initialState)
  
  const handleLogin = async (data = null)=>{
    dispatch({
      type:'LOGGED_IN'
    })
  }
  return(
    <AuthContext.Provider value={{state, handleLogin }}>
      {children}
    </AuthContext.Provider>
  )

}


export default AuthContext;