import React from 'react'
import { Outlet } from 'react-router-dom'
import Login from '../pages/Login'

const ProtectedRoutes = () => {

    const loginInfo = JSON.parse(localStorage.getItem('login'))
  return (
    <div>
      {loginInfo !== null && loginInfo.isLoggedin ? <Outlet /> : <Login /> }
    </div>
  )
}

export default ProtectedRoutes
