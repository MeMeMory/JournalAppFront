import { Navigate, useLocation } from 'react-router-dom'

import { useActions } from '@/hooks/useAction'

import { getAccessToken, getRefreshToken } from '@/services/auth/auth.helper'

export const RequireAuth = ({ children }) => {
  let location = useLocation()

  const { logout } = useActions()

  const accessToken = getAccessToken()
  const refreshToken = getRefreshToken()

  if (!accessToken || !refreshToken) {
    logout()
    return <Navigate to='/auth' state={{ from: location }} replace />
  }

  return children
}
