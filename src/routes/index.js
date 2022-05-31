
import React, {useContext} from 'react'
import PublicRoutes from './public.routes'
import PrivateRoutes from './private.routes'
import AuthContext from '../contexts/auth'
import Splash from './Splash'
export default function Routes() {
  const {state} = useContext(AuthContext)
  /*state.isLoading ? <PrivateRoutes/> :  < PublicRoutes />*/
  return (
    state.isLoading ? <Splash/> :  state.userToken == null ? < PublicRoutes />:<PrivateRoutes/>
  );
}

