import * as React from 'react';
import * as naverService from '../services/naver'
const NaverContext = React.createContext([]);

const initialState = []

const reducer = (state = initialState, action)=>{
  switch(action.type){
    case "ADD":{
      const navers = [...initialState]
            navers.push(action.naver)
      return navers;
    }
    case "SET":{
       return [...action.naver]
    }
      
  } 

}

export const NaverProvider = ({children})=>{
  const [state, dispatch] = React.useReducer( reducer, initialState)

  const fetchNavers = async ()=>{
    try {
      //const token = await AsyncStorage.getItem('@userToken')
      const navers = await naverService.navers()
      
      dispatch({
          type:'SET',
          naver:navers,    
      })

    } catch (error) {
      
    }
    
  }

  React.useEffect(() => { 
    const bootstrapAsync = async () => {
      fetchNavers()
    }

    bootstrapAsync()

  }, []);

  return(
    <NaverContext.Provider value={{state}}>
      {children}
    </NaverContext.Provider>
  )

}


export default NaverContext;