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

    case "DELETE":{
      //return [...action.naver]
      const navers = [...state]
      const index = navers.findIndex(naver => naver.id ===action.id)
      navers.splice(index,1)
      return navers
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

  const deleteNaver = (id)=>{
    dispatch({
      type:'DELETE',
      id:id,    
    })
  }

  const filterNaver = (id)=>{
    const index = state.findIndex(naver => naver.id === id)
    return state[index]
  }

  return(
    <NaverContext.Provider value={{state, fetchNavers, create, deleteNaver, filterNaver}}>
      {children}
    </NaverContext.Provider>
  )

}


export default NaverContext;