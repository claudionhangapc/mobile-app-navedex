
import React, {useContext} from 'react'
import PublicRoutes from './public.routes'
import PrivateRoutes from './private.routes'

export default function Routes() {
  const state = {}

  state.isLoggedIn = false

  return (
    state.isLoggedIn ? <PrivateRoutes/> :  < PublicRoutes />
  );
}

