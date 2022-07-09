import * as React from 'react';
import * as naverService from '../services/naver'
const NaverContext = React.createContext([]);

const initialState = []

const reducer = (state = initialState, action)=>{
  switch(action.type){
    case "ADD":{
      const navers = [...state]
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

  const create = (naver)=>{
    dispatch({
      type:'ADD',
      naver:naver,    
    })
  }

  /*React.useEffect(() => { 
    const bootstrapAsync = async () => {
      fetchNavers()
    }

    bootstrapAsync()

  }, []); */

  return(
    <NaverContext.Provider value={{state, fetchNavers, create}}>
      {children}
    </NaverContext.Provider>
  )

}


export default NaverContext;