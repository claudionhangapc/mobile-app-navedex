
import React, {useContext} from 'react'
import PublicRoutes from './public.routes'
import PrivateRoutes from './private.routes'

export default function Routes() {
  const state = {}

  state.isLoggedIn = true

  return (
    state.isLoggedIn ? <PrivateRoutes/> :  < PublicRoutes />
  );
}

