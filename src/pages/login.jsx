import React, { useRef, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { auth } from '../config/firebase'

const Login = () => {
  const emailRef = useRef()
  const passwordRef = useRef()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  async function handleLogin(e) {
    e.preventDefault()
    try {
      setError('')
      setLoading(true)
      await auth.signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value,
      )
      history.push('/')
    } catch (err) {
      console.log(err)
      setError(err)
    }
  }

  return (
    <div>
      <div>
        <form onSubmit={handleLogin}>
          <h1>Please login</h1>
          {error && <p>{error.message}</p>}
          <div>
            <input
              type="email"
              className=""
              placeholder="enter your email"
              ref={emailRef}
              required
            />
          </div>
          <div>
            <input
              type="password"
              className=""
              placeholder="password"
              ref={passwordRef}
              required
            />
          </div>
          <div>
            <button type="submit">LogIn</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
