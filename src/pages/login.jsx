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
    <div className="flex my-32  justify-center">
      <div className=" w-5/12  text-white flex flex-wrap justify-center shadow-lg rounded-lg bg-gradient-to-br to-gray-600 from-purple-500 ">
        <form className="  w-10/12 " onSubmit={handleLogin}>
          <h1 className="w-full text-4xl  tracking-widest text-center pt-10 pb-3">
            Login Please{' '}
          </h1>
          {error && <p>{error.message}</p>}
          <div className="w-full my-6  text-black ">
            <input
              type="email"
              placeholder="enter your email"
              ref={emailRef}
              required
              className="px-1 text-lg"
            />
          </div>
          <div className="w-full my-6 text-black  ">
            <input
              type="password"
              placeholder="password"
              ref={passwordRef}
              required
              className="px-1 text-lg"
            />
          </div>
          <div className="w-full my-10">
            <button
              type="submit"
              className="p-2 rounded shadow w-full bg-gradient-to-tr from-gray-400 to-gray-200 text-purple-700 font-bold"
            >
              LogIn
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
