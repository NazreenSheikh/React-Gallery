import React, { useContext } from 'react'
import { useHistory, NavLink } from 'react-router-dom'
import AppContext from '../context/AppContext'
import { auth } from '../config/firebase'

const Header = () => {
  const { isLoggedIn } = useContext(AppContext)
  const history = useHistory()
  async function handleLogout() {
    try {
      await auth.signOut()
      history.push('/')
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <div>
      <nav className="flex justify-between py-5 text-white bg-gray-900">
        <ul className="flex justify-between px-10">
          <li className="mr-5">
            <NavLink to="/" exact activeClassName="underline text-blue-200">
              Home
            </NavLink>
          </li>
          <li className="mr-5">
            <NavLink
              to="/gallery"
              strict
              activeClassName="underline text-blue-200"
            >
              Gallery
            </NavLink>
          </li>
          <li className="mr-5">
            <NavLink
              to="/tensorflow"
              exact
              activeClassName="underline text-blue-200"
            >
              Tensorflow
            </NavLink>
          </li>
        </ul>
        <ul className="flex justify-between px-10">
          <li>
            {isLoggedIn ? (
              <button onClick={handleLogout}>Logout</button>
            ) : (
              <NavLink to="/login" activeClassName="underline text-blue-200">
                Login
              </NavLink>
            )}
          </li>
          {!isLoggedIn && (
            <li className="ml-5">
              <NavLink to="/signup" activeClassName="underline text-blue-200">
                SignUp
              </NavLink>
            </li>
          )}
        </ul>
      </nav>
    </div>
  )
}

export default Header
