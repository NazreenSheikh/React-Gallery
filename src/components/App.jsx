import React, { useContext, useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { auth } from '../config/firebase'
import Home from '../pages/home'
import Login from '../pages/login'
import Signup from '../pages/signup'
import NotFound from '../pages/404'
import Loading from './Loading'
import Header from './Header'
import AppContext from '../context/AppContext'

function App() {
  const { isLoggedIn, setIsLoggedIn, user, setUser } = useContext(AppContext)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    auth.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true)
        setUser(user)
        setIsLoading(false)
      } else {
        setIsLoggedIn(false)
        setUser({})
        setIsLoading(false)
      }
    })
  }, [])

  if (isLoading) {
    return <Loading />
  }
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </div>
  )
}

export default App
