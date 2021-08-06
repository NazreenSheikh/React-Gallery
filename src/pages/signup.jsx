import React, { useRef, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { auth } from '../config/firebase'

const SignUp = () => {
  const emailRef = useRef()
  const passwordRef = useRef()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  async function handleSignup(e) {
    e.preventDefault()

    try {
      setError('')
      setLoading(true)
      await auth.createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value,
      )
      history.push('/')
    } catch (err) {
      console.log(err)
      setError(err.message)
    }
  }

  return (
    <div>
      <div>
        <form onSubmit={handleSignup}>
          <h1>Please SignUp</h1>
          {error && <p>{error}</p>}
          <div>
            <input
              type="email"
              ref={emailRef}
              className=""
              placeholder="Enter your email"
              required
            />
          </div>
          <div>
            <input
              ref={passwordRef}
              type="password"
              className=""
              placeholder="password"
              required
            />
          </div>
          <div>
            <button disabled={loading} type="submit">
              SignUp
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
export default SignUp
