import React, { createContext, useState } from 'react'

export default AppContent = createContext({ loggedIn: false, user: {} })
export function AppProvider({ children }) {
  const [isloggdIn, setIsloggedIn] = useState(false)
  const [user, setUser] = useState('')
  const value = {
    user,
    setUser,
    isloggdIn,
    setIsloggedIn,
  }

  return (
    <AppContent.AppProvider value={value}>{children}</AppContent.AppProvider>
  )
}
