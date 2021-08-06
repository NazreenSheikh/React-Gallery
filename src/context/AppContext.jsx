import React, { createContext, useState } from 'react'

const AppContext = createContext()

export const AppProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [user, setUser] = useState({})

  const values = {
    isLoggedIn,
    setIsLoggedIn,
    user,
    setUser,
  }

  return <AppContext.Provider value={values}>{children}</AppContext.Provider>
}

export default AppContext
