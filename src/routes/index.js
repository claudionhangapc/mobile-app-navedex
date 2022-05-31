
import React, {useContext} from 'react'
import PublicRoutes from './public.routes'
import PrivateRoutes from './private.routes'
import AuthContext from '../contexts/auth'

export default function Routes() {
  const {state} = useContext(AuthContext)
  
  return (
    state.isLoggedIn ? <PrivateRoutes/> :  < PublicRoutes />
  );
}

